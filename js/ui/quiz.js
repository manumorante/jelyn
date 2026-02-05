/**
 * Quiz Module
 * Handles quiz functionality
 */

import { $, $$$ } from '../utils.js';
import { shuffleArray } from '../utils.js';
import { state, updateState, resetQuizState, addPoints } from '../state.js';
import { getQuiz } from '../../data/quizzes/index.js';

// DOM elements
let quizContainer, quizResults, questionText, optionsContainer;
let questionNumber, totalQuestions, feedback, nextQuestionBtn;
let quizScore, quizTotal, earnedPoints;

// Callbacks
let onQuizComplete = null;

/**
 * Initialize quiz module
 * @param {Object} options - Configuration options
 * @param {Function} options.onComplete - Callback when quiz is finished
 */
export function initQuiz(options = {}) {
  onQuizComplete = options.onComplete || null;

  // Cache DOM elements
  quizContainer = $('quiz-container');
  quizResults = $('quiz-results');
  questionText = $('question-text');
  optionsContainer = $('options-container');
  questionNumber = $('question-number');
  totalQuestions = $('total-questions');
  feedback = $('feedback');
  nextQuestionBtn = $('next-question');
  quizScore = $('quiz-score');
  quizTotal = $('quiz-total');
  earnedPoints = $('earned-points');

  // Setup event listeners
  if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener('click', nextQuestion);
  }

  const retryBtn = $('retry-quiz');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => startQuiz(state.currentTopic));
  }

  const finishBtn = $('finish-quiz');
  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      if (onQuizComplete) onQuizComplete();
    });
  }
}

/**
 * Generate quiz questions from custom verbs
 * @param {string} topicId - Current topic ID
 * @returns {Array} Array of question objects
 */
function generateCustomVerbQuestions(topicId) {
  if (topicId === 'listening' || state.customVerbs.length === 0) {
    return [];
  }

  const questions = [];

  state.customVerbs.forEach(verb => {
    let question;

    switch (topicId) {
      case 'present-simple':
        question = {
          question: `She ___ every day. (${verb.base})`,
          options: shuffleArray([verb.base, verb.third, verb.past, verb.participle]),
          correctAnswer: verb.third
        };
        break;

      case 'past-simple':
        question = {
          question: `Yesterday I ___. (${verb.base})`,
          options: shuffleArray([verb.base, verb.third, verb.past, verb.participle]),
          correctAnswer: verb.past
        };
        break;

      case 'future':
        question = {
          question: `Tomorrow she ___ ${verb.base}.`,
          options: shuffleArray(['will', 'is going to', 'did', 'does']),
          correctAnswer: 'will'
        };
        break;
    }

    if (question) {
      question.correct = question.options.indexOf(question.correctAnswer);
      delete question.correctAnswer;
      questions.push(question);
    }
  });

  return questions;
}

/**
 * Start a quiz for a topic
 * @param {string} topicId - Topic ID
 * @returns {boolean} True if quiz started successfully
 */
export function startQuiz(topicId) {
  resetQuizState();

  // Get questions
  const defaultQuestions = [...getQuiz(topicId)];
  const customQuestions = generateCustomVerbQuestions(topicId);
  const allQuestions = [...defaultQuestions, ...customQuestions];

  if (allQuestions.length === 0) {
    alert('No quiz questions available for this topic yet.');
    return false;
  }

  // Shuffle and pick 5 questions
  state.quizQuestions = shuffleArray(allQuestions).slice(0, 5);

  if (totalQuestions) {
    totalQuestions.textContent = state.quizQuestions.length;
  }

  // Show quiz container, hide results
  if (quizContainer) quizContainer.classList.remove('hidden');
  if (quizResults) quizResults.classList.add('hidden');

  showQuestion();
  return true;
}

/**
 * Show current question
 */
function showQuestion() {
  const question = state.quizQuestions[state.currentQuestionIndex];

  if (!question) return;

  if (questionNumber) {
    questionNumber.textContent = state.currentQuestionIndex + 1;
  }

  if (questionText) {
    questionText.textContent = question.question;
  }

  // Reset feedback
  if (feedback) {
    feedback.classList.add('hidden');
    feedback.classList.remove('correct', 'incorrect');
  }

  if (nextQuestionBtn) {
    nextQuestionBtn.classList.add('hidden');
  }

  // Render options
  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = option;
      btn.addEventListener('click', () => selectAnswer(index));
      optionsContainer.appendChild(btn);
    });
  }
}

/**
 * Handle answer selection
 * @param {number} selectedIndex - Index of selected option
 */
function selectAnswer(selectedIndex) {
  const question = state.quizQuestions[state.currentQuestionIndex];
  const buttons = optionsContainer?.querySelectorAll('.option-btn');

  if (!buttons || !question) return;

  // Disable all buttons
  buttons.forEach(btn => btn.disabled = true);

  // Mark correct answer
  buttons[question.correct].classList.add('correct');

  // Check if answer is correct
  if (selectedIndex === question.correct) {
    state.correctAnswers++;
    if (feedback) {
      feedback.textContent = 'Correct! Great job!';
      feedback.classList.add('correct');
    }
  } else {
    buttons[selectedIndex].classList.add('incorrect');
    if (feedback) {
      feedback.textContent = `Incorrect. The correct answer is: ${question.options[question.correct]}`;
      feedback.classList.add('incorrect');
    }
  }

  if (feedback) feedback.classList.remove('hidden');
  if (nextQuestionBtn) nextQuestionBtn.classList.remove('hidden');
}

/**
 * Move to next question or show results
 */
function nextQuestion() {
  state.currentQuestionIndex++;

  if (state.currentQuestionIndex < state.quizQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

/**
 * Show quiz results
 */
function showResults() {
  const earned = state.correctAnswers * 10;
  addPoints(earned);

  // Update lesson points display
  const lessonPoints = $('lesson-points');
  if (lessonPoints) {
    lessonPoints.textContent = state.points;
  }

  // Hide quiz, show results
  if (quizContainer) quizContainer.classList.add('hidden');
  if (quizResults) quizResults.classList.remove('hidden');

  // Update results display
  if (quizScore) quizScore.textContent = state.correctAnswers;
  if (quizTotal) quizTotal.textContent = state.quizQuestions.length;
  if (earnedPoints) earnedPoints.textContent = earned;
}

/**
 * Get current quiz state
 * @returns {Object}
 */
export function getQuizState() {
  return {
    currentQuestion: state.currentQuestionIndex,
    totalQuestions: state.quizQuestions.length,
    correctAnswers: state.correctAnswers
  };
}
