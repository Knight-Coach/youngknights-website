// Schedule section + expanded How It Works using real youngknights.com.au content

function ScheduleSection({ onStartTrial }) {
  // Real schedule from youngknights.com.au/schedule
  const schedule = [
    { day: 'MON', sessions: [
      { time: '4:50 PM', name: 'Young Knights · Teens 13–17', tag: 'After School' },
      { time: '6:30 PM', name: 'Young Knights · Teens 13–17', tag: 'Evening' },
    ]},
    { day: 'TUE', sessions: [
      { time: '4:50 PM', name: 'Young Knights · Teens 13–17', tag: 'After School' },
    ]},
    { day: 'WED', sessions: [
      { time: '4:50 PM', name: 'Young Knights · Teens 13–17', tag: 'After School' },
      { time: '6:30 PM', name: 'Young Knights · Teens 13–17', tag: 'Evening' },
    ]},
    { day: 'THU', sessions: [
      { time: '4:50 PM', name: 'Young Knights · Teens 13–17', tag: 'After School' },
      { time: '6:30 PM', name: 'Young Knights · Teens 13–17', tag: 'Evening' },
    ]},
    { day: 'FRI', sessions: [
      { time: '4:50 PM', name: 'Young Knights · Teens 13–17', tag: 'After School' },
    ]},
    { day: 'SAT', sessions: [
      { time: '9:15 AM', name: 'Young Knights · Teens 13–17', tag: 'Weekend' },
    ]},
    { day: 'SUN', sessions: [], rest: true },
  ];

  const tagColor = (t) => ({
    'After School': 'hsl(var(--yk-red))',
    'Evening': 'hsl(var(--yk-red-deep))',
    'Weekend': '#7db88f',
  }[t] || 'hsl(var(--yk-red))');

  return (
    <section id="schedule" className="section-pad" style={{ background: 'hsl(var(--yk-ink))', color: 'white', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: .35, pointerEvents: 'none',
        background: 'radial-gradient(700px 350px at 85% 15%, hsl(var(--yk-red) / .22), transparent 60%)'
      }}/>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end', marginBottom: 48 }} className="two-col">
          <div>
            <div className="kicker-line kicker-dark" style={{ marginBottom: 20 }}>Weekly Schedule</div>
            <h2 className="h-display" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', margin: 0, color: 'white' }}>
              Train after school.<br/>
              <span style={{ color: 'hsl(var(--yk-red))' }}>Every week.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'hsl(0 0% 100% / .7)', margin: 0, maxWidth: 440 }}>
            Sessions run Monday–Friday after school and Saturday mornings. Pick the slots that work for your family — most teens attend 2–3 sessions per week.
          </p>
        </div>

        {/* Schedule grid — desktop: 7 columns */}
        <div className="schedule-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 12 }}>
          {schedule.map((d, i) => (
            <div key={i} style={{
              borderRadius: 16,
              border: '1px solid hsl(0 0% 100% / .1)',
              background: d.rest ? 'hsl(0 0% 100% / .02)' : 'hsl(0 0% 100% / .04)',
              padding: 20, minHeight: 260, display: 'flex', flexDirection: 'column',
            }}>
              <div className="eyebrow" style={{ color: 'hsl(var(--yk-red))', marginBottom: 20 }}>{d.day}</div>
              {d.rest ? (
                <div style={{ margin: 'auto', textAlign: 'center', color: 'hsl(0 0% 100% / .35)' }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>✕</div>
                  <div className="display" style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>Rest Day</div>
                </div>
              ) : (
                <div style={{ display: 'grid', gap: 10, flex: 1 }}>
                  {d.sessions.map((s, j) => (
                    <div key={j} style={{
                      padding: '12px 14px', borderRadius: 10,
                      background: 'hsl(0 0% 100% / .05)',
                      borderLeft: `3px solid ${tagColor(s.tag)}`,
                    }}>
                      <div className="display" style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.01em', color: 'white' }}>
                        {s.time}
                      </div>
                      <div style={{ fontSize: 11, color: 'hsl(0 0% 100% / .6)', marginTop: 4, fontWeight: 600 }}>
                        Teens 13–17
                      </div>
                      <div style={{
                        marginTop: 8, display: 'inline-block',
                        fontSize: 10, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase',
                        color: tagColor(s.tag),
                      }}>
                        {s.tag}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 32, padding: '20px 24px', borderRadius: 14,
          background: 'hsl(0 0% 100% / .04)', border: '1px solid hsl(0 0% 100% / .08)',
          display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
            <LegendDot color="hsl(var(--yk-red))" label="After School · Most popular" />
            <LegendDot color="hsl(var(--yk-red-deep))" label="Evening · Perfect if sport runs late" />
            <LegendDot color="#7db88f" label="Weekend" />
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn btn-primary hide-cta-on-mobile" onClick={onStartTrial}>
              Book Your First Session <ArrowRight size={18} className="arrow"/>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .schedule-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 720px) {
          .schedule-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function LegendDot({ color, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'hsl(0 0% 100% / .7)', fontWeight: 600 }}>
      <span style={{ width: 10, height: 10, borderRadius: 2, background: color }}/>
      {label}
    </div>
  );
}

// Detailed How It Works — mirrors youngknights.com.au/how-it-works
function HowItWorksDetailed({ onStartTrial, onContact }) {
  const steps = [
    {
      n: '01',
      title: 'Book your free session',
      body: "Come in, meet Coach Zac and try a session. No commitment, no pressure. Parents are welcome to stay and watch — we want you to see exactly how we coach your teen.",
      photo: 'whiteboard',
      photoLabel: 'Session briefing · Knight Fitness Studio',
    },
    {
      n: '02',
      title: 'Screening & performance testing',
      body: "We baseline every teen across movement, strength, speed, power and mobility. The data tells us what to train first, and gives us an honest starting line to measure progress against.",
      photo: 'bench',
      photoLabel: 'Coach Zac spotting a loaded bench press',
      reverse: true,
    },
    {
      n: '03',
      title: 'A personalised program',
      body: "Your teen walks in knowing exactly what to do. Their program is built around their sport, their goals and their current level — and updated regularly as they progress.",
      photo: 'rope',
      photoLabel: 'Program in motion — conditioning block',
    },
    {
      n: '04',
      title: 'Coached sessions, every week',
      body: "Small-group coaching 2–3 times per week. Direct feedback on every rep. A team of teens chasing progress together — showing up, doing the work, getting better.",
      photo: 'thumbsup',
      photoLabel: 'Post-session — Young Knights crew',
      reverse: true,
    },
    {
      n: '05',
      title: 'Re-test every 6 weeks',
      body: "We re-test at weeks 6 and 12 so progress is measurable, not vibes. You see the numbers. Your teen sees what hard work actually earns — and carries that confidence everywhere else.",
      photo: 'squat',
      photoLabel: 'Re-test: loaded squat',
      objectPosition: 'center 12%',
    },
  ];

  return (
    <section id="how" className="section-pad" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 72px' }}>
          <div className="kicker-line" style={{ marginBottom: 20, justifyContent: 'center' }}>How It Works</div>
          <h2 className="h-display" style={{ fontSize: 'clamp(40px, 5.5vw, 68px)', margin: 0 }}>
            From first session to <span className="mark">level up</span>.
          </h2>
          <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.6, color: 'hsl(var(--yk-ink) / .7)' }}>
            Five steps. Twelve weeks. A system that actually works because every teen is coached as an individual.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 80 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 56, alignItems: 'center',
            }} className={`hiw-row ${s.reverse ? 'hiw-reverse' : ''}`}>
              <div style={{ order: s.reverse ? 2 : 1 }}>
                <Photo kind={s.photo} label={s.photoLabel} objectPosition={s.objectPosition} style={{ height: 460, width: '100%', borderRadius: 20 }}/>
              </div>
              <div style={{ order: s.reverse ? 1 : 2 }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  padding: '8px 14px 8px 10px', borderRadius: 999,
                  background: 'hsl(var(--yk-ink))', color: 'white',
                  fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase',
                  marginBottom: 20,
                }}>
                  <span style={{
                    width: 28, height: 28, borderRadius: 999,
                    background: 'hsl(var(--yk-red))', color: 'white',
                    display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 800,
                  }}>{s.n}</span>
                  Step {s.n}
                </div>
                <h3 className="h-display" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', margin: 0, letterSpacing: '-0.02em' }}>
                  {s.title}
                </h3>
                <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.6, color: 'hsl(var(--yk-ink) / .7)', maxWidth: 480 }}>
                  {s.body}
                </p>
                {i === steps.length - 1 && (
                  <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <button className="btn btn-primary" onClick={onStartTrial}>
                      First Session Free <ArrowRight size={18} className="arrow"/>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .hiw-row { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hiw-row > div { order: unset !important; }
          .hiw-row > div:first-child { order: 1 !important; }
          .hiw-row > div:last-child { order: 2 !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { ScheduleSection, HowItWorksDetailed });
