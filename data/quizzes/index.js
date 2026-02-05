/**
 * Quizzes Index
 * Central export for all quiz questions
 */

import { presentSimpleQuiz } from './present-simple.js';
import { pastSimpleQuiz } from './past-simple.js';
import { futureQuiz } from './future.js';
import { listeningQuiz } from './listening.js';

// Export individual quizzes
export { presentSimpleQuiz, pastSimpleQuiz, futureQuiz, listeningQuiz };

// Export as object map for easy lookup
export const quizzes = {
  'present-simple': presentSimpleQuiz,
  'past-simple': pastSimpleQuiz,
  'future': futureQuiz,
  'listening': listeningQuiz
};

// Get quiz by topic ID
export function getQuiz(topicId) {
  return quizzes[topicId] || [];
}

// Get number of questions for a topic
export function getQuizLength(topicId) {
  return (quizzes[topicId] || []).length;
}
