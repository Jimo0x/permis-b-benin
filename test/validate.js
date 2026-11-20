const fs = require("fs");
const vm = require("vm");
const path = require("path");

const base = path.join(__dirname, "..");
const files = ["js/signs.js", "js/cours.js", "js/questions.js"];
const sandbox = {};
vm.createContext(sandbox);

for (const f of files) {
  const code = fs.readFileSync(path.join(base, f), "utf8");
  vm.runInContext(code, sandbox, { filename: f });
}

const { SIGNS, SIGNS_BY_ID, CATEGORY_LABELS, COURS, COURS_BY_ID, QUESTIONS, QUESTIONS_BY_CHAPTER } = vm.runInContext(
  "({SIGNS, SIGNS_BY_ID, CATEGORY_LABELS, COURS, COURS_BY_ID, QUESTIONS, QUESTIONS_BY_CHAPTER})",
  sandbox
);

let errors = [];

// Signs checks
const signIds = new Set();
for (const s of SIGNS) {
  if (signIds.has(s.id)) errors.push(`Duplicate sign id: ${s.id}`);
  signIds.add(s.id);
  if (!CATEGORY_LABELS[s.category]) errors.push(`Sign ${s.id} has unknown category ${s.category}`);
  if (!s.svg || !s.svg.includes("<svg")) errors.push(`Sign ${s.id} missing svg`);
  if (!s.name) errors.push(`Sign ${s.id} missing name`);
}
console.log(`Signs: ${SIGNS.length}`);

// Cours checks
const chapterIds = new Set(COURS.map(c => c.id));
console.log(`Chapters: ${COURS.length}`);
for (const c of COURS) {
  if (!c.sections || !c.sections.length) errors.push(`Chapter ${c.id} has no sections`);
}

// Questions checks
const qIds = new Set();
for (const q of QUESTIONS) {
  if (qIds.has(q.id)) errors.push(`Duplicate question id: ${q.id}`);
  qIds.add(q.id);
  if (!chapterIds.has(q.chapter)) errors.push(`Question ${q.id} references unknown chapter ${q.chapter}`);
  if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`Question ${q.id} does not have 4 options (${q.options ? q.options.length : "none"})`);
  if (typeof q.correct !== "number" || q.correct < 0 || q.correct > 3) errors.push(`Question ${q.id} has invalid correct index ${q.correct}`);
  if (!q.explanation) errors.push(`Question ${q.id} missing explanation`);
  if (!q.prompt) errors.push(`Question ${q.id} missing prompt`);
}
console.log(`Questions: ${QUESTIONS.length}`);

// Per-chapter counts
for (const c of COURS) {
  const n = (QUESTIONS_BY_CHAPTER[c.id] || []).length;
  console.log(`  - ${c.id}: ${n} questions`);
  if (n === 0) errors.push(`Chapter ${c.id} has 0 static questions`);
}

if (errors.length) {
  console.error("\nERRORS FOUND:");
  errors.forEach(e => console.error(" - " + e));
  process.exit(1);
} else {
  console.log("\nAll validations passed.");
}
