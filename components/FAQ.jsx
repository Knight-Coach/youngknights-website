// FAQ — warm, parent-friendly accordion. One open at a time.

function FAQSection({ onStartTrial }) {
  const faqs = [
    {
      q: "What ages is Young Knights for?",
      a: "Young Knights is built specifically for teens aged 13–17. That covers early high school right through to senior year. If your child is 11 or 12 and is physically and mentally ready for a structured gym environment, have a chat with Zac — we'll give you an honest answer.",
    },
    {
      q: "How often does my teen need to train?",
      a: "Most of our Young Knights train 2–3 times per week, which is the sweet spot for real strength and conditioning gains alongside school, sport and rest. Some start with 2 sessions while they build the habit, then step up as they see results. We'll help you pick what fits their schedule.",
    },
    {
      q: "What if my teen has never lifted weights before? Is it safe?",
      a: "Absolutely safe — and absolutely welcome. Most teens who walk through our doors have never touched a barbell. Every program starts with movement screening and technique coaching before any real load. Zac is a qualified S&C coach and every session is supervised. Well-coached strength training is one of the safest things a teenager can do, and it's proven to reduce injury risk in sport.",
    },
    {
      q: "What do they need to wear and bring?",
      a: "Just active wear, closed-toe training shoes (no flat skate shoes for lifting days), a water bottle and a sweat towel. That's it. We supply everything else — all the equipment, a program, and a coach who cares.",
    },
    {
      q: "Can I stay and watch sessions?",
      a: "Yes, always. Parents are welcome to stay, watch and ask questions — especially for the first few sessions. A lot of parents love seeing their teen's progress first-hand. After a few weeks most teens are happy being dropped off, but you're never locked out.",
    },
    {
      q: "How much does it cost?",
      a: "$67/week for up to 3 coached sessions per week. That's the all-in price — no joining fees, no program fees, nothing extra. The first 12 weeks are a structured foundation block, and after that it rolls into a month-to-month arrangement. We cap the number of teens in the program so coaching stays personal, which is why spots are limited.",
    },
    {
      q: "Do I need to sign a contract?",
      a: "The first 12 weeks are a committed foundation block — that's how long it takes to build real strength, clean up technique and see proper results. After the initial 12 weeks it rolls into month-to-month, so you can pause, stop or adjust at any time. No year-long lock-ins, no trap contracts.",
    },
    {
      q: "What happens on the free session?",
      a: "Book in, turn up, train. Your teen joins a real session, meets Zac and the crew, gets coached through a proper workout, and walks out knowing exactly what Young Knights is about. Parents stay if they want to. No pressure, no sales pitch at the end — if it's a fit, we talk next steps. If it's not, no hard feelings.",
    },
    {
      q: "What if my teen plays a specific sport — rugby, netball, AFL, footy?",
      a: "That's where we shine. Every program is personalised to the sport your teen plays, the position they play, and the demands of their season. Rugby kids get different work to netballers. Swimmers train differently to sprinters. We've worked with teens across rugby league, AFL, football, netball, touch, athletics, swimming, basketball, cricket and more — and we build their program to make them better at the game they love.",
    },
  ];

  const [openIdx, setOpenIdx] = React.useState(0);

  return (
    <section id="faq" className="section-pad" style={{ background: 'hsl(var(--yk-off))' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }} className="two-col">
          <div style={{ position: 'sticky', top: 100 }} className="faq-aside">
            <div className="kicker-line" style={{ marginBottom: 20 }}>Parent FAQs</div>
            <h2 className="h-display" style={{ fontSize: 'clamp(36px, 5vw, 60px)', margin: 0 }}>
              The questions <span className="mark">every parent</span> asks us first.
            </h2>
            <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.6, color: 'hsl(var(--yk-ink) / .7)', maxWidth: 420 }}>
              Still have questions? Give us a call on 0452 519 877 — or book a free session and see for yourself.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button className="btn btn-dark" onClick={onStartTrial}>
                Book Free Session <ArrowRight size={18} className="arrow"/>
              </button>
              <a href="tel:0452519877" className="btn btn-outline">
                <Phone size={16}/> Call us
              </a>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 12 }}>
            {faqs.map((f, i) => {
              const open = openIdx === i;
              return (
                <div
                  key={i}
                  className="card"
                  style={{
                    padding: 0,
                    overflow: 'hidden',
                    borderColor: open ? 'hsl(var(--yk-ink) / .2)' : 'hsl(var(--yk-line))',
                    boxShadow: open ? '0 10px 30px -14px rgba(0,0,0,.15)' : 'none',
                    transition: 'border-color .2s, box-shadow .2s',
                  }}
                >
                  <button
                    onClick={() => setOpenIdx(open ? -1 : i)}
                    aria-expanded={open}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 20,
                      width: '100%',
                      padding: '22px 26px',
                      background: 'transparent',
                      border: 0,
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: 'inherit',
                      font: 'inherit',
                    }}
                  >
                    <span
                      className="display"
                      style={{
                        flex: 'none',
                        width: 32, height: 32, borderRadius: 8,
                        background: open ? 'hsl(var(--yk-red))' : 'hsl(var(--yk-off))',
                        color: open ? 'hsl(26 83% 14%)' : 'hsl(var(--yk-ink) / .55)',
                        display: 'grid', placeItems: 'center',
                        fontSize: 13, fontWeight: 800,
                        letterSpacing: 0,
                        transition: 'background .2s, color .2s',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="display"
                      style={{
                        flex: 1,
                        fontSize: 18,
                        fontWeight: 700,
                        letterSpacing: '-0.015em',
                        lineHeight: 1.35,
                      }}
                    >
                      {f.q}
                    </span>
                    <span
                      style={{
                        flex: 'none',
                        width: 36, height: 36, borderRadius: 999,
                        background: open ? 'hsl(var(--yk-ink))' : 'transparent',
                        color: open ? 'white' : 'hsl(var(--yk-ink) / .5)',
                        border: open ? '1px solid hsl(var(--yk-ink))' : '1px solid hsl(var(--yk-line))',
                        display: 'grid', placeItems: 'center',
                        transition: 'transform .25s ease, background .2s, color .2s, border-color .2s',
                        transform: open ? 'rotate(180deg)' : 'rotate(0)',
                      }}
                    >
                      <ChevronDown size={18} stroke={2.25}/>
                    </span>
                  </button>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: open ? '1fr' : '0fr',
                      transition: 'grid-template-rows .3s ease',
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <div
                        style={{
                          padding: '0 26px 24px 78px',
                          fontSize: 15.5,
                          lineHeight: 1.65,
                          color: 'hsl(var(--yk-ink) / .72)',
                        }}
                      >
                        {f.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .faq-aside { position: static !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { FAQSection });
