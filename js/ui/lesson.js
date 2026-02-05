/**
 * Lesson Module
 * Handles lesson content rendering
 */

import { $, $$ } from '../utils.js';
import { state } from '../state.js';
import { getLesson } from '../../data/lessons/index.js';

// DOM elements
let lessonTitle, lessonContent, lessonView, quizView;

/**
 * Initialize lesson module
 */
export function initLesson() {
  lessonTitle = $('lesson-title');
  lessonContent = $('lesson-content');
  lessonView = $('lesson-view');
  quizView = $('quiz-view');

  // Listen for verb updates
  window.addEventListener('verbsUpdated', () => {
    if (state.currentTopic) {
      renderLessonContent(state.currentTopic);
    }
  });
}

/**
 * Load and display a lesson
 * @param {string} topicId - Topic ID to load
 */
export function loadLesson(topicId) {
  const lesson = getLesson(topicId);
  if (!lesson) return;

  if (lessonTitle) {
    lessonTitle.textContent = lesson.title;
  }

  renderLessonContent(topicId);
  showLessonView();
}

/**
 * Render lesson content
 * @param {string} topicId - Topic ID
 */
export function renderLessonContent(topicId) {
  const lesson = getLesson(topicId);
  if (!lesson || !lessonContent) return;

  let html = '';

  // Render sections
  lesson.sections.forEach(section => {
    html += `
      <div class="lesson-section">
        <h3>${section.title}</h3>
        ${section.content}
      </div>
    `;
  });

  // Add custom verbs section for grammar topics
  if (lesson.type === 'grammar' && state.customVerbs.length > 0) {
    html += renderCustomVerbsSection(topicId);
  }

  lessonContent.innerHTML = html;
}

/**
 * Render custom verbs section
 * @param {string} topicId - Current topic ID
 * @returns {string} HTML string
 */
function renderCustomVerbsSection(topicId) {
  const verbsHtml = state.customVerbs.map(verb => {
    let exampleText;

    switch (topicId) {
      case 'present-simple':
        exampleText = verb.example
          ? verb.example.replace('___', `<span class="verb-highlight">${verb.base}</span>`)
          : `I ${verb.base}, she ${verb.third}`;
        break;

      case 'past-simple':
        exampleText = verb.example
          ? verb.example.replace('___', `<span class="verb-highlight">${verb.past}</span>`)
          : `Yesterday I ${verb.past}`;
        break;

      case 'future':
      default:
        exampleText = verb.example
          ? verb.example.replace('___', `<span class="verb-highlight">will ${verb.base}</span>`)
          : `Tomorrow I will ${verb.base}`;
        break;
    }

    return `
      <li>
        <div class="custom-verb-item">
          <span class="sentence">${exampleText}</span>
          ${verb.translation ? `<span class="translation">→ ${verb.translation}</span>` : ''}
        </div>
      </li>
    `;
  }).join('');

  return `
    <div class="lesson-section custom-verbs-section">
      <h3>My Custom Verbs</h3>
      <ul class="examples-list">
        ${verbsHtml}
      </ul>
    </div>
  `;
}

/**
 * Show lesson view, hide quiz view
 */
export function showLessonView() {
  if (lessonView) lessonView.classList.add('active');
  if (quizView) quizView.classList.remove('active');
}

/**
 * Show quiz view, hide lesson view
 */
export function showQuizView() {
  if (lessonView) lessonView.classList.remove('active');
  if (quizView) quizView.classList.add('active');
}

/**
 * Update lesson points display
 * @param {number} points - Points to display
 */
export function updateLessonPoints(points) {
  const lessonPoints = $('lesson-points');
  if (lessonPoints) {
    lessonPoints.textContent = points;
  }
}
