/**
 * English Learning App
 * Main Application Entry Point
 */

import { $, on } from './utils.js';
import { state, updateState, loadPersistedState, isLoggedIn } from './state.js';
import {
  initScreens,
  showLoginScreen,
  showHomeScreen,
  showLessonScreen,
  initPanel,
  renderVerbsList,
  initQuiz,
  startQuiz,
  initAudio,
  stopAudio,
  initLesson,
  loadLesson,
  showLessonView,
  showQuizView,
  updateLessonPoints
} from './ui/index.js';

/**
 * Initialize the application
 */
function init() {
  // Initialize UI modules
  initScreens();
  initPanel();
  initAudio();
  initLesson();
  initQuiz({
    onComplete: handleQuizComplete
  });

  // Load persisted state
  const hasPersistedData = loadPersistedState();

  // Setup event listeners
  setupEventListeners();

  // Render initial state
  renderVerbsList();

  // Show appropriate screen
  if (hasPersistedData && isLoggedIn()) {
    updateHomeDisplay();
    showHomeScreen();
  } else {
    showLoginScreen();
  }
}

/**
 * Setup global event listeners
 */
function setupEventListeners() {
  // Login form
  const studentNameInput = $('student-name');
  const startBtn = $('start-btn');

  if (studentNameInput && startBtn) {
    studentNameInput.addEventListener('input', (e) => {
      startBtn.disabled = e.target.value.trim().length === 0;
    });

    studentNameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !startBtn.disabled) {
        handleLogin();
      }
    });

    startBtn.addEventListener('click', handleLogin);
  }

  // Topic cards
  const topicCards = document.querySelectorAll('.topic-card');
  topicCards.forEach(card => {
    card.addEventListener('click', () => {
      const topicId = card.dataset.topic;
      if (topicId) {
        openTopic(topicId);
      }
    });
  });

  // Back to home
  const backHomeBtn = $('back-home');
  if (backHomeBtn) {
    backHomeBtn.addEventListener('click', goBackHome);
  }

  // Quiz toggle
  const quizToggle = $('quiz-toggle');
  if (quizToggle) {
    quizToggle.addEventListener('click', handleStartQuiz);
  }

  // Back to lesson
  const backToLessonBtn = $('back-to-lesson');
  if (backToLessonBtn) {
    backToLessonBtn.addEventListener('click', showLessonView);
  }
}

/**
 * Handle login
 */
function handleLogin() {
  const studentNameInput = $('student-name');
  const name = studentNameInput?.value.trim();

  if (!name) return;

  updateState('studentName', name);
  updateHomeDisplay();
  showHomeScreen();
}

/**
 * Update home screen display
 */
function updateHomeDisplay() {
  const displayName = $('display-name');
  const pointsDisplay = $('points');

  if (displayName) displayName.textContent = state.studentName;
  if (pointsDisplay) pointsDisplay.textContent = state.points;
}

/**
 * Open a topic
 * @param {string} topicId - Topic ID to open
 */
function openTopic(topicId) {
  updateState('currentTopic', topicId);
  loadLesson(topicId);
  updateLessonPoints(state.points);
  showLessonScreen();
}

/**
 * Go back to home screen
 */
function goBackHome() {
  stopAudio();
  updateState('currentTopic', null);
  updateHomeDisplay();
  showHomeScreen();
}

/**
 * Handle starting a quiz
 */
function handleStartQuiz() {
  stopAudio();
  const success = startQuiz(state.currentTopic);
  if (success) {
    showQuizView();
  }
}

/**
 * Handle quiz completion
 */
function handleQuizComplete() {
  showLessonView();
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
