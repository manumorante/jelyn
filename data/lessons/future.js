/**
 * Future Tenses Lesson Content
 */

export const future = {
  id: 'future',
  title: 'Future Tenses',
  type: 'grammar',
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>`,
  description: 'Will & Going to',
  sections: [
    {
      title: 'Will vs Going to',
      content: `
        <div class="rule-box">
          <p><strong>Will:</strong> spontaneous decisions, predictions, promises</p>
        </div>
        <div class="rule-box">
          <p><strong>Going to:</strong> planned intentions, evidence-based predictions</p>
        </div>
      `
    },
    {
      title: 'How to Form',
      content: `
        <div class="rule-box">
          <p><strong>Will:</strong> Subject + <code>will</code> + base verb</p>
        </div>
        <div class="rule-box">
          <p><strong>Going to:</strong> Subject + <code>am/is/are going to</code> + base verb</p>
        </div>
      `
    },
    {
      title: 'Examples',
      content: `
        <ul class="examples-list">
          <li>
            <span class="sentence">I <span class="verb-highlight">will help</span> you.</span>
            <span class="translation">→ Spontaneous offer</span>
          </li>
          <li>
            <span class="sentence">It <span class="verb-highlight">will rain</span> tomorrow.</span>
            <span class="translation">→ Prediction</span>
          </li>
          <li>
            <span class="sentence">I <span class="verb-highlight">am going to study</span> medicine.</span>
            <span class="translation">→ Planned intention</span>
          </li>
          <li>
            <span class="sentence">Look at those clouds! It <span class="verb-highlight">is going to rain</span>.</span>
            <span class="translation">→ Evidence-based</span>
          </li>
        </ul>
      `
    }
  ]
};
