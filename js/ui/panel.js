/**
 * Verbs Panel Module
 * Handles the custom verbs side panel
 */

import { $, $$$ } from '../utils.js';
import { state, addCustomVerb, removeCustomVerb } from '../state.js';

// Panel elements
let panel, overlay;

// Form elements
let formInputs = {};

/**
 * Initialize panel
 */
export function initPanel() {
  panel = $('verbs-panel');
  overlay = $('panel-overlay');

  // Cache form inputs
  formInputs = {
    base: $('verb-base'),
    third: $('verb-third'),
    past: $('verb-past'),
    participle: $('verb-participle'),
    example: $('verb-example'),
    translation: $('verb-translation')
  };

  // Setup event listeners
  setupPanelEvents();

  // Initial render
  renderVerbsList();
}

/**
 * Setup panel event listeners
 */
function setupPanelEvents() {
  // Open panel
  const settingsBtn = $('settings-btn');
  if (settingsBtn) {
    settingsBtn.addEventListener('click', openPanel);
  }

  // Close panel
  const closeBtn = $('close-panel');
  if (closeBtn) {
    closeBtn.addEventListener('click', closePanel);
  }

  if (overlay) {
    overlay.addEventListener('click', closePanel);
  }

  // Add verb button
  const addBtn = $('add-verb-btn');
  if (addBtn) {
    addBtn.addEventListener('click', handleAddVerb);
  }

  // Enter key to add verb
  Object.values(formInputs).forEach(input => {
    if (input) {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          handleAddVerb();
        }
      });
    }
  });
}

/**
 * Open the panel
 */
export function openPanel() {
  if (panel) panel.classList.add('panel-visible');
  if (overlay) overlay.classList.add('overlay-visible');
  document.body.style.overflow = 'hidden';
}

/**
 * Close the panel
 */
export function closePanel() {
  if (panel) panel.classList.remove('panel-visible');
  if (overlay) overlay.classList.remove('overlay-visible');
  document.body.style.overflow = '';
}

/**
 * Handle adding a new verb
 */
function handleAddVerb() {
  const base = formInputs.base?.value.trim();

  if (!base) {
    formInputs.base?.focus();
    return;
  }

  const verb = {
    base,
    third: formInputs.third?.value.trim(),
    past: formInputs.past?.value.trim(),
    participle: formInputs.participle?.value.trim(),
    example: formInputs.example?.value.trim(),
    translation: formInputs.translation?.value.trim()
  };

  addCustomVerb(verb);
  clearForm();
  renderVerbsList();

  // Dispatch event for lesson refresh
  window.dispatchEvent(new CustomEvent('verbsUpdated'));
}

/**
 * Handle deleting a verb
 * @param {number} id - Verb ID to delete
 */
export function handleDeleteVerb(id) {
  removeCustomVerb(id);
  renderVerbsList();

  // Dispatch event for lesson refresh
  window.dispatchEvent(new CustomEvent('verbsUpdated'));
}

// Make delete function globally available for onclick handlers
window.deleteVerb = handleDeleteVerb;

/**
 * Clear the form inputs
 */
function clearForm() {
  Object.values(formInputs).forEach(input => {
    if (input) input.value = '';
  });
  formInputs.base?.focus();
}

/**
 * Render the verbs list
 */
export function renderVerbsList() {
  const verbsList = $('verbs-list');
  const verbCount = $('verb-count');

  if (!verbsList) return;

  // Update count
  if (verbCount) {
    verbCount.textContent = `(${state.customVerbs.length})`;
  }

  // Empty state
  if (state.customVerbs.length === 0) {
    verbsList.innerHTML = `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
        <p>No custom verbs yet</p>
        <p style="font-size: 0.75rem;">Add your first verb above</p>
      </div>
    `;
    return;
  }

  // Render verb cards
  verbsList.innerHTML = state.customVerbs.map(verb => `
    <div class="verb-card">
      <div class="verb-card-header">
        <div class="verb-forms">
          <span class="verb-tag base">${verb.base}</span>
          <span class="verb-tag">${verb.third}</span>
          <span class="verb-tag">${verb.past}</span>
          <span class="verb-tag">${verb.participle}</span>
        </div>
        <button class="delete-verb-btn" onclick="deleteVerb(${verb.id})" title="Delete">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
          </svg>
        </button>
      </div>
      ${verb.example ? `<p class="verb-example">"${verb.example}"</p>` : ''}
      ${verb.translation ? `<p class="verb-translation">${verb.translation}</p>` : ''}
    </div>
  `).join('');
}
