"use strict";
import { getQuestions } from "./questions.js";

export async function askQuestion() {
  try {
    const questions = await getQuestions();
    const question = questions[Math.floor(Math.random() * questions.length)];
    const { correctAnswer, ...q } = question;
    return q;
  } catch (error) {
    console.log(error);
  }

  /* Alternative..
        return question.question +
        "a: " + question.a + "\n" +
        "b: " + question.b + "\n" +
        "c: " + question.c + "\n" +
        "d: " + question.d;*/
}
export const answerQuestion = async (q, answer) => {
  //Find question
  const questions = await getQuestions();
  const searchedQuestion = questions.find(
    (element) => element.question === q.question
  );

  return searchedQuestion.correctAnswer === answer;
};
