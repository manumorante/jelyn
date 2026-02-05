/**
 * Listening Lesson Content
 */

export const listening = {
  id: 'listening',
  title: 'Listening',
  type: 'skill',
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M3 18v-6a9 9 0 0118 0v6"/>
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z"/>
    <path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z"/>
  </svg>`,
  description: 'Audio comprehension',
  sections: [
    {
      title: 'Tips for Better Listening',
      content: `
        <div class="rule-box">
          <p><strong>Active Listening Tips:</strong></p>
          <ul>
            <li>Listen for keywords and main ideas first</li>
            <li>Don't try to understand every word</li>
            <li>Pay attention to intonation and stress</li>
            <li>Practice with different accents</li>
          </ul>
        </div>
      `
    },
    {
      title: 'Practice Exercises',
      content: `
        <div class="audio-exercise" data-audio-id="greeting">
          <div class="audio-exercise-header">
            <span class="audio-number">1</span>
            <span class="audio-title">Greeting at a Coffee Shop</span>
          </div>
          <div class="audio-player">
            <button class="play-btn" data-text="Hello! Can I have a medium coffee, please? With milk, no sugar.">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </button>
            <span class="audio-text">Listen to the customer ordering coffee</span>
          </div>
          <button class="transcript-toggle">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Show Transcript
          </button>
          <div class="transcript">
            "Hello! Can I have a medium coffee, please? With milk, no sugar."
          </div>
        </div>

        <div class="audio-exercise" data-audio-id="directions">
          <div class="audio-exercise-header">
            <span class="audio-number">2</span>
            <span class="audio-title">Asking for Directions</span>
          </div>
          <div class="audio-player">
            <button class="play-btn" data-text="Excuse me, how do I get to the train station? Go straight for two blocks, then turn left.">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </button>
            <span class="audio-text">Listen to directions being given</span>
          </div>
          <button class="transcript-toggle">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Show Transcript
          </button>
          <div class="transcript">
            "Excuse me, how do I get to the train station?"<br>
            "Go straight for two blocks, then turn left."
          </div>
        </div>

        <div class="audio-exercise" data-audio-id="appointment">
          <div class="audio-exercise-header">
            <span class="audio-number">3</span>
            <span class="audio-title">Making an Appointment</span>
          </div>
          <div class="audio-player">
            <button class="play-btn" data-text="I would like to make an appointment for next Tuesday at 3 PM, please.">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </button>
            <span class="audio-text">Listen to someone scheduling an appointment</span>
          </div>
          <button class="transcript-toggle">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Show Transcript
          </button>
          <div class="transcript">
            "I would like to make an appointment for next Tuesday at 3 PM, please."
          </div>
        </div>
      `
    }
  ]
};
