import { onRouteChange } from "./routing.js";
import { answerQuestion } from "./quiz.js";

const html = (templateString) => {
  return new DOMParser().parseFromString(templateString, "text/html").body
    .firstChild;
};

const render = (nodeToRenderTo, nodeToRender) => {
  nodeToRenderTo.innerHTML = "";
  nodeToRenderTo.appendChild(nodeToRender);
};

/**
 *
 * @returns Home Template
 */
const home = async () => {
  const domElements = html(`
    <div class="grid place-items-center">
      <button type="button" class="
      bg-indigo-600
      text-white text-sm
      font-bold
      tracking-wide
      rounded-full
      px-5
      py-2" id="start-quiz">Start</button>
    </div>
  `);

  domElements.querySelector("#start-quiz").addEventListener("click", (evt) => {
    history.pushState(null, "Quiz Page", "/quiz");
    onRouteChange();
  });
  return domElements;
};

const quizTemp = async (question) => {
  const domElements = html(`
  <div id="question-container">
    <div class="text-2xl font-bold">${question.question}</div>
      <div id="answer-buttons" class="grid grid-cols-2 gap-2">
      <label data-correct="a" class="btn btn-card hover:bg-gray-100 mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg selection:cursor-pointer">${question.a}</label>
      <label data-correct="b" class="btn btn-card hover:bg-gray-100 mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg">${question.b}</label>
      <label data-correct="c" class="btn btn-card hover:bg-gray-100 mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg">${question.c}</label>
      <label data-correct="d" class="btn btn-card hover:bg-gray-100 mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg">${question.d}</label>
      </div>
    </div>
  </div>
    `);

  domElements.querySelectorAll(".btn-card").forEach((element) => {
    element.addEventListener("click", (evt) => {
      const answer = evt.target.dataset?.correct;
      answerQuestion(question, answer).then((res) => {
        history.pushState({ question, answer, res }, "Result Page", "/result");
        onRouteChange();
      });
    });
  });
  return domElements;
};

const resultTemp = () => {
  const { question, answer, res } = history.state;

  const domElements = html(`
  <div id="question-container">
    <div class="text-2xl font-bold">${question.question}</div>
    <div id="answer-buttons" class="grid grid-cols-2 gap-2">
      <label class="btn hover:bg-gray-100 mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg ${getStatusClass(
        "a",
        answer,
        res
      )}">${question.a}</label>
      <label class="btn hover:bg-gray-100 mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg ${getStatusClass(
        "b",
        answer,
        res
      )}">${question.b}</label>
      <label class="btn hover:bg-gray-100 mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg ${getStatusClass(
        "c",
        answer,
        res
      )}">${question.c}</label>
      <label class="btn hover:bg-gray-100 mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg ${getStatusClass(
        "d",
        answer,
        res
      )}">${question.d}</label>
    </div>
    <div class="mt-6 flow-root">
      <button
        id="start-btn"
        class="
          float-right
          bg-gray-600
          text-white text-sm
          font-bold
          tracking-wide
          rounded-full
          px-5
          py-2
          ml-0.5
        "
      >
        Exit
      </button>
      <button
        id="next-btn"
        class="
          float-right
          bg-indigo-600
          text-white text-sm
          font-bold
          tracking-wide
          rounded-full
          px-5
          py-2
        "
      >
        Next &gt;
      </button>
    </div>
`);

  domElements.querySelector("#start-btn").addEventListener("click", (evt) => {
    history.replaceState(null, "Home Page", "/");
    onRouteChange();
  });
  domElements.querySelector("#next-btn").addEventListener("click", (evt) => {
    history.pushState(null, "Quiz Page", "/quiz");
    onRouteChange();
  });
  return domElements;
};

const errorTemp = () => {
  const domElements = html(`
    <div class="grid place-items-center">
      <h1>ERROR</h1>
    </div>
  `);
  return domElements;
};

/***
 * Return either valid oder invalid class
 */
const getStatusClass = (questionAnswer, answer, res) => {
  if (answer === questionAnswer) {
    if (res) {
      return "bg-green-200";
    } else {
      return "bg-red-200";
    }
  }
};

export { render, home, quizTemp, resultTemp, errorTemp };
