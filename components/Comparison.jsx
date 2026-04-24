// Comparison table — Young Knights vs Regular Gym vs Group Fitness Class.
// Desktop: 4-col table. Mobile: 3 stacked cards.

function ComparisonSection({ onStartTrial }) {
  const rows = [
    {
      criterion: "Program built around their sport",
      sub: "Rugby, netball, AFL, soccer, swimming — each sport needs different training.",
      yk: { mark: true, text: "Personalised to sport & position" },
      gym: { mark: false, text: "No program" },
      group: { mark: false, text: "One-size-fits-all" },
    },
    {
      criterion: "Qualified S&C coach on every rep",
      sub: "Not a gym floor attendant. A strength & conditioning specialist.",
      yk: { mark: true, text: "Every session" },
      gym: { mark: false, text: "Nobody" },
      group: { mark: "partial", text: "Group instructor" },
    },
    {
      criterion: "Technique coached, not guessed",
      sub: "Poor form doesn't just limit results — it causes injury.",
      yk: { mark: true, text: "Hands-on coaching" },
      gym: { mark: false, text: "YouTube tutorials" },
      group: { mark: "partial", text: "Shouted cues" },
    },
    {
      criterion: "Age-appropriate programming",
      sub: "Teens aren't small adults. They need training built for growing bodies.",
      yk: { mark: true, text: "Designed for 13–17" },
      gym: { mark: false, text: "Adult programs" },
      group: { mark: false, text: "Adult-focused class" },
    },
    {
      criterion: "Re-testing to prove progress",
      sub: "Every 6 weeks we test the numbers — strength, speed, power.",
      yk: { mark: true, text: "Every 6 weeks" },
      gym: { mark: false, text: "Never" },
      group: { mark: false, text: "Never" },
    },
    {
      criterion: "Training with their age group",
      sub: "A crew of teens who are all in the same boat.",
      yk: { mark: true, text: "13–17 only" },
      gym: { mark: false, text: "Adults everywhere" },
      group: { mark: false, text: "Adults everywhere" },
    },
    {
      criterion: "Nutrition & recovery guidance",
      sub: "Eating, sleeping and recovery matter as much as training.",
      yk: { mark: true, text: "Built in" },
      gym: { mark: false, text: "None" },
      group: { mark: false, text: "None" },
    },
    {
      criterion: "Injury reduction for their sport",
      sub: "The #1 reason teens drop out of sport is preventable injury.",
      yk: { mark: true, text: "Primary outcome" },
      gym: { mark: false, text: "Risk increases" },
      group: { mark: "partial", text: "Generic conditioning" },
    },
  ];

  const markStyle = (value, onDark) => {
    const base = {
      width: 32, height: 32, borderRadius: 999,
      display: 'inline-grid', placeItems: 'center',
      flex: 'none',
    };
    if (value === true) return (
      <span style={{ ...base, background: 'hsl(var(--yk-red))', color: 'white' }}>
        <Check size={18} stroke={3}/>
      </span>
    );
    if (value === "partial") return (
      <span style={{
        ...base,
        background: onDark ? 'hsl(0 0% 100% / .08)' : 'hsl(var(--yk-ink) / .06)',
        color: onDark ? 'hsl(0 0% 100% / .6)' : 'hsl(var(--yk-ink) / .55)',
        border: onDark ? '1px solid hsl(0 0% 100% / .15)' : '1px solid hsl(var(--yk-ink) / .15)',
        fontSize: 20, fontWeight: 700, lineHeight: 1,
      }}>–</span>
    );
    return (
      <span style={{
        ...base,
        background: onDark ? 'hsl(0 0% 100% / .06)' : 'hsl(var(--yk-ink) / .05)',
        color: onDark ? 'hsl(0 0% 100% / .45)' : 'hsl(var(--yk-ink) / .4)',
        border: onDark ? '1px solid hsl(0 0% 100% / .12)' : '1px solid hsl(var(--yk-ink) / .12)',
      }}>
        <X size={14} stroke={2.5}/>
      </span>
    );
  };

  const columns = [
    {
      key: 'yk',
      kicker: 'Recommended',
      title: 'Young Knights',
      sub: 'Teen S&C program',
      highlight: true,
    },
    {
      key: 'gym',
      kicker: 'Alternative',
      title: 'Regular gym',
      sub: 'Training on their own',
      highlight: false,
    },
    {
      key: 'group',
      kicker: 'Alternative',
      title: 'Group fitness class',
      sub: 'Bootcamp / HIIT / CrossFit',
      highlight: false,
    },
  ];

  return (
    <section id="compare" className="section-pad" style={{ background: 'white' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: 780, margin: '0 auto 56px', textAlign: 'center' }}>
          <div className="kicker-line" style={{ marginBottom: 20, justifyContent: 'center' }}>What makes us different</div>
          <h2 className="h-display" style={{ fontSize: 'clamp(40px, 5.5vw, 68px)', margin: 0 }}>
            Not the gym. Not a <span className="mark">class</span>.
          </h2>
          <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.6, color: 'hsl(var(--yk-ink) / .65)' }}>
            There are plenty of places your teen could train. Here's why parents choose Young Knights over the alternatives.
          </p>
        </div>

        {/* Desktop: table grid */}
        <div className="compare-grid">
          <div className="compare-head-cell compare-head-empty"/>
          {columns.map(col => (
            <div key={col.key} className={`compare-head-cell ${col.highlight ? 'compare-head-yk' : ''}`}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase',
                color: col.highlight ? 'hsl(var(--yk-red))' : 'hsl(var(--yk-ink) / .45)',
                marginBottom: 6,
              }}>
                {col.kicker}
              </div>
              <div className="display" style={{
                fontSize: 22, fontWeight: 800, lineHeight: 1.1,
                color: col.highlight ? 'white' : 'hsl(var(--yk-ink))',
              }}>
                {col.title}
              </div>
              <div style={{
                fontSize: 13, marginTop: 4,
                color: col.highlight ? 'hsl(0 0% 100% / .65)' : 'hsl(var(--yk-ink) / .55)',
              }}>
                {col.sub}
              </div>
            </div>
          ))}

          {rows.map((row, i) => (
            <React.Fragment key={i}>
              <div className="compare-criterion">
                <div style={{ fontWeight: 700, fontSize: 15, color: 'hsl(var(--yk-ink))', lineHeight: 1.3 }}>
                  {row.criterion}
                </div>
                <div style={{ fontSize: 13, color: 'hsl(var(--yk-ink) / .55)', marginTop: 4, lineHeight: 1.5 }}>
                  {row.sub}
                </div>
              </div>
              {columns.map(col => {
                const cell = row[col.key];
                const dark = col.highlight;
                return (
                  <div key={col.key} className={`compare-cell ${dark ? 'compare-cell-yk' : ''}`}>
                    {markStyle(cell.mark, dark)}
                    <span style={{
                      fontSize: 14,
                      fontWeight: dark ? 600 : 500,
                      color: dark ? 'white' : 'hsl(var(--yk-ink) / .75)',
                    }}>
                      {cell.text}
                    </span>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="compare-mobile">
          {columns.map(col => (
            <div key={col.key} className={`compare-card ${col.highlight ? 'compare-card-yk' : ''}`}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase',
                color: col.highlight ? 'hsl(var(--yk-red))' : 'hsl(var(--yk-ink) / .45)',
                marginBottom: 6,
              }}>
                {col.kicker}
              </div>
              <div className="display" style={{
                fontSize: 26, fontWeight: 800, lineHeight: 1.1,
                color: col.highlight ? 'white' : 'hsl(var(--yk-ink))',
              }}>
                {col.title}
              </div>
              <div style={{
                fontSize: 14, marginTop: 4, marginBottom: 20,
                color: col.highlight ? 'hsl(0 0% 100% / .65)' : 'hsl(var(--yk-ink) / .55)',
              }}>
                {col.sub}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
                {rows.map((row, i) => {
                  const cell = row[col.key];
                  const dark = col.highlight;
                  return (
                    <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      {markStyle(cell.mark, dark)}
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{
                          fontSize: 14, fontWeight: 600, lineHeight: 1.3,
                          color: dark ? 'white' : 'hsl(var(--yk-ink))',
                        }}>
                          {row.criterion}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <p style={{
            fontSize: 16, color: 'hsl(var(--yk-ink) / .65)',
            maxWidth: 560, margin: '0 auto 24px',
          }}>
            See the difference on the gym floor. Your teen's first session is on us.
          </p>
          <button className="btn btn-primary btn-lg hide-cta-on-mobile" onClick={onStartTrial}>
            Book Free Session <ArrowRight size={18} className="arrow"/>
          </button>
        </div>
      </div>

      <style>{`
        .compare-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 1px;
          background: hsl(var(--yk-line));
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid hsl(var(--yk-line));
          box-shadow: 0 30px 60px -20px hsl(var(--yk-ink) / .1);
        }
        .compare-head-cell {
          background: hsl(var(--yk-off));
          padding: 28px 22px;
        }
        .compare-head-empty {
          background: hsl(var(--yk-off));
        }
        .compare-head-yk {
          background: hsl(var(--yk-ink));
          position: relative;
        }
        .compare-head-yk::before {
          content: "";
          position: absolute; inset: 0 0 auto 0;
          height: 3px;
          background: hsl(var(--yk-red));
        }
        .compare-criterion {
          background: hsl(var(--yk-off));
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .compare-cell {
          background: white;
          padding: 22px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 76px;
        }
        .compare-cell-yk {
          background: hsl(var(--yk-ink));
        }
        .compare-mobile { display: none; }

        @media (max-width: 900px) {
          .compare-grid { display: none; }
          .compare-mobile {
            display: grid;
            gap: 16px;
          }
          .compare-card {
            background: white;
            border: 1px solid hsl(var(--yk-line));
            border-radius: 18px;
            padding: 24px 20px;
          }
          .compare-card-yk {
            background: hsl(var(--yk-ink));
            border-color: hsl(var(--yk-red) / .3);
            position: relative;
          }
          .compare-card-yk::before {
            content: "";
            position: absolute; inset: 0 0 auto 0;
            height: 3px;
            background: hsl(var(--yk-red));
            border-radius: 18px 18px 0 0;
          }
        }
      `}</style>
    </section>
  );
}

window.ComparisonSection = ComparisonSection;
