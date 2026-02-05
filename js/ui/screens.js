/**
 * Screen Navigation Module
 * Handles switching between app screens
 */

import { $ } from '../utils.js';

// Screen elements (cached on init)
let screens = {};

/**
 * Initialize screen references
 */
export function initScreens() {
  screens = {
    login: $('login-screen'),
    home: $('home-screen'),
    lesson: $('lesson-screen')
  };
}

/**
 * Show a specific screen, hide others
 * @param {string} screenName - Name of screen to show ('login', 'home', 'lesson')
 */
export function showScreen(screenName) {
  Object.entries(screens).forEach(([name, element]) => {
    if (element) {
      element.classList.toggle('active', name === screenName);
    }
  });
}

/**
 * Show login screen
 */
export function showLoginScreen() {
  showScreen('login');
}

/**
 * Show home screen
 */
export function showHomeScreen() {
  showScreen('home');
}

/**
 * Show lesson screen
 */
export function showLessonScreen() {
  showScreen('lesson');
}

/**
 * Get current active screen name
 * @returns {string|null}
 */
export function getCurrentScreen() {
  for (const [name, element] of Object.entries(screens)) {
    if (element && element.classList.contains('active')) {
      return name;
    }
  }
  return null;
}
