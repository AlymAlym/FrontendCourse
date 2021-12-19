import { delay } from "./delay.js";

export let questions = [
  {
    question: "What's the biggest animal in the world?\n",
    correctAnswer: "a",
    a: "blue whale",
    b: "pig",
    c: "elephant",
    d: "lion",
  },
  {
    question: "Which country is brie cheese originally from?\n",
    correctAnswer: "d",
    a: "Austria",
    b: "Germany",
    c: "Italy",
    d: "France",
  },
  {
    question: "What year was Heinz established?\n",
    correctAnswer: "c",
    a: "1900",
    b: "1903",
    c: "1869",
    d: "1788",
  },
  {
    question: "What is the capital of Iceland?\n",
    correctAnswer: "a",
    a: "Reykjavík",
    b: "Hafnarfjörður",
    c: "Berlin",
    d: "Kópavogur",
  },
  {
    question: "Which planet is closest to the sun?\n",
    correctAnswer: "c",
    a: "Pluto",
    b: "Earth",
    c: "Mercury",
    d: "Jupiter",
  },
];

export async function getQuestions() {
  await delay();
  const question = questions[Math.floor(Math.random() * questions.length)];

  return question;
}
