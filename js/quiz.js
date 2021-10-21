import { questions } from './questions.js'

let question = questions[Math.floor(Math.random()*questions.length)];

export function askQuestion () {
    return question.question +
        "a: " + question.a + "\n" +
        "b: " + question.b + "\n" +
        "c: " + question.c + "\n" +
        "d: " + question.d;
}
export function answerQuestion (q, answer) {
    return question.correctAnswer === answer;
}
