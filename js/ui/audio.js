/**
 * Audio Module
 * Handles speech synthesis for listening exercises
 */

import { $$$ } from '../utils.js';

// Current utterance
let currentUtterance = null;

/**
 * Initialize audio functionality
 * Sets up event listeners for play buttons and transcript toggles
 */
export function initAudio() {
  // Delegate click events for audio content
  document.addEventListener('click', handleAudioClick);
}

/**
 * Handle clicks on audio elements
 * @param {Event} event - Click event
 */
function handleAudioClick(event) {
  const playBtn = event.target.closest('.play-btn');
  const transcriptToggle = event.target.closest('.transcript-toggle');

  if (playBtn) {
    const text = playBtn.dataset.text;
    if (text) {
      playAudio(playBtn, text);
    }
  }

  if (transcriptToggle) {
    toggleTranscript(transcriptToggle);
  }
}

/**
 * Play audio using speech synthesis
 * @param {HTMLElement} button - Play button element
 * @param {string} text - Text to speak
 */
export function playAudio(button, text) {
  // Stop any current speech
  if (currentUtterance) {
    window.speechSynthesis.cancel();
    document.querySelectorAll('.play-btn').forEach(btn => {
      btn.classList.remove('playing');
    });
  }

  // If clicking the same button that's playing, just stop
  if (button.classList.contains('playing')) {
    button.classList.remove('playing');
    currentUtterance = null;
    return;
  }

  // Create new utterance
  currentUtterance = new SpeechSynthesisUtterance(text);
  currentUtterance.lang = 'en-US';
  currentUtterance.rate = 0.9;

  button.classList.add('playing');

  currentUtterance.onend = () => {
    button.classList.remove('playing');
    currentUtterance = null;
  };

  currentUtterance.onerror = () => {
    button.classList.remove('playing');
    currentUtterance = null;
  };

  window.speechSynthesis.speak(currentUtterance);
}

/**
 * Stop any playing audio
 */
export function stopAudio() {
  if (currentUtterance) {
    window.speechSynthesis.cancel();
    document.querySelectorAll('.play-btn').forEach(btn => {
      btn.classList.remove('playing');
    });
    currentUtterance = null;
  }
}

/**
 * Toggle transcript visibility
 * @param {HTMLElement} button - Transcript toggle button
 */
export function toggleTranscript(button) {
  const transcript = button.nextElementSibling;
  if (!transcript) return;

  const isVisible = transcript.classList.contains('visible');
  transcript.classList.toggle('visible');

  // Update button text
  const showIcon = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  `;

  button.innerHTML = isVisible
    ? `${showIcon} Show Transcript`
    : `${showIcon} Hide Transcript`;
}

/**
 * Check if browser supports speech synthesis
 * @returns {boolean}
 */
export function isSpeechSupported() {
  return 'speechSynthesis' in window;
}

/**
 * Get available voices
 * @returns {Array} Array of available voices
 */
export function getVoices() {
  return window.speechSynthesis.getVoices();
}

/**
 * Get English voices
 * @returns {Array} Array of English voices
 */
export function getEnglishVoices() {
  return getVoices().filter(voice => voice.lang.startsWith('en'));
}
