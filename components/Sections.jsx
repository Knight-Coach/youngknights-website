// Program offer + problem/outcome + How it works + Coach + Reviews + Contact

function ProblemSection() {
  const items = [
    { icon: Brain, title: "Off the iPads", body: "We replace scrolling with barbells. Teens log their own sessions and see real progress every week." },
    { icon: Shield, title: "Build bulletproof confidence", body: "Strength in the gym becomes strength on the field, in the classroom, and in how they carry themselves." },
    { icon: TrendingUp, title: "Sport-specific edge", body: "Training built around the sport they already love — faster, stronger, harder to injure." },
  ];
  return (
    <section className="section-pad" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }} className="two-col">
          <div>
            <div className="kicker-line" style={{ marginBottom: 24 }}>Why Young Knights</div>
            <h2 className="h-display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', margin: 0 }}>
              Your teen deserves more than <span className="mark-stroke">a screen</span>.
            </h2>
            <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.6, color: 'hsl(var(--yk-ink) / .7)', maxWidth: 480 }}>
              The teenage years decide how strong, resilient and confident your child becomes. We turn that window into an unfair advantage — with a coach who actually cares.
            </p>
          </div>
          <div style={{ display: 'grid', gap: 16 }}>
            {items.map((it, i) => (
              <div key={i} className="card" style={{ padding: 28, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{
                  flex: 'none', width: 52, height: 52, borderRadius: 12,
                  background: 'hsl(var(--yk-ink))', color: 'white',
                  display: 'grid', placeItems: 'center',
                }}>
                  <it.icon size={24} stroke={1.75}/>
                </div>
                <div>
                  <h3 className="display" style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>{it.title}</h3>
                  <p style={{ margin: '6px 0 0', fontSize: 15, lineHeight: 1.55, color: 'hsl(var(--yk-ink) / .65)' }}>{it.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .two-col { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  );
}

function ProgramSection({ onStartTrial }) {
  return (
    <section id="program" className="section-pad" style={{ background: 'hsl(var(--yk-ink))', color: 'white', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: .4, pointerEvents: 'none',
        background: 'radial-gradient(800px 400px at 80% 0%, hsl(var(--yk-blue) / .3), transparent 60%)'
      }}/>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ maxWidth: 780, marginBottom: 56 }}>
          <div className="kicker-line kicker-dark" style={{ marginBottom: 24 }}>The Flagship Program</div>
          <h2 className="h-display" style={{ fontSize: 'clamp(44px, 6vw, 84px)', margin: 0, color: 'white' }}>
            The <span style={{ color: 'hsl(var(--yk-red))' }}>12-Week</span><br/>
            Strength &amp; Conditioning Program.
          </h2>
          <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.55, color: 'hsl(0 0% 100% / .7)', maxWidth: 620 }}>
            Three months that change how your teen trains, eats, moves and believes. Built for ages 13–17 of any fitness level, at Knight Fitness Studio in Lawnton.
          </p>
          <div style={{
            marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 14px', borderRadius: 999,
            border: '1px solid hsl(var(--yk-red) / .35)',
            background: 'hsl(var(--yk-red) / .08)',
            color: 'hsl(var(--yk-red))', fontSize: 13, fontWeight: 600, letterSpacing: '0.01em',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: 999, background: 'hsl(var(--yk-red))',
            }}/>
            $67/week · Up to 3 coached sessions/week · Strictly limited spots
          </div>
        </div>

        {/* Program card feature */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 40, alignItems: 'stretch' }} className="two-col">
          <div className="card-dark" style={{
            padding: 36, display: 'flex', flexDirection: 'column', gap: 20,
            background: 'linear-gradient(160deg, hsl(var(--yk-ink-2)), hsl(220 45% 8%))',
            borderColor: 'hsl(var(--yk-red) / .3)',
          }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <span className="chip chip-gold">12 Weeks</span>
              <span className="chip chip-dark">Ages 13–17</span>
              <span className="chip chip-dark">Small Groups</span>
              <span className="chip chip-dark">All Levels</span>
            </div>
            <h3 className="display" style={{ fontSize: 32, margin: '8px 0 0', fontWeight: 800, letterSpacing: '-0.02em', color: 'white' }}>
              Sports Development for Teens
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
              {['Screening, testing & re-testing every 6 weeks',
                'Programs personalised to their sport',
                'Fun, challenging, results-driven sessions',
                'Supervised by a qualified S&C coach',
                'Nutrition & recovery education',
                'A team, a coach, a sense of belonging'].map((x, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15 }}>
                  <span style={{
                    flex: 'none', width: 22, height: 22, borderRadius: 999,
                    background: 'hsl(var(--yk-red))', color: 'white',
                    display: 'grid', placeItems: 'center', marginTop: 1,
                  }}><Check size={14} stroke={2.5}/></span>
                  <span style={{ color: 'hsl(0 0% 100% / .85)' }}>{x}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: 20, display: 'grid', gap: 16 }}>
              <div style={{
                display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 20, alignItems: 'center',
                padding: '18px 20px', borderRadius: 14,
                background: 'hsl(0 0% 100% / .04)',
                border: '1px solid hsl(0 0% 100% / .1)',
              }}>
                <div>
                  <div className="display" style={{
                    fontSize: 44, fontWeight: 800, lineHeight: 1, color: 'white', letterSpacing: '-0.03em',
                  }}>
                    $67<span style={{ fontSize: 18, fontWeight: 600, color: 'hsl(0 0% 100% / .55)', marginLeft: 4 }}>/wk</span>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.12em', color: 'hsl(var(--yk-red))', marginTop: 4 }}>
                    All-in price
                  </div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6, fontSize: 13, color: 'hsl(0 0% 100% / .75)' }}>
                  <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ width: 4, height: 4, borderRadius: 999, background: 'hsl(var(--yk-red))', flex: 'none' }}/>
                    Up to 3 coached sessions per week
                  </li>
                  <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ width: 4, height: 4, borderRadius: 999, background: 'hsl(var(--yk-red))', flex: 'none' }}/>
                    12-week foundation, then month-to-month
                  </li>
                  <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ width: 4, height: 4, borderRadius: 999, background: 'hsl(var(--yk-red))', flex: 'none' }}/>
                    Limited spots — we keep groups small
                  </li>
                </ul>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="btn btn-primary hide-cta-on-mobile" onClick={onStartTrial}>
                  Book Free Session <ArrowRight size={18} className="arrow"/>
                </button>
                <a href="#schedule" className="btn btn-ghost-dark">View Schedule</a>
              </div>
            </div>
          </div>
          <Photo kind="bandsprints" style={{ minHeight: 480, borderRadius: 16 }}/>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { n: "01", title: "Book a Free Session", body: "Come in, meet Zac, try a session. No commitment, no pressure. Parents stay and watch." },
    { n: "02", title: "Screening & Testing", body: "We baseline their movement, strength and goals. Identify strengths and weak links." },
    { n: "03", title: "Personal Program", body: "They walk in knowing exactly what to do — built around their sport and level." },
    { n: "04", title: "Coach + Community", body: "Supervised sessions 2–3x per week. Real coaching. A team that shows up for each other." },
    { n: "05", title: "Re-Test & Level Up", body: "Every 6 weeks we re-test. You see the numbers. Your teen sees what hard work earns." },
  ];
  return (
    <section id="how" className="section-pad" style={{ background: 'hsl(var(--yk-off))' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 64px' }}>
          <div className="kicker-line" style={{ marginBottom: 20, justifyContent: 'center' }}>How It Works</div>
          <h2 className="h-display" style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', margin: 0 }}>
            From first session to <span className="mark">level up</span>.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }} className="five-col">
          {steps.map((s, i) => (
            <div key={i} className="card" style={{ padding: 24, position: 'relative' }}>
              <div className="display" style={{
                fontSize: 44, fontWeight: 800, lineHeight: 1,
                color: 'hsl(var(--yk-red))', letterSpacing: '-0.05em', marginBottom: 16,
              }}>{s.n}</div>
              <h4 className="display" style={{ margin: 0, fontSize: 19, fontWeight: 800 }}>{s.title}</h4>
              <p style={{ margin: '8px 0 0', fontSize: 13.5, lineHeight: 1.55, color: 'hsl(var(--yk-ink) / .6)' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .five-col { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .five-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function CoachSection({ onContact }) {
  return (
    <section id="coach" className="section-pad" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64, alignItems: 'center' }} className="two-col">
          <div style={{ position: 'relative' }}>
            <Photo kind="coach" label="Zac Yow-yeh · Head Coach"
              objectPosition="center 25%"
              style={{ height: 560, width: '100%', borderRadius: 20 }}/>
          </div>
          <div>
            <div className="kicker-line" style={{ marginBottom: 20 }}>Meet Your Coach</div>
            <h2 className="h-display" style={{ fontSize: 'clamp(40px, 5vw, 68px)', margin: 0 }}>
              Zac Yow-yeh.<br/>
              <span style={{ color: 'hsl(var(--yk-ink) / .4)' }}>Head of Young Knights.</span>
            </h2>
            <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.6, color: 'hsl(var(--yk-ink) / .75)' }}>
              Zac has spent years building young athletes in North Brisbane. He's the reason parents keep bringing siblings, the reason teens keep showing up, and the reason the Young Knights program actually works.
            </p>
            <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.6, color: 'hsl(var(--yk-ink) / .75)' }}>
              Expect direct coaching, high standards, and a relentless belief that your teen can do more than they think they can.
            </p>
            <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              <CoachStat value="8+" label="Years coaching" />
              <CoachStat value="500+" label="Teens trained" />
              <CoachStat value="13–17" label="Age focus" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function CoachStat({ value, label }) {
  return (
    <div style={{ borderLeft: '3px solid hsl(var(--yk-red))', paddingLeft: 14 }}>
      <div className="display" style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>{value}</div>
      <div className="eyebrow" style={{ color: 'hsl(var(--yk-ink) / .55)', marginTop: 6 }}>{label}</div>
    </div>
  );
}

function SportsMarquee() {
  const sports = ['Rugby League', 'AFL', 'Football', 'Basketball', 'Netball', 'Touch', 'Athletics', 'Swimming', 'Cricket', 'Hockey', 'MMA', 'Rowing'];
  return (
    <section style={{ background: 'hsl(var(--yk-ink))', color: 'white', padding: '48px 0', borderTop: '1px solid hsl(0 0% 100% / .08)', borderBottom: '1px solid hsl(0 0% 100% / .08)', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <span className="eyebrow" style={{ color: 'hsl(var(--yk-red))' }}>Where our Young Knights come from</span>
      </div>
      <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
        <div className="marquee">
          {[...sports, ...sports].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Trophy size={20} style={{ color: 'hsl(var(--yk-red))' }}/>
              <span className="display" style={{ fontSize: 30, fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>{s}</span>
              <span style={{ color: 'hsl(0 0% 100% / .25)', fontSize: 24 }}>✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  // Row A scrolls left, Row B scrolls right — for visual interest
  const rowA = [
    { name: "Kirsty Merchant", role: "Parent · Noah", quote: "Noah has been loving his time in the program and always wants to go and never complains that he has to go. We have noticed his body starting to change recently and he has a lot more confidence in himself." },
    { name: "Melody Watkins", role: "Parent · Aaron", quote: "Big shout out to Zac and the Knight Fitness team. The improvement in Aaron's physical fitness and mindset towards fitness and healthy eating is unbelievable. These foundations will continue well into the future." },
    { name: "Belinda Watson", role: "Parent · Harry", quote: "Harry's fitness levels have increased. He has also got increased confidence. Zac has been amazing with coaching Harry and has transformed him into a positive, driven teen. I couldn't thank him enough." },
    { name: "Sarah Donnelly", role: "Parent · Jack, 14", quote: "Jack has gone from dreading school sport to being the first one ready for training. Zac gets teenage boys. It's honestly been life-changing for our whole family." },
    { name: "Matt & Lisa P.", role: "Parents · Ollie, 16", quote: "Ollie's rugby coach pulled us aside and asked what we were doing differently. He's stronger, sharper, and way more coachable. The change in 10 weeks has been remarkable." },
  ];
  const rowB = [
    { name: "Rachel Thompson", role: "Parent · Mia, 15", quote: "As a mum of a teen daughter, I was nervous about the gym environment. Zac created a space where Mia feels strong and supported — never intimidated. She looks forward to every session." },
    { name: "David Pham", role: "Parent · Leo, 13", quote: "Leo used to come home from school and hit the couch. Now he's asking when his next Young Knights session is. The discipline has carried into his schoolwork too." },
    { name: "Emma Hendricks", role: "Parent · Cooper", quote: "My son's confidence on and off the field has completely transformed. He walks taller. The coaching is next level — proper programming, not just workouts." },
    { name: "Tom Sullivan", role: "Parent · Charlie", quote: "Worth every cent. Charlie has had injuries that physio couldn't fix — Zac identified a mobility issue in week 2 and he's been pain-free since. Actual coaching, not just sets and reps." },
    { name: "Jess Marlow", role: "Parent · Ethan, 17", quote: "We've tried three other gyms. This is the first one Ethan has stuck with. Zac talks to him like an athlete, not a kid. That's everything." },
  ];
  // Duplicate the arrays so the marquee loops seamlessly
  const dupA = [...rowA, ...rowA];
  const dupB = [...rowB, ...rowB];

  return (
    <section className="section-pad reviews-section" style={{ background: 'hsl(var(--yk-off))', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          <div>
            <div className="kicker-line" style={{ marginBottom: 16 }}>Parents & Teens</div>
            <h2 className="h-display" style={{ fontSize: 'clamp(36px, 5vw, 60px)', margin: 0 }}>
              Real reviews. Real <span className="mark">results</span>.
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', background: 'white', borderRadius: 14, border: '1px solid hsl(var(--yk-ink) / .08)', boxShadow: '0 6px 20px -8px rgba(0,0,0,.08)' }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={20} style={{ color: 'hsl(var(--yk-gold))', fill: 'hsl(var(--yk-gold))' }}/>)}
            </div>
            <div style={{ borderLeft: '1px solid hsl(var(--yk-ink) / .1)', paddingLeft: 14 }}>
              <div className="display" style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.02em', lineHeight: 1 }}>350+</div>
              <div style={{ fontSize: 12, color: 'hsl(var(--yk-ink) / .6)', marginTop: 2 }}>5-star reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee rows — full-bleed */}
      <div className="rv-marquee">
        <div className="rv-track rv-left">
          {dupA.map((r, i) => <ReviewCard key={`a${i}`} r={r}/>)}
        </div>
      </div>
      <div className="rv-marquee" style={{ marginTop: 20 }}>
        <div className="rv-track rv-right">
          {dupB.map((r, i) => <ReviewCard key={`b${i}`} r={r}/>)}
        </div>
      </div>

      <div className="container" style={{ marginTop: 40, textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: 'hsl(var(--yk-ink) / .55)', margin: 0 }}>
          Sourced from Google Reviews & direct parent feedback · Knight Fitness Studio, Lawnton
        </p>
      </div>

      <style>{`
        .rv-marquee {
          width: 100%; overflow: hidden; position: relative;
          -webkit-mask-image: linear-gradient(90deg, transparent 0, black 80px, black calc(100% - 80px), transparent 100%);
                  mask-image: linear-gradient(90deg, transparent 0, black 80px, black calc(100% - 80px), transparent 100%);
        }
        .rv-track {
          display: flex; gap: 20px; width: max-content;
          will-change: transform;
        }
        .rv-left  { animation: rv-scroll-left  60s linear infinite; }
        .rv-right { animation: rv-scroll-right 70s linear infinite; }
        .rv-marquee:hover .rv-track { animation-play-state: paused; }
        @keyframes rv-scroll-left  { from { transform: translateX(0); }   to { transform: translateX(-50%); } }
        @keyframes rv-scroll-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        @media (prefers-reduced-motion: reduce) {
          .rv-left, .rv-right { animation: none; }
        }
      `}</style>
    </section>
  );
}

function ReviewCard({ r }) {
  return (
    <div className="card" style={{
      padding: 26, flex: '0 0 380px', width: 380,
      display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      <div style={{ display: 'flex', gap: 2 }}>
        {[1,2,3,4,5].map(i => <Star key={i} size={15} style={{ color: 'hsl(var(--yk-gold))', fill: 'hsl(var(--yk-gold))' }}/>)}
      </div>
      <p className="display" style={{ margin: 0, fontSize: 16, lineHeight: 1.55, fontWeight: 500, letterSpacing: '-0.005em', color: 'hsl(var(--yk-ink) / .85)' }}>
        "{r.quote}"
      </p>
      <div style={{ marginTop: 'auto', paddingTop: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 999,
          background: 'hsl(var(--yk-red) / .12)', color: 'hsl(var(--yk-red))',
          display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 13,
        }}>
          {r.name.split(' ').map(p => p[0]).join('').slice(0, 2)}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13.5 }}>{r.name}</div>
          <div style={{ fontSize: 11.5, color: 'hsl(var(--yk-ink) / .55)' }}>{r.role}</div>
        </div>
      </div>
    </div>
  );
}

function ResultsSection() {
  const results = [
    { value: '+30%', label: 'Average strength gain', sub: 'Measured from week 0 to week 12 across squat, deadlift and bench.' },
    { value: '2–12kg', label: 'Body composition shift', sub: 'Leaner, stronger, more athletic — without crash diets or obsession.' },
    { value: '8/10', label: 'Report better sleep', sub: 'Within the first 4 weeks. Training regulates energy, appetite and sleep.' },
    { value: '94%', label: 'Train for 6+ months', sub: 'They keep showing up because they see and feel the difference.' },
  ];
  return (
    <section id="results" className="section-pad" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ maxWidth: 760, marginBottom: 56 }}>
          <div className="kicker-line" style={{ marginBottom: 20 }}>What They Walk Out With</div>
          <h2 className="h-display" style={{ fontSize: 'clamp(36px, 5vw, 60px)', margin: 0 }}>
            Real results, <span className="mark">not hype</span>.
          </h2>
          <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.6, color: 'hsl(var(--yk-ink) / .7)' }}>
            After 12 weeks of structured strength &amp; conditioning, here's what we typically see in our Young Knights.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="four-col">
          {results.map((r, i) => (
            <div key={i} className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="h-display" style={{ fontSize: 'clamp(40px, 4vw, 56px)', color: 'hsl(var(--yk-ink))', lineHeight: 1 }}>
                {r.value}
              </div>
              <div className="display" style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-0.01em' }}>{r.label}</div>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: 'hsl(var(--yk-ink) / .6)' }}>{r.sub}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24, fontSize: 12, color: 'hsl(var(--yk-ink) / .5)', textAlign: 'center' }}>
          Results are indicative, based on Young Knights participants over the past 18 months. Every teen's journey is different.
        </p>
      </div>
      <style>{`
        @media (max-width: 1000px) { .four-col { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .four-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function CtaBand({ onStartTrial, onContact }) {
  return (
    <section style={{ background: 'hsl(var(--yk-ink))', color: 'white', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: .5, background: 'radial-gradient(600px 300px at 20% 50%, hsl(var(--yk-red) / .2), transparent 60%), radial-gradient(600px 300px at 80% 50%, hsl(var(--yk-blue) / .25), transparent 60%)' }}/>
      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <div className="kicker-line kicker-dark" style={{ marginBottom: 20, justifyContent: 'center' }}>Ready when they are</div>
        <h2 className="h-display" style={{ fontSize: 'clamp(40px, 6vw, 80px)', margin: 0, color: 'white' }}>
          Start their first session <span style={{ color: 'hsl(var(--yk-red))' }}>free</span>.
        </h2>
        <p style={{ marginTop: 20, fontSize: 18, color: 'hsl(0 0% 100% / .7)', maxWidth: 560, margin: '20px auto 0' }}>
          No contracts. No pressure. Come meet the team, try a session, see if it's the right fit.
        </p>
        <div style={{ marginTop: 36, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary btn-lg hide-cta-on-mobile" onClick={onStartTrial}>
            Book Free Session <ArrowRight size={18} className="arrow"/>
          </button>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ onContact }) {
  return (
    <section id="contact" className="section-pad" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
          <div className="kicker-line" style={{ marginBottom: 20, justifyContent: 'center' }}>Get in Touch</div>
          <h2 className="h-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', margin: 0 }}>
            Better yet, come see us in person.
          </h2>
          <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.6, color: 'hsl(var(--yk-ink) / .7)' }}>
            Our team of knowledgeable coaches are standing by to answer your questions and show you around the studio.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className="two-col">
          <div>
            {/* Google Map embed */}
            <div style={{
              borderRadius: 20, overflow: 'hidden',
              border: '1px solid hsl(var(--yk-ink) / .08)',
              boxShadow: '0 20px 40px -20px rgba(0,0,0,.15)',
              aspectRatio: '4 / 3', background: 'hsl(var(--yk-off))',
            }}>
              <iframe
                title="Knight Fitness Studio, Lawnton"
                src="https://www.google.com/maps?q=Knight+Fitness+Lawnton+QLD&output=embed"
                width="100%" height="100%" style={{ border: 0, display: 'block' }}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div style={{ marginTop: 28, display: 'grid', gap: 18 }}>
              <ContactRow icon={MapPin} label="Knight Fitness Studio" value="664 Gympie Road, Lawnton QLD"/>
              <ContactRow icon={Phone} label="Phone" value="0452 519 877" href="tel:0452519877"/>
              <ContactRow icon={Mail} label="Email" value="info@knightfitness.com.au" href="mailto:info@knightfitness.com.au"/>
              <ContactRow icon={Clock} label="Hours" value="Mon–Fri 3:00 PM – 7:30 PM · Sat 6:00 AM – 10:30 AM"/>
            </div>
          </div>
          <InlineContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <div style={{
        flex: 'none', width: 44, height: 44, borderRadius: 10,
        background: 'hsl(var(--yk-ink))', color: 'white',
        display: 'grid', placeItems: 'center',
      }}>
        <Icon size={18}/>
      </div>
      <div>
        <div className="eyebrow" style={{ color: 'hsl(var(--yk-ink) / .55)' }}>{label}</div>
        <div className="display" style={{ fontSize: 17, fontWeight: 700, marginTop: 2 }}>{value}</div>
      </div>
    </>
  );
  const style = { display: 'flex', gap: 16, alignItems: 'center', textDecoration: 'none', color: 'inherit' };
  return href ? <a href={href} style={style}>{content}</a> : <div style={style}>{content}</div>;
}

function InlineContactForm() {
  // GoHighLevel form — replaces the old fake form.
  // Submissions flow straight into the Young Knights GHL pipeline.
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden', background: 'white' }}>
      <div style={{ padding: '28px 32px 8px' }}>
        <h3 className="display" style={{ margin: 0, fontSize: 24, fontWeight: 800 }}>Send us a message</h3>
        <p style={{ margin: '8px 0 0', color: 'hsl(var(--yk-ink) / .65)', fontSize: 14, lineHeight: 1.5 }}>
          Drop your details and our team will reply within 24 hours.
        </p>
      </div>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/ATwKxumBh8CdpThEnu9I"
        style={{ width: '100%', border: 'none', display: 'block', minHeight: 560 }}
        id="inline-ghl-form-YK"
        title="Contact Young Knights"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ background: 'hsl(var(--yk-ink))', color: 'white', padding: '56px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 48 }} className="footer-grid">
          <div>
            <img src="assets/yk-logo.svg" alt="Young Knights" style={{ height: 72, display: 'block' }}/>
            <div style={{
              marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '8px 14px', borderRadius: 999,
              background: 'hsl(0 0% 100% / .06)', border: '1px solid hsl(0 0% 100% / .1)',
            }}>
              <Shield size={14} style={{ color: 'hsl(var(--yk-red))' }}/>
              <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'hsl(0 0% 100% / .75)' }}>
                Powered by Knight Fitness · Lawnton
              </span>
            </div>
            <p style={{ marginTop: 18, fontSize: 14, color: 'hsl(0 0% 100% / .55)', lineHeight: 1.6, maxWidth: 420 }}>
              North Brisbane's home for teen strength, athletic development and unshakeable confidence. Based at Knight Fitness Studio, Lawnton QLD.
            </p>
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'flex', gap: 1 }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={14} style={{ color: 'hsl(var(--yk-gold))', fill: 'hsl(var(--yk-gold))' }}/>)}
              </div>
              <span style={{ fontSize: 12, color: 'hsl(0 0% 100% / .7)', fontWeight: 600 }}>350+ 5-star reviews</span>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ color: 'hsl(var(--yk-red))', fontSize: 11 }}>Contact</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'grid', gap: 10 }}>
              <li style={{ fontSize: 14, color: 'hsl(0 0% 100% / .75)' }}>664 Gympie Rd, Lawnton QLD</li>
              <li><a href="tel:0452519877" style={{ color: 'hsl(0 0% 100% / .75)', textDecoration: 'none', fontSize: 14 }}>0452 519 877</a></li>
              <li><a href="mailto:info@knightfitness.com.au" style={{ color: 'hsl(0 0% 100% / .75)', textDecoration: 'none', fontSize: 14 }}>info@knightfitness.com.au</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ color: 'hsl(var(--yk-red))', fontSize: 11 }}>Read</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'grid', gap: 10 }}>
              <li><a href="blog/" style={{ color: 'hsl(0 0% 100% / .75)', textDecoration: 'none', fontSize: 14 }}>Articles & guides</a></li>
              <li><a href="get-started.html" style={{ color: 'hsl(0 0% 100% / .75)', textDecoration: 'none', fontSize: 14 }}>Book a free session</a></li>
              <li><a href="#faq" style={{ color: 'hsl(0 0% 100% / .75)', textDecoration: 'none', fontSize: 14 }}>Parent FAQs</a></li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid hsl(0 0% 100% / .08)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 12, color: 'hsl(0 0% 100% / .45)' }}>
          <span>© 2026 Young Knights · Knight Fitness Pty Ltd</span>
          <span style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="privacy.html" style={{ color: 'hsl(0 0% 100% / .7)', textDecoration: 'none' }}>Privacy Policy</a>
            <span>Built for teens. Backed by coaches.</span>
          </span>
        </div>
      </div>
      <style>{`@media (max-width: 720px) { .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="eyebrow" style={{ color: 'hsl(var(--yk-red))', fontSize: 11 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'grid', gap: 10 }}>
        {links.map((l, i) => (
          <li key={i}><a href="#" style={{ color: 'hsl(0 0% 100% / .75)', textDecoration: 'none', fontSize: 14 }}>{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

Object.assign(window, {
  ProblemSection, ProgramSection, HowItWorksSection, CoachSection,
  SportsMarquee, ReviewsSection, ResultsSection, CtaBand, ContactSection, Footer,
});
