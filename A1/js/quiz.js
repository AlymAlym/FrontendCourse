"use strict"
import {questions, getQuestions } from './questions.js'

export async function askQuestion () {
    try {
        let question = await getQuestions();
        const { correctAnswer, ...q } = question;
        return q;
    } catch (error) {
        console.log(error)
    }

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
