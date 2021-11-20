import { askQuestion, answerQuestion } from './js/quiz.js'

const question = askQuestion().then((question) => {
    console.log(question);

    const answer = answerQuestion(question, 'a');
    console.log(answer ? 'correct' : 'incorrect');
});


/**
 * {
 *   question: 'Whats the best university?',
 *   a: 'Hagenberg',
 *   b: 'FHS',
 *   c: 'TU',
 *   d: 'JKU'
 * }
 */


