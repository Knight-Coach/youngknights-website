// Header + Hero

function Header({ onStartTrial, onContact }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: scrolled ? 'hsl(224 71% 4% / .85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid hsl(0 0% 100% / .08)' : '1px solid transparent',
      transition: 'all .25s',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 24px', color: 'white',
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'white' }}>
          <img src="assets/yk-logo.svg" alt="Young Knights" style={{ height: 64, display: 'block' }}/>
          <span className="hdr-powered" style={{
            display: 'inline-flex', flexDirection: 'column',
            paddingLeft: 12, borderLeft: '1px solid hsl(0 0% 100% / .18)',
            lineHeight: 1.15,
          }}>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'hsl(0 0% 100% / .55)' }}>
              Powered by
            </span>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'white', letterSpacing: '-0.005em', marginTop: 2 }}>
              Knight Fitness · Lawnton
            </span>
          </span>
        </a>
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-desktop">
          <a href="#program" className="nav-link">The Program</a>
          <a href="#how" className="nav-link">How It Works</a>
          <a href="#coach" className="nav-link">Meet Zac</a>
          <a href="#schedule" className="nav-link">Schedule</a>
          <a href="#contact" className="nav-link">Contact</a>
          <button className="btn btn-primary btn-sm" onClick={onStartTrial}>
            Get Started <ArrowRight size={16} className="arrow" />
          </button>
        </nav>
        <button className="nav-mobile-toggle" onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
      {open && (
        <div className="nav-mobile-panel" style={{
          background: 'hsl(224 71% 4%)', borderTop: '1px solid hsl(0 0% 100% / .08)',
          padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 4
        }}>
          {['The Program|#program', 'How It Works|#how', 'Meet Zac|#coach', 'Schedule|#schedule', 'Contact|#contact'].map(s => {
            const [label, href] = s.split('|');
            return <a key={href} href={href} onClick={() => setOpen(false)} className="nav-link"
              style={{ padding: '14px 0', borderBottom: '1px solid hsl(0 0% 100% / .06)', fontSize: 16 }}>{label}</a>;
          })}
          <button className="btn btn-primary" onClick={() => { onStartTrial(); setOpen(false); }} style={{ marginTop: 16, justifyContent: 'center' }}>
            Get Started <ArrowRight size={18} className="arrow"/>
          </button>
        </div>
      )}
      <style>{`
        .nav-link { color: hsl(0 0% 100% / .75); text-decoration: none; font-size: 14px; font-weight: 500; transition: color .15s; }
        .nav-link:hover { color: white; }
        .nav-mobile-toggle { display: none; }
        @media (max-width: 960px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
        @media (max-width: 640px) {
          .hdr-powered { display: none !important; }
        }
      `}</style>
    </header>
  );
}

function Hero({ onStartTrial, onContact }) {
  return (
    <section className="hero">
      <div className="hero-bg"/>
      <div className="hero-grid"/>
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 40, paddingBottom: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }} className="hero-grid-layout">
          <div>
            <span className="kicker-line kicker-dark" style={{ marginBottom: 28, display: 'inline-flex' }}>
              North Brisbane · Ages 13–17
            </span>
            <h1 className="h-display h-display-xl" style={{
              fontSize: 'clamp(56px, 7.5vw, 104px)', margin: '28px 0 0', color: 'white',
            }}>
              Give your teen an <span className="mark">unfair advantage</span>.
            </h1>
            <p style={{
              marginTop: 28, fontSize: 19, lineHeight: 1.55,
              color: 'hsl(0 0% 100% / .75)', maxWidth: 540,
            }}>
              A <b style={{color:'white'}}>12-week strength &amp; conditioning program</b> built for teens 13–17 — real coaching, real results, and a team that has their back.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={onStartTrial}>
                Book Free Session <ArrowRight size={18} className="arrow"/>
              </button>
            </div>
            <div style={{ marginTop: 44, display: 'flex', gap: 40, flexWrap: 'wrap' }}>
              <HeroStat value="12" label="Week program" />
              <HeroStat value="500+" label="Teens trained" />
              <HeroStat value="5.0★" label="Parent rating" />
            </div>
          </div>
          <HeroVisual onStartTrial={onStartTrial} />
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .hero-grid-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function HeroStat({ value, label }) {
  return (
    <div>
      <div className="display" style={{ fontSize: 36, fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1 }}>{value}</div>
      <div className="eyebrow" style={{ color: 'hsl(0 0% 100% / .55)', marginTop: 6 }}>{label}</div>
    </div>
  );
}

function HeroVisual({ onStartTrial }) {
  // Video player block — poster frame from brand photo, tap to play.
  // Drop a real video at assets/yk-hero.mp4 and it auto-wires up.
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [hasVideo, setHasVideo] = React.useState(false);

  React.useEffect(() => {
    // Probe: does the video file exist?
    fetch('assets/yk-hero.mp4', { method: 'HEAD' })
      .then(r => setHasVideo(r.ok))
      .catch(() => setHasVideo(false));
  }, []);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <div style={{
      position: 'relative',
      borderRadius: 20,
      overflow: 'hidden',
      aspectRatio: '4 / 5',
      background: 'hsl(220 30% 8%)',
      boxShadow: '0 40px 80px -20px rgba(0,0,0,.6), 0 0 0 1px hsl(0 0% 100% / .06)',
    }}>
      {hasVideo ? (
        <video
          ref={videoRef}
          src="assets/yk-hero.mp4"
          poster="assets/yk-hero-poster.jpg"
          playsInline
          controls={playing}
          preload="metadata"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onEnded={() => setPlaying(false)}
        />
      ) : (
        <img
          src="assets/yk-hero-poster.jpg"
          alt="Young Knights training session"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}

      {/* Play overlay — hidden once playing */}
      {!playing && (
        <>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, hsl(224 71% 4% / .15) 0%, hsl(224 71% 4% / .55) 100%)',
            pointerEvents: 'none',
          }}/>
          <button
            onClick={hasVideo ? play : onStartTrial}
            aria-label={hasVideo ? 'Play video' : 'Book free session'}
            style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: 92, height: 92, borderRadius: 999,
              background: 'hsl(var(--yk-red))',
              color: 'white',
              border: 'none', cursor: 'pointer',
              display: 'grid', placeItems: 'center',
              boxShadow: '0 20px 50px -10px rgba(0,0,0,.6), 0 0 0 8px hsl(var(--yk-red) / .25)',
              transition: 'transform .2s, box-shadow .2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.06)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'; }}
          >
            <Play size={34} stroke={0} style={{ fill: 'currentColor', marginLeft: 5 }}/>
          </button>
          <div style={{
            position: 'absolute', left: 20, bottom: 20, right: 20,
            display: 'flex', alignItems: 'center', gap: 12, color: 'white',
          }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={14} style={{ color: 'hsl(var(--yk-gold))', fill: 'hsl(var(--yk-gold))' }}/>)}
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'hsl(0 0% 100% / .85)' }}>
              5.0 parent rating · {hasVideo ? 'Watch the 60-second tour' : 'Watch our coaches in action'}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

Object.assign(window, { Header, Hero });
