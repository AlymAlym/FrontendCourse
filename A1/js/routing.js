import { render, home, quizTemp, resultTemp, errorTemp } from "./templates.js";
import { askQuestion } from "./quiz.js";

export const onRouteChange = async () => {
  const pathname = new URL(window.location).pathname;
  const container = document.querySelector("#container");

  if (pathname === "/") {
    const homeNode = await home();
    render(container, homeNode);
  } else if (pathname === "/quiz") {
    const question = await askQuestion();
    const quiz = await quizTemp(question);
    render(container, quiz);
  } else if (pathname === "/result") {
    render(container, resultTemp());
  } else {
    render(container, errorTemp());
  }
};
