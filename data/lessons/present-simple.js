/**
 * Present Simple Lesson Content
 */

export const presentSimple = {
  id: 'present-simple',
  title: 'Present Simple',
  type: 'grammar',
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>`,
  description: 'Daily routines & facts',
  sections: [
    {
      title: 'When to Use',
      content: `
        <div class="rule-box">
          <p>Use Present Simple for:</p>
          <ul>
            <li>Habits and routines</li>
            <li>Facts and general truths</li>
            <li>Permanent situations</li>
          </ul>
        </div>
      `
    },
    {
      title: 'How to Form',
      content: `
        <div class="rule-box">
          <p><strong>Affirmative:</strong> Subject + verb (+ <code>s/es</code> for he/she/it)</p>
        </div>
        <div class="rule-box">
          <p><strong>Negative:</strong> Subject + <code>don't/doesn't</code> + verb</p>
        </div>
        <div class="rule-box">
          <p><strong>Question:</strong> <code>Do/Does</code> + subject + verb?</p>
        </div>
      `
    },
    {
      title: 'Examples',
      content: `
        <ul class="examples-list">
          <li>
            <span class="sentence">I <span class="verb-highlight">work</span> every day.</span>
            <span class="translation">→ Routine</span>
          </li>
          <li>
            <span class="sentence">She <span class="verb-highlight">speaks</span> three languages.</span>
            <span class="translation">→ Ability/Fact</span>
          </li>
          <li>
            <span class="sentence">The sun <span class="verb-highlight">rises</span> in the east.</span>
            <span class="translation">→ General truth</span>
          </li>
          <li>
            <span class="sentence">They <span class="verb-highlight">don't like</span> coffee.</span>
            <span class="translation">→ Negative</span>
          </li>
          <li>
            <span class="sentence"><span class="verb-highlight">Does</span> he <span class="verb-highlight">play</span> tennis?</span>
            <span class="translation">→ Question</span>
          </li>
        </ul>
      `
    }
  ]
};
