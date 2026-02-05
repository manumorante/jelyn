/**
 * State Management Module
 * Centralized state with persistence and change notifications
 */

// Initial state
const initialState = {
  studentName: '',
  points: 0,
  currentTopic: null,
  currentQuestionIndex: 0,
  correctAnswers: 0,
  quizQuestions: [],
  customVerbs: []
};

// Create reactive state
export const state = { ...initialState };

// Subscribers for state changes
const subscribers = new Map();

/**
 * Subscribe to state changes
 * @param {string} key - State key to watch
 * @param {Function} callback - Function to call on change
 * @returns {Function} Unsubscribe function
 */
export function subscribe(key, callback) {
  if (!subscribers.has(key)) {
    subscribers.set(key, new Set());
  }
  subscribers.get(key).add(callback);

  // Return unsubscribe function
  return () => subscribers.get(key).delete(callback);
}

/**
 * Notify subscribers of state change
 * @param {string} key - State key that changed
 */
function notifySubscribers(key) {
  if (subscribers.has(key)) {
    subscribers.get(key).forEach(callback => callback(state[key]));
  }
}

/**
 * Update state and persist
 * @param {string} key - State key to update
 * @param {*} value - New value
 */
export function updateState(key, value) {
  if (state[key] !== value) {
    state[key] = value;
    notifySubscribers(key);
    persistState();
  }
}

/**
 * Batch update multiple state values
 * @param {Object} updates - Object with key-value pairs to update
 */
export function batchUpdate(updates) {
  let hasChanges = false;

  Object.entries(updates).forEach(([key, value]) => {
    if (state[key] !== value) {
      state[key] = value;
      hasChanges = true;
      notifySubscribers(key);
    }
  });

  if (hasChanges) {
    persistState();
  }
}

/**
 * Reset quiz-related state
 */
export function resetQuizState() {
  state.currentQuestionIndex = 0;
  state.correctAnswers = 0;
  state.quizQuestions = [];
}

/**
 * Add a custom verb
 * @param {Object} verb - Verb object to add
 */
export function addCustomVerb(verb) {
  const newVerb = {
    id: Date.now(),
    ...verb,
    third: verb.third || verb.base + 's',
    past: verb.past || verb.base + 'ed',
    participle: verb.participle || verb.past || verb.base + 'ed'
  };

  state.customVerbs = [...state.customVerbs, newVerb];
  notifySubscribers('customVerbs');
  persistState();

  return newVerb;
}

/**
 * Remove a custom verb by ID
 * @param {number} id - Verb ID to remove
 */
export function removeCustomVerb(id) {
  state.customVerbs = state.customVerbs.filter(v => v.id !== id);
  notifySubscribers('customVerbs');
  persistState();
}

/**
 * Add points to current score
 * @param {number} points - Points to add
 */
export function addPoints(points) {
  state.points += points;
  notifySubscribers('points');
  persistState();
}

// ==================== //
// Persistence          //
// ==================== //

const STORAGE_KEY = 'englishLearningApp';

/**
 * Persist state to localStorage
 */
function persistState() {
  try {
    const dataToSave = {
      studentName: state.studentName,
      points: state.points,
      customVerbs: state.customVerbs
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  } catch (error) {
    console.error('Failed to persist state:', error);
  }
}

/**
 * Load state from localStorage
 */
export function loadPersistedState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      state.studentName = data.studentName || '';
      state.points = data.points || 0;
      state.customVerbs = data.customVerbs || [];
      return true;
    }
  } catch (error) {
    console.error('Failed to load persisted state:', error);
  }
  return false;
}

/**
 * Check if user is logged in
 * @returns {boolean}
 */
export function isLoggedIn() {
  return state.studentName.length > 0;
}

/**
 * Clear all state and storage
 */
export function clearState() {
  Object.assign(state, initialState);
  localStorage.removeItem(STORAGE_KEY);
}
