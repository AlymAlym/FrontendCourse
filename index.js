import { askQuestion, answerQuestion } from './js/quiz.js'

const question = askQuestion();
console.log(question);

/**
 * {
 *   question: 'Whats the best university?',
 *   a: 'Hagenberg',
 *   b: 'FHS',
 *   c: 'TU',
 *   d: 'JKU'
 * }
 */

const answer = answerQuestion(question, 'a');
console.log(answer ? 'correct' : 'incorrect');
