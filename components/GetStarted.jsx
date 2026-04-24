// Get Started — 4-step pre-qualifying funnel
// Step 1-4: qualifying questions
// Step 5: reveal — choose (Book call / Send details)
// Step 6: confirmation

const QUESTIONS = [
  {
    id: 'age',
    q: "How old is your athlete?",
    sub: "Young Knights is built for ages 13–17. Sorry — we don't currently run a program for under 12s.",
    options: [
      { val: '12-14',  label: '12–14',     sub: "Perfect age to build athletic foundations." },
      { val: '15-17',  label: '15–17',     sub: "Prime window for strength and sport performance." },
      { val: '18+',    label: '18 or older', sub: "We can point you toward Knight Fitness adult programs." },
    ],
  },
  {
    id: 'goal',
    q: "What's the main goal?",
    sub: "Helps us know what to focus on in your teen's first session.",
    options: [
      { val: 'sport',      label: 'Sport performance',         sub: "Get stronger, faster, more explosive for their sport." },
      { val: 'strength',   label: 'Strength & confidence',     sub: "Build a body and mindset they feel good in." },
      { val: 'fitness',    label: 'Fitness & body composition', sub: "Lean out, build athletic shape, feel healthier." },
      { val: 'unsure',     label: 'Not sure yet',              sub: "That's totally fine — we'll help you figure it out." },
    ],
  },
  {
    id: 'experience',
    q: "Have they trained before?",
    sub: "We coach every level — this just tells us where to start.",
    options: [
      { val: 'none',     label: 'No, total beginner',         sub: "Most of our Young Knights start here." },
      { val: 'some',     label: 'A little — school or home',   sub: "We'll clean up technique and build from there." },
      { val: 'regular',  label: 'Yes, they train regularly',  sub: "Expect to move up a level under coach-led programming." },
    ],
  },
  {
    id: 'timing',
    q: "How soon are you looking to start?",
    sub: "We're limited to small groups — let us know your timeline.",
    options: [
      { val: 'this-week',   label: 'This week',               sub: "Let's get you in for a trial ASAP." },
      { val: 'next-2wks',   label: 'Next 1–2 weeks',           sub: "Plenty of time — we'll hold a spot." },
      { val: 'this-month',  label: 'Sometime this month',     sub: "No rush. Come see the studio first if you like." },
      { val: 'exploring',   label: 'Just exploring',          sub: "Happy to send info and answer questions." },
    ],
  },
];

// GHL form handles submission; confirmation is shown inside the form iframe.

function GetStarted() {
  const [step, setStep] = React.useState(0); // 0..3 = questions, 4 = reveal, 5 = confirm
  const [answers, setAnswers] = React.useState({});
  const [revealMode, setRevealMode] = React.useState('book'); // 'book' | 'details'

  React.useEffect(() => { window.scrollTo(0, 0); }, [step]);

  const totalSteps = QUESTIONS.length + 1; // 4 questions + 1 reveal
  const isQuestion = step < QUESTIONS.length;
  const isReveal = step === QUESTIONS.length;
  const isConfirm = step === QUESTIONS.length + 1;

  const pick = (qid, val) => {
    setAnswers(a => ({ ...a, [qid]: val }));
    // auto-advance
    setTimeout(() => setStep(s => s + 1), 180);
  };

  return (
    <div className="gs-shell">
      <div className="gs-topbar">
        <a href="index.html" style={{ display: 'flex', alignItems: 'center', gap: 0, textDecoration: 'none' }}>
          <img src="assets/yk-logo.svg" alt="Young Knights" style={{ height: 52, display: 'block' }}/>
        </a>
        <a href="index.html" className="back">
          <ArrowLeft size={14}/> Back to site
        </a>
      </div>

      <main className="gs-main">
        <div style={{ width: '100%', maxWidth: 720 }}>
          <div className="gs-card">
            {!isConfirm && (
              <div className="gs-progress">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <span key={i} className={i <= step ? 'done' : ''}/>
                ))}
              </div>
            )}

            <div className="gs-body">
              {isQuestion && (
                <QuestionStep
                  index={step}
                  total={QUESTIONS.length}
                  question={QUESTIONS[step]}
                  value={answers[QUESTIONS[step].id]}
                  onPick={(val) => pick(QUESTIONS[step].id, val)}
                  onBack={() => setStep(s => Math.max(0, s - 1))}
                />
              )}
              {isReveal && (
                <RevealStep
                  answers={answers}
                  mode={revealMode}
                  setMode={setRevealMode}
                  onBack={() => setStep(s => s - 1)}
                  onSubmitted={() => setStep(s => s + 1)}
                />
              )}
              {isConfirm && (
                <ConfirmStep answers={answers}/>
              )}
            </div>
          </div>

          {!isConfirm && (
            <div className="gs-testimonial">
              <p style={{ margin: '0 0 4px' }}>
                "Noah always wants to go and never complains. He has a lot more confidence in himself."
              </p>
              <strong>— Kirsty, parent of Noah</strong>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function QuestionStep({ index, total, question, value, onPick, onBack }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div className="gs-step-num">Step {index + 1} of {total}</div>
        <div className="gs-step-meta">30 seconds</div>
      </div>
      <h1 className="gs-q">{question.q}</h1>
      <p className="gs-sub">{question.sub}</p>
      <div className="gs-opts">
        {question.options.map(opt => (
          <button
            key={opt.val}
            className={`gs-opt ${value === opt.val ? 'selected' : ''}`}
            onClick={() => onPick(opt.val)}
          >
            <span className="gs-opt-tag"/>
            <span>
              <div className="gs-opt-label">{opt.label}</div>
              {opt.sub && <div className="gs-opt-sub">{opt.sub}</div>}
            </span>
          </button>
        ))}
      </div>
      <div className="gs-nav">
        <button className="gs-back" onClick={onBack} disabled={index === 0}>
          <ArrowLeft size={14}/> Back
        </button>
        <span className="gs-step-meta">Tap an option to continue</span>
      </div>
    </>
  );
}

function RevealStep({ answers, mode, setMode, onBack, onSubmitted }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div className="gs-step-num">You're a fit</div>
        <div className="gs-step-meta">Last step</div>
      </div>

      <div className="gs-fit-banner">
        <div className="check"><Check size={22} stroke={3}/></div>
        <div>
          <h3>Young Knights is the right fit.</h3>
          <p>Drop your details and we'll call within 24 hours to book in a free trial class.</p>
        </div>
      </div>

      <h2 className="gs-q" style={{ fontSize: 22, margin: '0 0 8px' }}>Tell us about your teen</h2>
      <p className="gs-sub" style={{ marginBottom: 16 }}>
        Our team will call within 24 hours to book your teen's free trial class.
      </p>

      <div style={{ border: '1px solid hsl(var(--yk-line))', borderRadius: 14, overflow: 'hidden', marginBottom: 16 }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/ATwKxumBh8CdpThEnu9I"
          style={{ width: '100%', border: 'none', display: 'block', minHeight: 620 }}
          id="gs-ghl-form-YK"
          title="Book a free trial class"
          onLoad={() => { try { onSubmitted && window.__gsFormLoaded; } catch(e){} }}
        />
      </div>

      <p className="gs-foot-note" style={{ marginBottom: 16 }}>
        Prefer a quick call? <a href="tel:0452519877" style={{ color: 'hsl(var(--yk-red))', fontWeight: 600 }}>0452 519 877</a>
      </p>

      <div className="gs-nav">
        <button className="gs-back" onClick={onBack}><ArrowLeft size={14}/> Back</button>
      </div>
    </>
  );
}

function DetailsMode() { return null; } // removed — single-form flow now
function BookMode() { return null; } // removed — single-form flow now

function ConfirmStep({ answers }) {
  return (
    <div className="gs-confirm">
      <div className="big-check"><Check size={44} stroke={3}/></div>
      <h2>Thanks — we've got your details.</h2>
      <p>Our team will call within 24 hours to book your teen's free trial class.</p>

      <div className="next-steps">
        <h4>What happens next</h4>
        <ol style={{ margin: 0, paddingLeft: 20 }}>
          <li>We call to chat — 10 minute conversation, no pressure.</li>
          <li>Book a trial class that fits your family's schedule.</li>
          <li>Come in, meet the team, try a session. Parents welcome to watch.</li>
        </ol>
      </div>

      <div style={{ marginTop: 28, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="index.html" className="btn btn-outline">
          <ArrowLeft size={16}/> Back to site
        </a>
        <a href="tel:0452519877" className="btn btn-dark">
          <Phone size={16}/> Call us now
        </a>
      </div>
    </div>
  );
}

Object.assign(window, { GetStarted });
