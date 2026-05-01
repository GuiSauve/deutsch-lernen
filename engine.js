// ── Topic registry ─────────────────────────────────────
// To add a topic: create topics/<id>.js, then add one entry here.
const TOPICS = [
  { id: 'cases',            title: 'Cases overview',            status: 'done' },
  { id: 'articles',         title: 'Articles (der/die/das)',    status: 'coming' },
  { id: 'pronouns',         title: 'Personal pronouns',         status: 'coming' },
  { id: 'n-deklination',    title: 'N-Deklination',             status: 'done' },
  { id: 'prepositions',     title: 'Prepositions + cases',      status: 'coming' },
  { id: 'adjective-endings',title: 'Adjective endings',         status: 'coming' },
  { id: 'modal-verbs',      title: 'Modal verbs',               status: 'coming' },
  { id: 'word-order',       title: 'Word order',                status: 'coming' },
  { id: 'comparative',      title: 'Comparative / superlative', status: 'coming' },
];

// ── State ──────────────────────────────────────────────
let topic = null;
let activeSection = 'rules';

const exState = {
  mode: 'recognition',
  exercises: [],
  idx: 0,
  score: 0,
  answered: false,
};

// ── Topic loading ──────────────────────────────────────

async function loadTopic(id) {
  const { default: data } = await import(`./topics/${id}.js`);
  topic = data;
  activeSection = 'rules';
  exState.exercises = [];
  exState.mode = 'recognition';

  document.getElementById('topic-pill').textContent = topic.title;
  renderSidebar();
  renderContent();
}

// ── Sidebar ────────────────────────────────────────────

function renderSidebar() {
  const topicsHTML = TOPICS.map(t => {
    const isActive = topic && topic.id === t.id;
    const isDone = t.status === 'done';
    const cls = ['nav-btn', isActive ? 'active' : '', isDone ? '' : 'coming'].filter(Boolean).join(' ');
    const icon = isDone ? '✅' : '🔒';
    const attrs = isDone ? `onclick="_loadTopic('${t.id}')"` : 'disabled';
    const topicBtn = `<button class="${cls}" ${attrs}><span class="nav-icon">${icon}</span> ${t.title}</button>`;

    if (!isActive) return topicBtn;

    const subNav = `
      <button class="nav-btn sub-btn${activeSection === 'rules' ? ' active' : ''}" id="btn-rules" onclick="_showSection('rules')">
        <span class="nav-icon">📖</span> Regeln
      </button>
      <button class="nav-btn sub-btn${activeSection === 'tips' ? ' active' : ''}" id="btn-tips" onclick="_showSection('tips')">
        <span class="nav-icon">💡</span> Tipps &amp; Tricks
      </button>
      <button class="nav-btn sub-btn${activeSection === 'exercises' ? ' active' : ''}" id="btn-exercises" onclick="_showSection('exercises')">
        <span class="nav-icon">✏️</span> Übungen
      </button>`;
    return topicBtn + subNav;
  }).join('');

  document.getElementById('sidebar-nav').innerHTML = `
    <div class="sidebar-label">Themen</div>
    ${topicsHTML}
    <div class="sidebar-divider"></div>
    <div class="sidebar-label">Legende</div>
    <div class="legend">
      <div class="legend-item"><span class="badge badge-nom">NOM</span> Nominativ</div>
      <div class="legend-item"><span class="badge badge-akk">AKK</span> Akkusativ</div>
      <div class="legend-item"><span class="badge badge-dat">DAT</span> Dativ</div>
      <div class="legend-item"><span class="badge badge-gen">GEN</span> Genitiv</div>
    </div>
  `;
}

// ── Content ────────────────────────────────────────────

function renderContent() {
  document.getElementById('main-content').innerHTML = `
    <section id="section-rules" class="section${activeSection === 'rules' ? ' active' : ''}">
      ${topic.rulesHTML}
    </section>
    <section id="section-tips" class="section${activeSection === 'tips' ? ' active' : ''}">
      ${topic.tipsHTML}
    </section>
    <section id="section-exercises" class="section${activeSection === 'exercises' ? ' active' : ''}">
      <div class="page-title">Übungen</div>
      <div class="page-subtitle">Three exercise modes — pick one to start</div>
      <div class="mode-tabs">
        <button class="mode-tab${exState.mode === 'recognition' ? ' active' : ''}" id="tab-recognition" onclick="_setMode('recognition')">🔍 Recognition</button>
        <button class="mode-tab${exState.mode === 'cases' ? ' active' : ''}" id="tab-cases" onclick="_setMode('cases')">📐 Case Forms</button>
        <button class="mode-tab${exState.mode === 'sentences' ? ' active' : ''}" id="tab-sentences" onclick="_setMode('sentences')">💬 Sentences</button>
      </div>
      <p class="mode-hint">ℹ️ <strong>Recognition</strong> — spot the rule &nbsp;·&nbsp; <strong>Case Forms</strong> — drill the form (case is given) &nbsp;·&nbsp; <strong>Sentences</strong> — figure out both from context</p>
      <div id="ex-container"></div>
    </section>
  `;
  if (activeSection === 'exercises') startMode();
}

function showSection(name) {
  activeSection = name;
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('section-' + name).classList.add('active');
  document.getElementById('btn-' + name).classList.add('active');
  if (name === 'exercises' && exState.exercises.length === 0) startMode();
}

// ── Exercises ──────────────────────────────────────────

function setMode(m) {
  exState.mode = m;
  document.querySelectorAll('.mode-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + m).classList.add('active');
  startMode();
}

function startMode() {
  const pool = topic.exercises[exState.mode].items;
  exState.exercises = shuffle(pool);
  exState.idx = 0;
  exState.score = 0;
  exState.answered = false;
  render();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function render() {
  if (exState.idx >= exState.exercises.length) { renderResults(); return; }
  const ex = exState.exercises[exState.idx];
  const isYesNo = exState.mode === 'recognition' && topic.exercises.recognition.type !== 'multichoice';
  isYesNo ? renderRecognition(ex) : renderChoice(ex);
}

function progressHeader() {
  const pct = Math.round((exState.idx / exState.exercises.length) * 100);
  return `
    <div class="ex-header">
      <span class="ex-counter">${exState.idx + 1} / ${exState.exercises.length}</span>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      <span class="score-badge">${exState.score} ✓</span>
    </div>`;
}

function renderRecognition(ex) {
  const rec = topic.exercises.recognition;
  const q = rec.questionTemplate.replace('{noun}', ex.noun);
  document.getElementById('ex-container').innerHTML = progressHeader() + `
    <div class="ex-card">
      <div class="ex-type">🔍 Recognition — ${rec.label}</div>
      <div class="ex-question">${q}</div>
      <div class="choices">
        <button class="choice" onclick="_checkRec(true)">${rec.yesLabel}</button>
        <button class="choice" onclick="_checkRec(false)">${rec.noLabel}</button>
      </div>
      <div class="feedback" id="fb"></div>
      <button class="next-btn" id="nb" onclick="_next()">Weiter →</button>
    </div>`;
}

function checkRec(userSaid) {
  if (exState.answered) return;
  exState.answered = true;
  const ex = exState.exercises[exState.idx];
  const ok = userSaid === ex.isN;
  if (ok) exState.score++;

  const btns = document.querySelectorAll('.choice');
  btns.forEach(b => b.disabled = true);
  btns[ex.isN ? 0 : 1].classList.add('correct');
  if (!ok) btns[userSaid ? 0 : 1].classList.add('wrong');

  const fb = document.getElementById('fb');
  fb.className = 'feedback show ' + (ok ? 'ok' : 'ko');
  fb.innerHTML = (ok ? '✅ Richtig! ' : '❌ Falsch. ') + ex.xp;
  document.getElementById('nb').classList.add('show');
}

function renderChoice(ex) {
  let typeLabel;
  if (exState.mode === 'recognition') {
    typeLabel = `🔍 ${topic.exercises.recognition.label}`;
  } else {
    const icon = exState.mode === 'cases' ? '📐 Case Forms' : '💬 Sentence Completion';
    typeLabel = `${icon} &nbsp; <span class="badge badge-${ex.badge}">${ex.case}</span>`;
  }
  const q = ex.q.replace('_____', '<em>_____</em>');
  const opts = ex.opts.map((o, i) =>
    `<button class="choice" onclick="_checkChoice(${i})">${o}</button>`
  ).join('');
  document.getElementById('ex-container').innerHTML = progressHeader() + `
    <div class="ex-card">
      <div class="ex-type">${typeLabel}</div>
      <div class="ex-question">${q}</div>
      <div class="choices">${opts}</div>
      <div class="feedback" id="fb"></div>
      <button class="next-btn" id="nb" onclick="_next()">Weiter →</button>
    </div>`;
}

function checkChoice(chosen) {
  if (exState.answered) return;
  exState.answered = true;
  const ex = exState.exercises[exState.idx];
  const ok = chosen === ex.ans;
  if (ok) exState.score++;

  const btns = document.querySelectorAll('.choice');
  btns.forEach(b => b.disabled = true);
  btns[ex.ans].classList.add('correct');
  if (!ok) btns[chosen].classList.add('wrong');

  const fb = document.getElementById('fb');
  fb.className = 'feedback show ' + (ok ? 'ok' : 'ko');
  fb.innerHTML = (ok ? '✅ Richtig! ' : '❌ Falsch. ') + ex.xp;
  document.getElementById('nb').classList.add('show');
}

function next() {
  exState.idx++;
  exState.answered = false;
  render();
}

function renderResults() {
  const total = exState.exercises.length;
  const pct = Math.round((exState.score / total) * 100);
  const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '👍' : pct >= 50 ? '📚' : '😕';
  const msg = pct >= 90 ? 'Ausgezeichnet! Excellent work!'
            : pct >= 70 ? 'Gut gemacht! Good job!'
            : pct >= 50 ? 'Nicht schlecht! Keep going!'
            :             'Noch üben! More practice needed.';
  document.getElementById('ex-container').innerHTML = `
    <div class="results">
      <div class="results-emoji">${emoji}</div>
      <div class="results-score">${exState.score}/${total}</div>
      <div class="results-msg">${pct}% — ${msg}</div>
      <button class="restart-btn" onclick="_startMode()">Nochmal versuchen</button>
    </div>`;
}

// ── Expose to inline onclick handlers ─────────────────
window._loadTopic  = loadTopic;
window._showSection = showSection;
window._setMode    = setMode;
window._startMode  = startMode;
window._checkRec   = checkRec;
window._checkChoice = checkChoice;
window._next       = next;

// ── Init ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  loadTopic('n-deklination');
});
