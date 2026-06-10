// --- components/Icons.jsx ---
;(function () {
// Lucide-style icons inlined as SVG components (stroke 1.75, currentColor)
const icon = (paths, vb = 24) => props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: props.size || 20,
  height: props.size || 20,
  viewBox: `0 0 ${vb} ${vb}`,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: props.stroke || 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: props.className,
  style: props.style
}, paths);
const ArrowRight = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 5 7 7-7 7"
})));
const ArrowLeft = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M19 12H5"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 19-7-7 7-7"
})));
const ArrowUpRight = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M7 17 17 7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 7h10v10"
})));
const Check = icon(/*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Dumbbell = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M14.4 14.4 9.6 9.6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m21.5 21.5-1.4-1.4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.9 3.9 2.5 2.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"
})));
const Trophy = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 22h16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
})));
const Zap = icon(/*#__PURE__*/React.createElement("path", {
  d: "M13 2 3 14h9l-1 8 10-12h-9l1-8z"
}));
const Heart = icon(/*#__PURE__*/React.createElement("path", {
  d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"
}));
const Users = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "7",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 21v-2a4 4 0 0 0-3-3.87"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 3.13a4 4 0 0 1 0 7.75"
})));
const Target = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "2"
})));
const Apple = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 2c1 .5 2 2 2 5"
})));
const Activity = icon(/*#__PURE__*/React.createElement("path", {
  d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.5.5 0 0 1-.96 0L9.24 2.18a.5.5 0 0 0-.96 0l-2.35 8.36A2 2 0 0 1 4 12H2"
}));
const MapPin = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
})));
const Phone = icon(/*#__PURE__*/React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));
const Mail = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
})));
const Calendar = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M8 2v4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 2v4"
}), /*#__PURE__*/React.createElement("rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 10h18"
})));
const Clock = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 6 12 12 16 14"
})));
const Star = icon(/*#__PURE__*/React.createElement("polygon", {
  points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
}));
const Shield = icon(/*#__PURE__*/React.createElement("path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}));
const X = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18"
}), /*#__PURE__*/React.createElement("path", {
  d: "m6 6 12 12"
})));
const Menu = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M4 6h16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 12h16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 18h16"
})));
const ChevronDown = icon(/*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));
const Flame = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
})));
const Play = icon(/*#__PURE__*/React.createElement("polygon", {
  points: "6 3 20 12 6 21 6 3"
}));
const Brain = icon(/*#__PURE__*/React.createElement("path", {
  d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Zm0 0a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Zm0 0v1"
}));
const TrendingUp = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
  points: "22 7 13.5 15.5 8.5 10.5 2 17"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "16 7 22 7 22 13"
})));
Object.assign(window, {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Check,
  Dumbbell,
  Trophy,
  Zap,
  Heart,
  Users,
  Target,
  Apple,
  Activity,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
  Star,
  Shield,
  X,
  Menu,
  ChevronDown,
  Flame,
  Play,
  Brain,
  TrendingUp
});
})();

// --- components/GetStarted.jsx ---
;(function () {
// Get Started — 4-step pre-qualifying funnel
// Step 1-4: qualifying questions
// Step 5: reveal — choose (Book call / Send details)
// Step 6: confirmation

const QUESTIONS = [{
  id: 'age',
  q: "How old is your athlete?",
  sub: "Young Knights is built for ages 13–17. Sorry — we don't currently run a program for under 12s.",
  options: [{
    val: '12-14',
    label: '12–14',
    sub: "Perfect age to build athletic foundations."
  }, {
    val: '15-17',
    label: '15–17',
    sub: "Prime window for strength and sport performance."
  }, {
    val: '18+',
    label: '18 or older',
    sub: "We can point you toward Knight Fitness adult programs."
  }]
}, {
  id: 'goal',
  q: "What's the main goal?",
  sub: "Helps us know what to focus on in your teen's first session.",
  options: [{
    val: 'sport',
    label: 'Sport performance',
    sub: "Get stronger, faster, more explosive for their sport."
  }, {
    val: 'strength',
    label: 'Strength & confidence',
    sub: "Build a body and mindset they feel good in."
  }, {
    val: 'fitness',
    label: 'Fitness & body composition',
    sub: "Lean out, build athletic shape, feel healthier."
  }, {
    val: 'unsure',
    label: 'Not sure yet',
    sub: "That's totally fine — we'll help you figure it out."
  }]
}, {
  id: 'experience',
  q: "Have they trained before?",
  sub: "We coach every level — this just tells us where to start.",
  options: [{
    val: 'none',
    label: 'No, total beginner',
    sub: "Most of our Young Knights start here."
  }, {
    val: 'some',
    label: 'A little — school or home',
    sub: "We'll clean up technique and build from there."
  }, {
    val: 'regular',
    label: 'Yes, they train regularly',
    sub: "Expect to move up a level under coach-led programming."
  }]
}, {
  id: 'timing',
  q: "How soon are you looking to start?",
  sub: "We're limited to small groups — let us know your timeline.",
  options: [{
    val: 'this-week',
    label: 'This week',
    sub: "Let's get you in for a trial ASAP."
  }, {
    val: 'next-2wks',
    label: 'Next 1–2 weeks',
    sub: "Plenty of time — we'll hold a spot."
  }, {
    val: 'this-month',
    label: 'Sometime this month',
    sub: "No rush. Come see the studio first if you like."
  }, {
    val: 'exploring',
    label: 'Just exploring',
    sub: "Happy to send info and answer questions."
  }]
}];

// GHL form handles submission; confirmation is shown inside the form iframe.

function GetStarted() {
  const [step, setStep] = React.useState(0); // 0..3 = questions, 4 = reveal, 5 = confirm
  const [answers, setAnswers] = React.useState({});
  const [revealMode, setRevealMode] = React.useState('book'); // 'book' | 'details'

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);
  const totalSteps = QUESTIONS.length + 1; // 4 questions + 1 reveal
  const isQuestion = step < QUESTIONS.length;
  const isReveal = step === QUESTIONS.length;
  const isConfirm = step === QUESTIONS.length + 1;
  const pick = (qid, val) => {
    setAnswers(a => ({
      ...a,
      [qid]: val
    }));
    // auto-advance
    setTimeout(() => setStep(s => s + 1), 180);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "gs-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gs-topbar"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/yk-logo.svg",
    alt: "Young Knights",
    style: {
      height: 52,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    className: "back"
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    size: 14
  }), " Back to site")), /*#__PURE__*/React.createElement("main", {
    className: "gs-main"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gs-card"
  }, !isConfirm && /*#__PURE__*/React.createElement("div", {
    className: "gs-progress"
  }, Array.from({
    length: totalSteps
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: i <= step ? 'done' : ''
  }))), /*#__PURE__*/React.createElement("div", {
    className: "gs-body"
  }, isQuestion && /*#__PURE__*/React.createElement(QuestionStep, {
    index: step,
    total: QUESTIONS.length,
    question: QUESTIONS[step],
    value: answers[QUESTIONS[step].id],
    onPick: val => pick(QUESTIONS[step].id, val),
    onBack: () => setStep(s => Math.max(0, s - 1))
  }), isReveal && /*#__PURE__*/React.createElement(RevealStep, {
    answers: answers,
    mode: revealMode,
    setMode: setRevealMode,
    onBack: () => setStep(s => s - 1),
    onSubmitted: () => setStep(s => s + 1)
  }), isConfirm && /*#__PURE__*/React.createElement(ConfirmStep, {
    answers: answers
  }))), !isConfirm && /*#__PURE__*/React.createElement("div", {
    className: "gs-testimonial"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px'
    }
  }, "\"Noah always wants to go and never complains. He has a lot more confidence in himself.\""), /*#__PURE__*/React.createElement("strong", null, "\u2014 Kirsty, parent of Noah")))));
}
function QuestionStep({
  index,
  total,
  question,
  value,
  onPick,
  onBack
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gs-step-num"
  }, "Step ", index + 1, " of ", total), /*#__PURE__*/React.createElement("div", {
    className: "gs-step-meta"
  }, "30 seconds")), /*#__PURE__*/React.createElement("h1", {
    className: "gs-q"
  }, question.q), /*#__PURE__*/React.createElement("p", {
    className: "gs-sub"
  }, question.sub), /*#__PURE__*/React.createElement("div", {
    className: "gs-opts"
  }, question.options.map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.val,
    className: `gs-opt ${value === opt.val ? 'selected' : ''}`,
    onClick: () => onPick(opt.val)
  }, /*#__PURE__*/React.createElement("span", {
    className: "gs-opt-tag"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
    className: "gs-opt-label"
  }, opt.label), opt.sub && /*#__PURE__*/React.createElement("div", {
    className: "gs-opt-sub"
  }, opt.sub))))), /*#__PURE__*/React.createElement("div", {
    className: "gs-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "gs-back",
    onClick: onBack,
    disabled: index === 0
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    size: 14
  }), " Back"), /*#__PURE__*/React.createElement("span", {
    className: "gs-step-meta"
  }, "Tap an option to continue")));
}
function RevealStep({
  answers,
  mode,
  setMode,
  onBack,
  onSubmitted
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gs-step-num"
  }, "You're a fit"), /*#__PURE__*/React.createElement("div", {
    className: "gs-step-meta"
  }, "Last step")), /*#__PURE__*/React.createElement("div", {
    className: "gs-fit-banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "check"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 22,
    stroke: 3
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Young Knights is the right fit."), /*#__PURE__*/React.createElement("p", null, "Drop your details and we'll call within 24 hours to book in a free trial class."))), /*#__PURE__*/React.createElement("h2", {
    className: "gs-q",
    style: {
      fontSize: 22,
      margin: '0 0 8px'
    }
  }, "Tell us about your teen"), /*#__PURE__*/React.createElement("p", {
    className: "gs-sub",
    style: {
      marginBottom: 16
    }
  }, "Our team will call within 24 hours to book your teen's free trial class."), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid hsl(var(--yk-line))',
      borderRadius: 14,
      overflow: 'hidden',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "https://api.leadconnectorhq.com/widget/form/ATwKxumBh8CdpThEnu9I",
    style: {
      width: '100%',
      border: 'none',
      display: 'block',
      minHeight: 620
    },
    id: "gs-ghl-form-YK",
    title: "Book a free trial class",
    onLoad: () => {
      try {
        onSubmitted && window.__gsFormLoaded;
      } catch (e) {}
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "gs-foot-note",
    style: {
      marginBottom: 16
    }
  }, "Prefer a quick call? ", /*#__PURE__*/React.createElement("a", {
    href: "tel:0452519877",
    style: {
      color: 'hsl(var(--yk-red))',
      fontWeight: 600
    }
  }, "0452 519 877")), /*#__PURE__*/React.createElement("div", {
    className: "gs-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "gs-back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    size: 14
  }), " Back")));
}
function DetailsMode() {
  return null;
} // removed — single-form flow now
function BookMode() {
  return null;
} // removed — single-form flow now

function ConfirmStep({
  answers
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "gs-confirm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big-check"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 44,
    stroke: 3
  })), /*#__PURE__*/React.createElement("h2", null, "Thanks \u2014 we've got your details."), /*#__PURE__*/React.createElement("p", null, "Our team will call within 24 hours to book your teen's free trial class."), /*#__PURE__*/React.createElement("div", {
    className: "next-steps"
  }, /*#__PURE__*/React.createElement("h4", null, "What happens next"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      paddingLeft: 20
    }
  }, /*#__PURE__*/React.createElement("li", null, "We call to chat \u2014 10 minute conversation, no pressure."), /*#__PURE__*/React.createElement("li", null, "Book a trial class that fits your family's schedule."), /*#__PURE__*/React.createElement("li", null, "Come in, meet the team, try a session. Parents welcome to watch."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 10,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    className: "btn btn-outline"
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    size: 16
  }), " Back to site"), /*#__PURE__*/React.createElement("a", {
    href: "tel:0452519877",
    className: "btn btn-dark"
  }, /*#__PURE__*/React.createElement(Phone, {
    size: 16
  }), " Call us now")));
}
Object.assign(window, {
  GetStarted
});
})();

// --- components/GetStartedApp.jsx ---
;(function () {
// Get Started page — hydrates the pre-rendered funnel (or mounts fresh if absent).
// During build-time pre-rendering there is no document, so this is skipped.

if (typeof document !== 'undefined') {
  const rootEl = document.getElementById('root');
  if (rootEl.hasChildNodes()) {
    ReactDOM.hydrateRoot(rootEl, /*#__PURE__*/React.createElement(GetStarted, null));
  } else {
    ReactDOM.createRoot(rootEl).render(/*#__PURE__*/React.createElement(GetStarted, null));
  }
}
})();
