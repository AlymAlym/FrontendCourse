import {questions} from "./questions";
let question = questions[Math.floor(Math.random()*questions.length)];

export function askQuestion () {
    return question;
}
export function answerQuestion () {
    return null
}
