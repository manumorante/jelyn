// English Learning App

// State
const state = {
  studentName: '',
  points: 0,
  currentTopic: null,
  currentQuestionIndex: 0,
  correctAnswers: 0,
  quizQuestions: [],
  customVerbs: []
};

// Lesson Content
const lessons = {
  'present-simple': {
    title: 'Present Simple',
    type: 'grammar',
    sections: [
      {
        title: 'When to Use',
        content: `
          <div class="rule-box">
            <p>Use Present Simple for:</p>
            <ul style="margin-top: 0.5rem; margin-left: 1.25rem;">
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
  },
  'past-simple': {
    title: 'Past Simple',
    type: 'grammar',
    sections: [
      {
        title: 'When to Use',
        content: `
          <div class="rule-box">
            <p>Use Past Simple for:</p>
            <ul style="margin-top: 0.5rem; margin-left: 1.25rem;">
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
  },
  'future': {
    title: 'Future Tenses',
    type: 'grammar',
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
  },
  'listening': {
    title: 'Listening',
    type: 'skill',
    sections: [
      {
        title: 'Tips for Better Listening',
        content: `
          <div class="rule-box">
            <p><strong>Active Listening Tips:</strong></p>
            <ul style="margin-top: 0.5rem; margin-left: 1.25rem;">
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
          <div class="audio-exercise">
            <div class="audio-exercise-header">
              <span class="audio-number">1</span>
              <span class="audio-title">Greeting at a Coffee Shop</span>
            </div>
            <div class="audio-player">
              <button class="play-btn" data-audio="greeting" onclick="playAudio(this, 'Hello! Can I have a medium coffee, please? With milk, no sugar.')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
              </button>
              <span class="audio-text">Listen to the customer ordering coffee</span>
            </div>
            <button class="transcript-toggle" onclick="toggleTranscript(this)">
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

          <div class="audio-exercise">
            <div class="audio-exercise-header">
              <span class="audio-number">2</span>
              <span class="audio-title">Asking for Directions</span>
            </div>
            <div class="audio-player">
              <button class="play-btn" data-audio="directions" onclick="playAudio(this, 'Excuse me, how do I get to the train station? Go straight for two blocks, then turn left.')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
              </button>
              <span class="audio-text">Listen to directions being given</span>
            </div>
            <button class="transcript-toggle" onclick="toggleTranscript(this)">
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

          <div class="audio-exercise">
            <div class="audio-exercise-header">
              <span class="audio-number">3</span>
              <span class="audio-title">Making an Appointment</span>
            </div>
            <div class="audio-player">
              <button class="play-btn" data-audio="appointment" onclick="playAudio(this, 'I would like to make an appointment for next Tuesday at 3 PM, please.')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
              </button>
              <span class="audio-text">Listen to someone scheduling an appointment</span>
            </div>
            <button class="transcript-toggle" onclick="toggleTranscript(this)">
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
  }
};

// Quiz Questions
const quizzes = {
  'present-simple': [
    {
      question: 'She ___ to work every day.',
      options: ['go', 'goes', 'going', 'went'],
      correct: 1
    },
    {
      question: 'They ___ coffee in the morning.',
      options: ['drinks', 'drinking', 'drink', 'drank'],
      correct: 2
    },
    {
      question: '___ he speak Spanish?',
      options: ['Do', 'Does', 'Is', 'Are'],
      correct: 1
    },
    {
      question: 'The Earth ___ around the Sun.',
      options: ['move', 'moves', 'moving', 'moved'],
      correct: 1
    },
    {
      question: 'I ___ like pizza.',
      options: ['doesn\'t', 'don\'t', 'isn\'t', 'aren\'t'],
      correct: 1
    },
    {
      question: 'My brother ___ in London.',
      options: ['live', 'lives', 'living', 'lived'],
      correct: 1
    },
    {
      question: '___ you understand English?',
      options: ['Does', 'Is', 'Do', 'Are'],
      correct: 2
    },
    {
      question: 'Water ___ at 100 degrees Celsius.',
      options: ['boil', 'boils', 'boiling', 'boiled'],
      correct: 1
    }
  ],
  'past-simple': [
    {
      question: 'I ___ to the cinema yesterday.',
      options: ['go', 'goes', 'went', 'going'],
      correct: 2
    },
    {
      question: 'She ___ her keys last week.',
      options: ['lose', 'loses', 'losing', 'lost'],
      correct: 3
    },
    {
      question: 'They ___ the game.',
      options: ['didn\'t won', 'didn\'t win', 'don\'t win', 'doesn\'t win'],
      correct: 1
    },
    {
      question: '___ you see the movie?',
      options: ['Do', 'Does', 'Did', 'Are'],
      correct: 2
    },
    {
      question: 'He ___ a letter to his friend.',
      options: ['write', 'writes', 'writing', 'wrote'],
      correct: 3
    },
    {
      question: 'We ___ at the restaurant last night.',
      options: ['eat', 'eats', 'ate', 'eating'],
      correct: 2
    },
    {
      question: 'The children ___ in the park.',
      options: ['play', 'plays', 'played', 'playing'],
      correct: 2
    },
    {
      question: 'I ___ to music all day.',
      options: ['listen', 'listens', 'listened', 'listening'],
      correct: 2
    }
  ],
  'future': [
    {
      question: 'I ___ you tomorrow.',
      options: ['call', 'calls', 'will call', 'calling'],
      correct: 2
    },
    {
      question: 'Look at those clouds! It ___ rain.',
      options: ['will', 'is going to', 'does', 'did'],
      correct: 1
    },
    {
      question: 'She ___ visit her grandmother next week.',
      options: ['going to', 'is going to', 'will to', 'go to'],
      correct: 1
    },
    {
      question: 'I promise I ___ late.',
      options: ['am not being', 'won\'t be', 'don\'t be', 'am not going to'],
      correct: 1
    },
    {
      question: 'They ___ married in June.',
      options: ['will get', 'are going to get', 'get', 'getting'],
      correct: 1
    },
    {
      question: 'Don\'t worry, I ___ help you.',
      options: ['am going to', 'will', 'do', 'am'],
      correct: 1
    },
    {
      question: 'We ___ buy a new car. We\'ve saved enough money.',
      options: ['will', 'are going to', 'do', 'have'],
      correct: 1
    },
    {
      question: 'I think it ___ be sunny tomorrow.',
      options: ['is going to', 'will', 'does', 'is'],
      correct: 1
    }
  ],
  'listening': [
    {
      question: 'What did the customer order?',
      options: ['A large tea', 'A medium coffee', 'A small juice', 'A big latte'],
      correct: 1
    },
    {
      question: 'How does the customer want their coffee?',
      options: ['Black, no sugar', 'With milk, no sugar', 'With sugar, no milk', 'With cream'],
      correct: 1
    },
    {
      question: 'Where is the person trying to go?',
      options: ['The airport', 'The bus station', 'The train station', 'The hotel'],
      correct: 2
    },
    {
      question: 'What direction should they go first?',
      options: ['Turn right', 'Turn left', 'Go straight', 'Go back'],
      correct: 2
    },
    {
      question: 'When does the person want the appointment?',
      options: ['Monday at 2 PM', 'Tuesday at 3 PM', 'Wednesday at 4 PM', 'Thursday at 5 PM'],
      correct: 1
    }
  ]
};

// DOM Elements - Screens
const loginScreen = document.getElementById('login-screen');
const homeScreen = document.getElementById('home-screen');
const lessonScreen = document.getElementById('lesson-screen');

// DOM Elements - Login
const studentNameInput = document.getElementById('student-name');
const startBtn = document.getElementById('start-btn');

// DOM Elements - Home
const displayName = document.getElementById('display-name');
const pointsDisplay = document.getElementById('points');
const topicCards = document.querySelectorAll('.topic-card');

// DOM Elements - Lesson
const backHomeBtn = document.getElementById('back-home');
const lessonTitle = document.getElementById('lesson-title');
const lessonPoints = document.getElementById('lesson-points');
const lessonView = document.getElementById('lesson-view');
const quizView = document.getElementById('quiz-view');
const lessonContent = document.getElementById('lesson-content');
const quizToggle = document.getElementById('quiz-toggle');
const backToLesson = document.getElementById('back-to-lesson');
const questionNumber = document.getElementById('question-number');
const totalQuestions = document.getElementById('total-questions');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const nextQuestionBtn = document.getElementById('next-question');
const quizResults = document.getElementById('quiz-results');
const quizContainer = document.getElementById('quiz-container');
const quizScore = document.getElementById('quiz-score');
const quizTotal = document.getElementById('quiz-total');
const earnedPoints = document.getElementById('earned-points');
const retryQuiz = document.getElementById('retry-quiz');
const finishQuiz = document.getElementById('finish-quiz');

// DOM Elements - Panel
const settingsBtn = document.getElementById('settings-btn');
const verbsPanel = document.getElementById('verbs-panel');
const closePanel = document.getElementById('close-panel');
const panelOverlay = document.getElementById('panel-overlay');
const verbBase = document.getElementById('verb-base');
const verbThird = document.getElementById('verb-third');
const verbPast = document.getElementById('verb-past');
const verbParticiple = document.getElementById('verb-participle');
const verbExample = document.getElementById('verb-example');
const verbTranslation = document.getElementById('verb-translation');
const addVerbBtn = document.getElementById('add-verb-btn');
const verbsList = document.getElementById('verbs-list');
const verbCount = document.getElementById('verb-count');

// Speech synthesis for listening exercises
let currentUtterance = null;

// Initialize
function init() {
  // Load saved data
  const savedName = localStorage.getItem('studentName');
  const savedPoints = localStorage.getItem('points');
  const savedVerbs = localStorage.getItem('customVerbs');

  if (savedVerbs) {
    state.customVerbs = JSON.parse(savedVerbs);
  }

  if (savedName) {
    state.studentName = savedName;
    state.points = parseInt(savedPoints) || 0;
    showHomeScreen();
  }

  setupEventListeners();
  renderVerbsList();
}

// Event Listeners
function setupEventListeners() {
  // Login
  studentNameInput.addEventListener('input', (e) => {
    startBtn.disabled = e.target.value.trim().length === 0;
  });

  studentNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !startBtn.disabled) {
      startLearning();
    }
  });

  startBtn.addEventListener('click', startLearning);

  // Topic selection
  topicCards.forEach(card => {
    card.addEventListener('click', () => openTopic(card.dataset.topic));
  });

  // Navigation
  backHomeBtn.addEventListener('click', goBackHome);

  // Quiz
  quizToggle.addEventListener('click', startQuiz);
  backToLesson.addEventListener('click', showLessonView);
  nextQuestionBtn.addEventListener('click', nextQuestion);
  retryQuiz.addEventListener('click', startQuiz);
  finishQuiz.addEventListener('click', showLessonView);

  // Panel controls
  settingsBtn.addEventListener('click', openPanel);
  closePanel.addEventListener('click', closePanelFn);
  panelOverlay.addEventListener('click', closePanelFn);

  // Add verb
  addVerbBtn.addEventListener('click', addVerb);

  // Allow Enter to add verb
  [verbBase, verbThird, verbPast, verbParticiple, verbExample, verbTranslation].forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addVerb();
      }
    });
  });
}

// Screen Navigation
function showScreen(screen) {
  [loginScreen, homeScreen, lessonScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

function showHomeScreen() {
  displayName.textContent = state.studentName;
  pointsDisplay.textContent = state.points;
  showScreen(homeScreen);
}

function showLessonScreen() {
  lessonPoints.textContent = state.points;
  showScreen(lessonScreen);
}

// Start Learning
function startLearning() {
  state.studentName = studentNameInput.value.trim();
  localStorage.setItem('studentName', state.studentName);
  localStorage.setItem('points', state.points);
  showHomeScreen();
}

// Open Topic
function openTopic(topicId) {
  state.currentTopic = topicId;
  const lesson = lessons[topicId];

  lessonTitle.textContent = lesson.title;
  loadLesson();
  showLessonView();
  showLessonScreen();
}

// Go Back Home
function goBackHome() {
  stopAudio();
  state.currentTopic = null;
  pointsDisplay.textContent = state.points;
  showHomeScreen();
}

// Load Lesson
function loadLesson() {
  const lesson = lessons[state.currentTopic];

  let html = '';
  lesson.sections.forEach(section => {
    html += `
      <div class="lesson-section">
        <h3>${section.title}</h3>
        ${section.content}
      </div>
    `;
  });

  // Add custom verbs section for grammar topics
  if (lesson.type === 'grammar' && state.customVerbs.length > 0) {
    html += `
      <div class="lesson-section custom-verbs-section">
        <h3>My Custom Verbs</h3>
        <ul class="examples-list">
          ${state.customVerbs.map(verb => {
            let exampleText;

            if (state.currentTopic === 'present-simple') {
              exampleText = verb.example ? verb.example.replace('___', `<span class="verb-highlight">${verb.base}</span>`) : `I ${verb.base}, she ${verb.third}`;
            } else if (state.currentTopic === 'past-simple') {
              exampleText = verb.example ? verb.example.replace('___', `<span class="verb-highlight">${verb.past}</span>`) : `Yesterday I ${verb.past}`;
            } else {
              exampleText = verb.example ? verb.example.replace('___', `<span class="verb-highlight">will ${verb.base}</span>`) : `Tomorrow I will ${verb.base}`;
            }

            return `
              <li>
                <div class="custom-verb-item">
                  <span class="sentence">${exampleText}</span>
                  ${verb.translation ? `<span class="translation">→ ${verb.translation}</span>` : ''}
                </div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    `;
  }

  lessonContent.innerHTML = html;
}

// Show Lesson View
function showLessonView() {
  lessonView.classList.add('active');
  quizView.classList.remove('active');
}

// Audio functions for Listening
function playAudio(button, text) {
  // Stop any current speech
  if (currentUtterance) {
    window.speechSynthesis.cancel();
    document.querySelectorAll('.play-btn').forEach(btn => btn.classList.remove('playing'));
  }

  // Check if we're stopping the current one
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

  window.speechSynthesis.speak(currentUtterance);
}

function stopAudio() {
  if (currentUtterance) {
    window.speechSynthesis.cancel();
    document.querySelectorAll('.play-btn').forEach(btn => btn.classList.remove('playing'));
    currentUtterance = null;
  }
}

function toggleTranscript(button) {
  const transcript = button.nextElementSibling;
  const isVisible = transcript.classList.contains('visible');

  transcript.classList.toggle('visible');
  button.innerHTML = isVisible
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
      Show Transcript`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
      Hide Transcript`;
}

// Generate quiz questions from custom verbs
function generateCustomVerbQuestions() {
  if (state.currentTopic === 'listening') return [];

  const questions = [];

  state.customVerbs.forEach(verb => {
    if (state.currentTopic === 'present-simple') {
      questions.push({
        question: `She ___ every day. (${verb.base})`,
        options: shuffleArray([verb.base, verb.third, verb.past, verb.participle]),
        correct: -1,
        correctAnswer: verb.third
      });
    } else if (state.currentTopic === 'past-simple') {
      questions.push({
        question: `Yesterday I ___. (${verb.base})`,
        options: shuffleArray([verb.base, verb.third, verb.past, verb.participle]),
        correct: -1,
        correctAnswer: verb.past
      });
    } else if (state.currentTopic === 'future') {
      questions.push({
        question: `Tomorrow she ___ ${verb.base}.`,
        options: shuffleArray(['will', 'is going to', 'did', 'does']),
        correct: -1,
        correctAnswer: 'will'
      });
    }
  });

  questions.forEach(q => {
    q.correct = q.options.indexOf(q.correctAnswer);
    delete q.correctAnswer;
  });

  return questions;
}

// Start Quiz
function startQuiz() {
  stopAudio();
  state.currentQuestionIndex = 0;
  state.correctAnswers = 0;

  // Get questions for current topic
  const defaultQuestions = quizzes[state.currentTopic] ? [...quizzes[state.currentTopic]] : [];
  const customQuestions = generateCustomVerbQuestions();
  const allQuestions = [...defaultQuestions, ...customQuestions];

  // Shuffle and pick 5 questions
  state.quizQuestions = shuffleArray(allQuestions).slice(0, 5);

  if (state.quizQuestions.length === 0) {
    alert('No quiz questions available for this topic yet.');
    return;
  }

  totalQuestions.textContent = state.quizQuestions.length;

  // Show quiz view
  lessonView.classList.remove('active');
  quizView.classList.add('active');
  quizContainer.classList.remove('hidden');
  quizResults.classList.add('hidden');

  showQuestion();
}

// Show Question
function showQuestion() {
  const question = state.quizQuestions[state.currentQuestionIndex];

  questionNumber.textContent = state.currentQuestionIndex + 1;
  questionText.textContent = question.question;

  feedback.classList.add('hidden');
  feedback.classList.remove('correct', 'incorrect');
  nextQuestionBtn.classList.add('hidden');

  optionsContainer.innerHTML = '';
  question.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.addEventListener('click', () => selectAnswer(index));
    optionsContainer.appendChild(btn);
  });
}

// Select Answer
function selectAnswer(selectedIndex) {
  const question = state.quizQuestions[state.currentQuestionIndex];
  const buttons = optionsContainer.querySelectorAll('.option-btn');

  buttons.forEach(btn => btn.disabled = true);
  buttons[question.correct].classList.add('correct');

  if (selectedIndex === question.correct) {
    state.correctAnswers++;
    feedback.textContent = 'Correct! Great job!';
    feedback.classList.add('correct');
  } else {
    buttons[selectedIndex].classList.add('incorrect');
    feedback.textContent = `Incorrect. The correct answer is: ${question.options[question.correct]}`;
    feedback.classList.add('incorrect');
  }

  feedback.classList.remove('hidden');
  nextQuestionBtn.classList.remove('hidden');
}

// Next Question
function nextQuestion() {
  state.currentQuestionIndex++;

  if (state.currentQuestionIndex < state.quizQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

// Show Results
function showResults() {
  const earned = state.correctAnswers * 10;
  state.points += earned;

  localStorage.setItem('points', state.points);
  lessonPoints.textContent = state.points;

  quizContainer.classList.add('hidden');
  quizResults.classList.remove('hidden');

  quizScore.textContent = state.correctAnswers;
  quizTotal.textContent = state.quizQuestions.length;
  earnedPoints.textContent = earned;
}

// Panel Functions
function openPanel() {
  verbsPanel.classList.add('panel-visible');
  panelOverlay.classList.add('overlay-visible');
  document.body.style.overflow = 'hidden';
}

function closePanelFn() {
  verbsPanel.classList.remove('panel-visible');
  panelOverlay.classList.remove('overlay-visible');
  document.body.style.overflow = '';
}

// Add Verb
function addVerb() {
  const base = verbBase.value.trim();
  const third = verbThird.value.trim();
  const past = verbPast.value.trim();
  const participle = verbParticiple.value.trim();
  const example = verbExample.value.trim();
  const translation = verbTranslation.value.trim();

  if (!base) {
    verbBase.focus();
    return;
  }

  const newVerb = {
    id: Date.now(),
    base,
    third: third || base + 's',
    past: past || base + 'ed',
    participle: participle || past || base + 'ed',
    example,
    translation
  };

  state.customVerbs.push(newVerb);
  saveVerbs();
  renderVerbsList();
  clearVerbForm();

  if (state.currentTopic) {
    loadLesson();
  }
}

// Delete Verb
function deleteVerb(id) {
  state.customVerbs = state.customVerbs.filter(v => v.id !== id);
  saveVerbs();
  renderVerbsList();

  if (state.currentTopic) {
    loadLesson();
  }
}

// Save Verbs
function saveVerbs() {
  localStorage.setItem('customVerbs', JSON.stringify(state.customVerbs));
}

// Clear Verb Form
function clearVerbForm() {
  verbBase.value = '';
  verbThird.value = '';
  verbPast.value = '';
  verbParticiple.value = '';
  verbExample.value = '';
  verbTranslation.value = '';
  verbBase.focus();
}

// Render Verbs List
function renderVerbsList() {
  verbCount.textContent = `(${state.customVerbs.length})`;

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

// Utility: Shuffle Array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Initialize app
init();
