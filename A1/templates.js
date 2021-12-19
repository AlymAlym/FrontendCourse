import { onRouteChange } from "./index.js";

const html = (templateString) => {
  return new DOMParser().parseFromString(templateString, "text/html").body
    .firstChild;
};

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
    //onRouteChange();
  });
  return domElements;
};

const quiz = async () => {
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
    //onRouteChange();
  });
  return domElements;
};

export { home, quiz };
