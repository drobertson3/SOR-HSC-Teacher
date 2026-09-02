// ====================================================================
// HSC Studies of Religion II — Teacher Dashboard configuration
// This folder is deployed SEPARATELY from the student game, so students
// never see this file.
// ====================================================================

// 1. DASHBOARD PASSWORD — one shared password gets anyone in. This is a
//    convenience wall, not a cryptographic boundary: a password sitting in a file
//    the browser downloads is readable by anyone who opens DevTools, and Firestore
//    itself (FIRESTORE-RULES.txt) does not check it. It is enough to keep casual
//    visitors and students out; it is not enough to protect anything sensitive.
//    Change it here, or from the dashboard's own Settings tab (which overrides
//    this value without needing a re-deploy).
const TEACHER_PASSWORD = "4444";

// 2. Link to the student game (shown as a button in the dashboard).
//    Leave "" to hide the button.
const STUDENT_SITE_URL = "";

// 2b. CLASSES — must match the student game's config.js.
const CLASSES = ["SOR"];

// 2c. QUIZ_OPTIONS — must match the student game's config.js. The dashboard only
//     reads this to show the current values on the Settings tab; the numbers that
//     actually apply during play are the student game's own.
const QUIZ_OPTIONS = {
  secondsPerQuestion: 90,
  xpPerCorrect: 10,
  xpPerMark: 10,
};

// 2c. AI MARKING ASSISTANT — paste your Anthropic API key to have the AI suggest
//     a mark and feedback for each submitted answer. You approve or override every
//     mark before students see it. Leave "" to mark entirely by hand.
const AI_CONFIG = {
  apiKey: "",                              // paste your key here — starts with sk-ant-
  model: "claude-haiku-4-5-20251001",      // cheapest, plenty good for marking
};

// 3. FIREBASE — must be the SAME project as the student game's config.js.
//    This is the same Firebase project as the HSC Health and Movement Science
//    Quiz Arena — every collection this app reads/writes is prefixed sor_
//    (see store.js's COL() helper), so the two apps' data never collides.
const firebaseConfig = {
  apiKey: "AIzaSyBWWZUeSWR5pCPxqdBwAhvxNvFgCqtoOTo",
  authDomain: "hsc-hms-quiz.firebaseapp.com",
  projectId: "hsc-hms-quiz",
  storageBucket: "hsc-hms-quiz.firebasestorage.app",
  messagingSenderId: "738063762749",
  appId: "1:738063762749:web:d4762a8199489ec97e7154"
};
