// Homepage app shell — composes all sections and mounts to #root.

const TWEAKS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroHeadline": "Give your teen an unfair advantage.",
  "accent": "gold",
  "showStickyCta": true
}/*EDITMODE-END*/;

function App() {
  const [contactOpen, setContactOpen] = React.useState(false);
  const [tweaksOn, setTweaksOn] = React.useState(false);
  const [tweaks, setTweaks] = React.useState(TWEAKS_DEFAULTS);

  // Main booking flow — routes to the Get Started funnel
  // which qualifies leads with 4 questions before revealing the GHL calendar.
  const openTrial = () => { window.location.href = 'get-started.html'; };

  // Tweaks protocol
  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') setTweaksOn(true);
      if (e.data.type === '__deactivate_edit_mode') setTweaksOn(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const setTweak = (k, v) => {
    const edits = { [k]: v };
    setTweaks(t => ({ ...t, ...edits }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
  };

  // Reveal on scroll
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('in'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div data-accent={tweaks.accent}>
      <UrgencyBar onCta={openTrial} />
      <Header onStartTrial={openTrial} onContact={() => setContactOpen(true)} />
      <Hero onStartTrial={openTrial} onContact={() => setContactOpen(true)} />
      <ProblemSection />
      <ProgramSection onStartTrial={openTrial} />
      <HowItWorksDetailed onStartTrial={openTrial} onContact={() => setContactOpen(true)} />
      <CoachSection onContact={() => setContactOpen(true)} />
      <ResultsSection />
      <ComparisonSection onStartTrial={openTrial} />
      <FAQSection onStartTrial={openTrial} />
      <ScheduleSection onStartTrial={openTrial} />
      <SportsMarquee />
      <ReviewsSection />
      <ContactSection />
      <Footer />

      <ContactCoachModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {tweaks.showStickyCta && (
        <div className="sticky-cta">
          <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', boxShadow: '0 10px 30px -6px rgba(0,0,0,.3)' }}
            onClick={openTrial}>
            Book Free Session <ArrowRight size={18} className="arrow"/>
          </button>
        </div>
      )}

      {tweaksOn && (
        <div className="tweaks">
          <h4>Tweaks</h4>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'hsl(var(--yk-ink) / .5)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '.1em' }}>Accent color</div>
            <div className="tweak-row">
              {['gold', 'blue', 'flame', 'green'].map(c => (
                <button key={c} className={'tweak-chip' + (tweaks.accent === c ? ' on' : '')}
                  onClick={() => setTweak('accent', c)}>{c}</button>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'hsl(var(--yk-ink) / .5)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '.1em' }}>Sticky mobile CTA</div>
            <div className="tweak-row">
              <button className={'tweak-chip' + (tweaks.showStickyCta ? ' on' : '')}
                onClick={() => setTweak('showStickyCta', true)}>On</button>
              <button className={'tweak-chip' + (!tweaks.showStickyCta ? ' on' : '')}
                onClick={() => setTweak('showStickyCta', false)}>Off</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { App });

// In the browser, hydrate the pre-rendered HTML (or mount fresh if absent).
// During build-time pre-rendering there is no document, so this is skipped.
if (typeof document !== 'undefined') {
  const rootEl = document.getElementById('root');
  if (rootEl.hasChildNodes()) {
    ReactDOM.hydrateRoot(rootEl, <App/>);
  } else {
    ReactDOM.createRoot(rootEl).render(<App/>);
  }
}
