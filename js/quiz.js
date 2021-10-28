"use strict"
import { questions } from './questions.js'

export function askQuestion () {
    let question = questions[Math.floor(Math.random()*questions.length)];
    const { correctAnswer, ...q } = question;
    return q;
    /* Alternative..
        return question.question +
        "a: " + question.a + "\n" +
        "b: " + question.b + "\n" +
        "c: " + question.c + "\n" +
        "d: " + question.d;*/
}
export function answerQuestion (q, answer) {
    //Find question
    let searchedQuestion = questions.find(element => element.question === q.question)

    return searchedQuestion.correctAnswer === answer;
}
