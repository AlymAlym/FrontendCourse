import { askQuestion, answerQuestion } from "./js/quiz.js";
import { home } from "./templates.js";

const container = document.querySelector("#container");
const nextButton = document.querySelector("#next-btn");
const questionContainerElement = document.querySelector("#question-container");
const questionElement = document.querySelector("#question");
const answerButtonsElement = document.querySelector("#answer-buttons");

const onRouteChange = async () => {
  const pathname = new URL(window.location).pathname;

  if (pathname === "/") {
    const homeNode = await home();
    container.appendNode(homeNode);
  } else if (pathname === "/quiz") {
    const question = await askQuestion();
    const quiz = await quiz(question);
    container.appendNode(quiz);
  } else if (pathname === "/result") {
    //TODO: result
  } else {
    //TODO: errorpage
  }
};

window.addEventListener("popstate", () => {
  onRouteChange();
});

const startQuiz = askQuestion().then((question) => {
  onRouteChange();

  console.log(question);

  questionContainerElement.classList.remove("hidden");

  displayQuestion(question);
});

const displayQuestion = (question) => {
  questionElement.innerText = question.question;

  for (const prop in question) {
    if (prop !== "question") {
      const button = document.createElement("button");
      button.innerText = question[prop];
      button.type = "button";
      button.className =
        "btn hover:bg-gray-100 mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg";

      if (answerQuestion(question, prop)) {
        button.dataset.correct = question[prop];
      }
      button.addEventListener("click", chooseAnswer);
      answerButtonsElement.appendChild(button);
    }
  }
};
const setNextQuestion = () => {
  resetState();
  askQuestion().then((question) => {
    displayQuestion(question);
  });
};

const resetState = () => {
  clearStatusClass(document.body);
  nextButton.classList.add("hidden");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
};

const chooseAnswer = (e) => {
  const selectedButton = e.target;
  //const correct = selectedButton.dataset.correct;
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  nextButton.classList.remove("hidden");
};

const setStatusClass = (element, correct) => {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("bg-green-200");
  } else {
    element.classList.add("bg-red-200");
  }
};

const clearStatusClass = (element) => {
  element.classList.remove("bg-green-200");
  element.classList.remove("bg-red-200");
};

nextButton.addEventListener("click", (evt) => {
  setNextQuestion();
});

export { onRouteChange };

/**
 * {
 *   question: 'Whats the best university?',
 *   a: 'Hagenberg',
 *   b: 'FHS',
 *   c: 'TU',
 *   d: 'JKU'
 * }
 */
