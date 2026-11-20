/* ===================================================================
   app.js — Logique de l'application (routage, quiz, stockage local)
   =================================================================== */

const STORAGE_KEY = "permisBBenin_state_v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return { correct: {}, wrong: {}, examScores: [], answeredTotal: 0, correctTotal: 0 };
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (e) { /* stockage indisponible, on continue sans persister */ }
}

let state = loadState();

/* ---------------------------- Routage ---------------------------- */

const app = document.getElementById("app");
const headerScore = document.getElementById("headerScore");
const tabButtons = document.querySelectorAll("nav.tabbar button");

function setActiveTab(view) {
  tabButtons.forEach(b => b.classList.toggle("active", b.dataset.view === view));
}

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => navigate(btn.dataset.view));
});

function navigate(view, params) {
  setActiveTab(view);
  window.scrollTo(0, 0);
  if (view === "home") renderHome();
  else if (view === "cours") renderCoursList();
  else if (view === "coursDetail") renderCoursDetail(params.id);
  else if (view === "qcm") renderQcmMenu();
  else if (view === "panneaux") renderPanneaux();
  else if (view === "progres") renderProgres();
  else if (view === "quiz") startQuiz(params);
  updateHeaderScore();
}

function updateHeaderScore() {
  const pct = state.answeredTotal > 0 ? Math.round((state.correctTotal / state.answeredTotal) * 100) : 0;
  headerScore.textContent = state.answeredTotal > 0 ? `${pct}% de réussite` : "Commence à réviser";
}

/* ---------------------------- Accueil ---------------------------- */

function renderHome() {
  const bestExam = state.examScores.length ? Math.max(...state.examScores.map(s => s.score)) : null;
  const pct = state.answeredTotal > 0 ? Math.round((state.correctTotal / state.answeredTotal) * 100) : 0;

  app.innerHTML = `
    <div class="install-banner" id="installBanner">
      <span>📲 Installe l'appli pour réviser hors ligne, même sans connexion.</span>
      <button class="btn secondary" id="installBtn" style="width:auto;white-space:nowrap;">Installer</button>
    </div>

    <div class="home-hero">
      <h1>Code de la route — Permis B 🇧🇯</h1>
      <p>Apprends le cours résumé et entraîne-toi avec des QCM inspirés des examens blancs d'auto-école au Bénin : panneaux, priorités, vitesse, sécurité… Fonctionne aussi hors connexion.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-box"><div class="num">${state.answeredTotal}</div><div class="label">Questions faites</div></div>
      <div class="stat-box"><div class="num">${pct}%</div><div class="label">Taux de réussite</div></div>
      <div class="stat-box"><div class="num">${bestExam !== null ? bestExam + "/20" : "—"}</div><div class="label">Meilleur blanc</div></div>
    </div>

    <h2>Entraînement rapide</h2>
    <div class="mode-grid">
      <div class="mode-card" data-mode="examen"><span class="icon">🎯</span><div class="title">Examen blanc</div><div class="sub">20 questions, 14/20 pour réussir</div></div>
      <div class="mode-card" data-mode="theme"><span class="icon">📚</span><div class="title">Par thème</div><div class="sub">Choisis un chapitre</div></div>
      <div class="mode-card" data-mode="panneaux"><span class="icon">🚸</span><div class="title">Panneaux</div><div class="sub">Reconnaissance visuelle</div></div>
      <div class="mode-card" data-mode="erreurs"><span class="icon">🔁</span><div class="title">Mes erreurs</div><div class="sub">${Object.keys(state.wrong).length} à revoir</div></div>
    </div>

    <h2 style="margin-top:22px;">Le cours</h2>
    <p>Résumé complet, chapitre par chapitre, pour tout comprendre avant de t'entraîner.</p>
    <button class="btn secondary" id="goCours">Ouvrir le cours</button>
  `;

  document.getElementById("goCours").addEventListener("click", () => navigate("cours"));
  app.querySelectorAll(".mode-card").forEach(card => {
    card.addEventListener("click", () => handleModeClick(card.dataset.mode));
  });
  setupInstallBanner();
}

function handleModeClick(mode) {
  if (mode === "examen") navigate("quiz", { mode: "examen" });
  else if (mode === "panneaux") navigate("quiz", { mode: "panneaux" });
  else if (mode === "erreurs") {
    if (Object.keys(state.wrong).length === 0) {
      alert("Tu n'as aucune erreur enregistrée pour le moment. Fais d'abord quelques QCM !");
      return;
    }
    navigate("quiz", { mode: "erreurs" });
  }
  else if (mode === "theme") navigate("qcm");
}

/* ---------------------------- Cours ---------------------------- */

function renderCoursList() {
  app.innerHTML = `
    <h1>Le cours</h1>
    <p>Tout le programme, résumé chapitre par chapitre. Lis un chapitre, puis entraîne-toi dessus avec le QCM thématique.</p>
    <div class="chapter-list">
      ${COURS.map(c => `
        <div class="chapter-row" data-id="${c.id}">
          <div class="emoji">${c.icon}</div>
          <div class="meta">
            <div class="title">${c.title}</div>
            <div class="sub">${c.sections.length} section${c.sections.length > 1 ? "s" : ""}</div>
          </div>
          <div class="chevron">›</div>
        </div>
      `).join("")}
    </div>
  `;
  app.querySelectorAll(".chapter-row").forEach(row => {
    row.addEventListener("click", () => navigate("coursDetail", { id: row.dataset.id }));
  });
}

function renderCoursDetail(id) {
  const c = COURS_BY_ID[id];
  if (!c) return navigate("cours");
  app.innerHTML = `
    <button class="btn ghost" id="backBtn" style="width:auto;margin-bottom:14px;">← Retour au cours</button>
    <h1>${c.icon} ${c.title}</h1>
    ${c.sections.map(s => `
      <div class="card">
        <h3>${s.heading}</h3>
        ${s.html}
      </div>
    `).join("")}
    <button class="btn" id="trainBtn">S'entraîner sur ce chapitre →</button>
  `;
  document.getElementById("backBtn").addEventListener("click", () => navigate("cours"));
  document.getElementById("trainBtn").addEventListener("click", () => navigate("quiz", { mode: "theme", chapter: id }));
}

/* ---------------------------- Menu QCM par thème ---------------------------- */

function renderQcmMenu() {
  app.innerHTML = `
    <h1>QCM par thème</h1>
    <p>Choisis un chapitre pour t'entraîner spécifiquement dessus.</p>
    <div class="chapter-list">
      ${COURS.map(c => {
        const count = (QUESTIONS_BY_CHAPTER[c.id] || []).length + (c.id === "signalisation" ? SIGNS.length : 0);
        return `
        <div class="chapter-row" data-id="${c.id}">
          <div class="emoji">${c.icon}</div>
          <div class="meta">
            <div class="title">${c.title}</div>
            <div class="sub">${count} questions disponibles</div>
          </div>
          <div class="chevron">›</div>
        </div>`;
      }).join("")}
    </div>
  `;
  app.querySelectorAll(".chapter-row").forEach(row => {
    row.addEventListener("click", () => navigate("quiz", { mode: "theme", chapter: row.dataset.id }));
  });
}

/* ---------------------------- Référentiel des panneaux ---------------------------- */

function renderPanneaux() {
  const categories = Object.keys(CATEGORY_LABELS);
  app.innerHTML = `
    <h1>Panneaux de signalisation</h1>
    <p>Sers-toi de cette page comme fiche de révision rapide avant de t'entraîner en mode QCM.</p>
    <div class="chip-row" id="chipRow">
      <div class="chip active" data-cat="all">Tous</div>
      ${categories.map(c => `<div class="chip" data-cat="${c}">${CATEGORY_LABELS[c]}</div>`).join("")}
    </div>
    <div class="signs-grid" id="signsGrid"></div>
  `;
  const grid = document.getElementById("signsGrid");
  function draw(cat) {
    const list = cat === "all" ? SIGNS : SIGNS.filter(s => s.category === cat);
    grid.innerHTML = list.map(s => `
      <div class="sign-card">${s.svg}<div class="name">${s.name}</div></div>
    `).join("");
  }
  draw("all");
  document.querySelectorAll("#chipRow .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#chipRow .chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      draw(chip.dataset.cat);
    });
  });
}

/* ---------------------------- Progression ---------------------------- */

function renderProgres() {
  const pct = state.answeredTotal > 0 ? Math.round((state.correctTotal / state.answeredTotal) * 100) : 0;
  const bestExam = state.examScores.length ? Math.max(...state.examScores.map(s => s.score)) : null;
  const lastExams = state.examScores.slice(-5).reverse();

  const chapterRows = COURS.map(c => {
    const chapterQs = QUESTIONS_BY_CHAPTER[c.id] || [];
    const total = chapterQs.length;
    const seen = chapterQs.filter(q => state.correct[q.id] || state.wrong[q.id]).length;
    const correct = chapterQs.filter(q => state.correct[q.id]).length;
    const chapterPct = seen > 0 ? Math.round((correct / seen) * 100) : 0;
    return `
      <div class="card" style="padding:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <strong style="color:#fff;font-size:.9rem;">${c.icon} ${c.title}</strong>
          <span style="font-size:.78rem;color:var(--text-dim);">${seen}/${total} vues</span>
        </div>
        <div class="bar" style="height:8px;background:var(--border);border-radius:999px;overflow:hidden;">
          <div style="height:100%;width:${chapterPct}%;background:${chapterPct >= 70 || seen === 0 ? 'var(--red)' : '#e0a821'};"></div>
        </div>
        <div style="font-size:.74rem;color:var(--text-dim);margin-top:4px;">${seen > 0 ? chapterPct + "% de bonnes réponses" : "Pas encore commencé"}</div>
      </div>
    `;
  }).join("");

  app.innerHTML = `
    <h1>Ma progression</h1>
    <div class="stats-grid">
      <div class="stat-box"><div class="num">${state.answeredTotal}</div><div class="label">Questions faites</div></div>
      <div class="stat-box"><div class="num">${pct}%</div><div class="label">Taux global</div></div>
      <div class="stat-box"><div class="num">${bestExam !== null ? bestExam + "/20" : "—"}</div><div class="label">Meilleur blanc</div></div>
    </div>

    ${lastExams.length ? `
      <h2>Derniers examens blancs</h2>
      <div class="card">
        ${lastExams.map(e => `
          <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);font-size:.85rem;">
            <span>${new Date(e.date).toLocaleDateString("fr-FR")}</span>
            <span style="color:${e.score >= 14 ? 'var(--green)' : 'var(--red)'};font-weight:700;">${e.score}/20</span>
          </div>
        `).join("")}
      </div>
    ` : ""}

    <h2>Détail par chapitre</h2>
    ${chapterRows}

    ${Object.keys(state.wrong).length ? `<button class="btn" id="reviewBtn" style="margin-top:10px;">Revoir mes ${Object.keys(state.wrong).length} erreurs →</button>` : ""}
  `;

  const reviewBtn = document.getElementById("reviewBtn");
  if (reviewBtn) reviewBtn.addEventListener("click", () => navigate("quiz", { mode: "erreurs" }));
}

/* ---------------------------- Génération dynamique de questions "panneau" ---------------------------- */

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDistractors(correctSign, n) {
  const pool = SIGNS.filter(s => s.id !== correctSign.id);
  return shuffle(pool).slice(0, n);
}

function generateSignQuestion(sign, variant) {
  if (variant === "meaning") {
    const distractors = pickDistractors(sign, 3);
    const optionsRaw = shuffle([sign, ...distractors]);
    return {
      id: "dyn-" + sign.id + "-meaning-" + Math.random().toString(36).slice(2, 7),
      chapter: "signalisation",
      type: "panneau",
      optionType: "text",
      signSvg: sign.svg,
      prompt: "Que signifie ce panneau ?",
      options: optionsRaw.map(s => s.name),
      correct: optionsRaw.findIndex(s => s.id === sign.id),
      explanation: `Il s'agit du panneau « ${sign.name} » (${CATEGORY_LABELS[sign.category]}).`
    };
  } else {
    const distractors = pickDistractors(sign, 3);
    const optionsRaw = shuffle([sign, ...distractors]);
    return {
      id: "dyn-" + sign.id + "-identify-" + Math.random().toString(36).slice(2, 7),
      chapter: "signalisation",
      type: "panneau",
      optionType: "sign",
      prompt: `Quel panneau signifie : « ${sign.name} » ?`,
      options: optionsRaw.map(s => s.svg),
      correct: optionsRaw.findIndex(s => s.id === sign.id),
      explanation: `Le panneau recherché est celui correspondant à « ${sign.name} » (${CATEGORY_LABELS[sign.category]}).`
    };
  }
}

function generateSignQuestions(count) {
  const picks = shuffle(SIGNS).slice(0, count);
  return picks.map((s, i) => generateSignQuestion(s, i % 2 === 0 ? "meaning" : "identify"));
}

/* ---------------------------- Construction des séries de quiz ---------------------------- */

function buildQuizSet(params) {
  if (params.mode === "examen") {
    const staticPool = shuffle(QUESTIONS);
    const signQs = generateSignQuestions(6);
    const pool = shuffle([...staticPool.slice(0, 16), ...signQs]);
    return { title: "Examen blanc", questions: pool.slice(0, 20), passThreshold: 14, isExam: true };
  }
  if (params.mode === "panneaux") {
    return { title: "Entraînement — Panneaux", questions: generateSignQuestions(15), isExam: false };
  }
  if (params.mode === "erreurs") {
    const wrongIds = Object.keys(state.wrong);
    const qs = QUESTIONS.filter(q => wrongIds.includes(q.id));
    return { title: "Révision de mes erreurs", questions: shuffle(qs), isExam: false };
  }
  if (params.mode === "theme") {
    const chapter = COURS_BY_ID[params.chapter];
    let qs = shuffle((QUESTIONS_BY_CHAPTER[params.chapter] || []).slice());
    if (params.chapter === "signalisation") {
      qs = shuffle([...qs, ...generateSignQuestions(10)]);
    }
    return { title: chapter ? chapter.title : "Thème", questions: qs, isExam: false };
  }
  return { title: "Entraînement", questions: shuffle(QUESTIONS).slice(0, 15), isExam: false };
}

/* ---------------------------- Moteur de quiz ---------------------------- */

let quizCtx = null;

function startQuiz(params) {
  const built = buildQuizSet(params);
  if (!built.questions.length) {
    app.innerHTML = `<div class="empty-state">Aucune question disponible pour ce choix pour le moment.</div>
      <button class="btn secondary" id="backHome">Retour à l'accueil</button>`;
    document.getElementById("backHome").addEventListener("click", () => navigate("home"));
    return;
  }
  quizCtx = {
    title: built.title,
    questions: built.questions,
    index: 0,
    answers: [],
    passThreshold: built.passThreshold || null,
    isExam: !!built.isExam,
    locked: false,
    params
  };
  renderQuestion();
}

function renderQuestion() {
  const { questions, index, title } = quizCtx;
  const q = questions[index];
  const pct = Math.round((index / questions.length) * 100);

  const optionsHtml = q.options.map((opt, i) => {
    if (q.optionType === "sign") {
      return `<div class="option" data-i="${i}"><span class="sign-thumb">${opt}</span></div>`;
    }
    return `<div class="option" data-i="${i}"><span>${opt}</span></div>`;
  }).join("");

  app.innerHTML = `
    <div class="quiz-progress">
      <div class="bar"><div class="fill" style="width:${pct}%"></div></div>
      <div class="count">${index + 1}/${questions.length}</div>
    </div>
    <div class="card">
      <span class="question-badge">${title}</span>
      ${q.signSvg ? `<div class="sign-wrap">${q.signSvg}</div>` : ""}
      <div class="question-text">${q.prompt}</div>
      <div class="options">${optionsHtml}</div>
      <div id="explainZone"></div>
    </div>
  `;

  quizCtx.locked = false;
  document.querySelectorAll(".option").forEach(opt => {
    opt.addEventListener("click", () => selectAnswer(parseInt(opt.dataset.i, 10)));
  });
}

function selectAnswer(i) {
  if (quizCtx.locked) return;
  quizCtx.locked = true;
  const q = quizCtx.questions[quizCtx.index];
  const correct = i === q.correct;

  quizCtx.answers.push({ id: q.id, correct });
  state.answeredTotal++;
  if (correct) state.correctTotal++;

  if (!String(q.id).startsWith("dyn-")) {
    if (correct) { delete state.wrong[q.id]; state.correct[q.id] = true; }
    else { state.wrong[q.id] = true; }
  }
  saveState();
  updateHeaderScore();

  document.querySelectorAll(".option").forEach((opt, idx) => {
    opt.classList.add("disabled");
    if (idx === q.correct) opt.classList.add("correct");
    else if (idx === i) opt.classList.add("wrong");
  });

  const zone = document.getElementById("explainZone");
  zone.innerHTML = `
    <div class="explanation ${correct ? "ok" : "ko"}">
      <strong>${correct ? "✅ Bonne réponse !" : "❌ Pas tout à fait."}</strong><br>
      ${q.explanation}
    </div>
    <button class="btn" id="nextBtn" style="margin-top:14px;">
      ${quizCtx.index + 1 < quizCtx.questions.length ? "Question suivante →" : "Voir mon résultat"}
    </button>
  `;
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
}

function nextQuestion() {
  quizCtx.index++;
  if (quizCtx.index >= quizCtx.questions.length) {
    finishQuiz();
  } else {
    renderQuestion();
  }
}

function finishQuiz() {
  const total = quizCtx.questions.length;
  const correctCount = quizCtx.answers.filter(a => a.correct).length;
  const scoreOn20 = Math.round((correctCount / total) * 20);

  if (quizCtx.isExam) {
    state.examScores.push({ score: scoreOn20, date: new Date().toISOString() });
    if (state.examScores.length > 20) state.examScores.shift();
    saveState();
  }

  const passed = quizCtx.passThreshold ? scoreOn20 >= quizCtx.passThreshold : correctCount / total >= 0.7;

  app.innerHTML = `
    <div class="card result-score">
      <div class="big ${quizCtx.passThreshold ? (passed ? "pass" : "fail") : ""}">${correctCount}/${total}</div>
      <div class="sub">${quizCtx.passThreshold ? `Équivalent ${scoreOn20}/20 — seuil de réussite : ${quizCtx.passThreshold}/20` : "Score de cette série"}</div>
      ${quizCtx.passThreshold ? `<h2 style="margin-top:16px;" class="${passed ? "pass" : "fail"}">${passed ? "🎉 Admis(e) !" : "😕 Pas encore suffisant"}</h2>` : ""}
    </div>
    <div class="btn-row">
      <button class="btn secondary" id="retryBtn">Recommencer</button>
      <button class="btn" id="homeBtn">Accueil</button>
    </div>
  `;
  document.getElementById("homeBtn").addEventListener("click", () => navigate("home"));
  document.getElementById("retryBtn").addEventListener("click", () => startQuiz(quizCtx.params || { mode: "examen" }));
}

/* ---------------------------- Installation PWA ---------------------------- */

let deferredInstallPrompt = null;

function setupInstallBanner() {
  const banner = document.getElementById("installBanner");
  const btn = document.getElementById("installBtn");
  if (!banner || !btn) return;
  if (deferredInstallPrompt) banner.classList.add("show");
  btn.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    banner.classList.remove("show");
  });
}

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const banner = document.getElementById("installBanner");
  if (banner) banner.classList.add("show");
});

/* ---------------------------- Service worker ---------------------------- */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => { /* hors ligne non critique */ });
  });
}

/* ---------------------------- Démarrage ---------------------------- */

navigate("home");
