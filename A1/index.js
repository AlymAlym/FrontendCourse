import { onRouteChange } from "./js/routing.js";

const nextButton = document.querySelector("#next-btn");
const questionContainerElement = document.querySelector("#question-container");
const questionElement = document.querySelector("#question");
const answerButtonsElement = document.querySelector("#answer-buttons");

onRouteChange();

window.addEventListener("popstate", () => {
  onRouteChange();
});
