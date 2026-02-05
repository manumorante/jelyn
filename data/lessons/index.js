/**
 * Lessons Index
 * Central export for all lesson content
 */

import { presentSimple } from './present-simple.js';
import { pastSimple } from './past-simple.js';
import { future } from './future.js';
import { listening } from './listening.js';

// Export individual lessons
export { presentSimple, pastSimple, future, listening };

// Export as object map for easy lookup
export const lessons = {
  'present-simple': presentSimple,
  'past-simple': pastSimple,
  'future': future,
  'listening': listening
};

// Get lesson by ID
export function getLesson(id) {
  return lessons[id] || null;
}

// Get all lessons
export function getAllLessons() {
  return Object.values(lessons);
}

// Get lessons by type
export function getLessonsByType(type) {
  return Object.values(lessons).filter(lesson => lesson.type === type);
}

// Get grammar lessons
export function getGrammarLessons() {
  return getLessonsByType('grammar');
}

// Get skill lessons
export function getSkillLessons() {
  return getLessonsByType('skill');
}
