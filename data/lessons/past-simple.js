/**
 * Past Simple Lesson Content
 */

export const pastSimple = {
  id: 'past-simple',
  title: 'Past Simple',
  type: 'grammar',
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 8,14"/>
  </svg>`,
  description: 'Completed actions',
  sections: [
    {
      title: 'When to Use',
      content: `
        <div class="rule-box">
          <p>Use Past Simple for:</p>
          <ul>
            <li>Completed actions in the past</li>
            <li>Actions at a specific time</li>
            <li>Past habits (with time expressions)</li>
          </ul>
        </div>
      `
    },
    {
      title: 'How to Form',
      content: `
        <div class="rule-box">
          <p><strong>Regular verbs:</strong> verb + <code>-ed</code></p>
        </div>
        <div class="rule-box">
          <p><strong>Irregular verbs:</strong> must be memorized (go → went, see → saw)</p>
        </div>
        <div class="rule-box">
          <p><strong>Negative:</strong> Subject + <code>didn't</code> + base verb</p>
        </div>
        <div class="rule-box">
          <p><strong>Question:</strong> <code>Did</code> + subject + base verb?</p>
        </div>
      `
    },
    {
      title: 'Examples',
      content: `
        <ul class="examples-list">
          <li>
            <span class="sentence">I <span class="verb-highlight">worked</span> yesterday.</span>
            <span class="translation">→ Regular verb</span>
          </li>
          <li>
            <span class="sentence">She <span class="verb-highlight">went</span> to Paris last year.</span>
            <span class="translation">→ Irregular verb</span>
          </li>
          <li>
            <span class="sentence">They <span class="verb-highlight">didn't see</span> the movie.</span>
            <span class="translation">→ Negative</span>
          </li>
          <li>
            <span class="sentence"><span class="verb-highlight">Did</span> you <span class="verb-highlight">enjoy</span> the party?</span>
            <span class="translation">→ Question</span>
          </li>
        </ul>
      `
    }
  ]
};
