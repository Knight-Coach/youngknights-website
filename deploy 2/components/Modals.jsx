// Modals for Free Session + Contact Coach

function Modal({ open, onClose, children, maxWidth = 520 }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" style={{ maxWidth }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16, background: 'hsl(var(--yk-off))',
          border: 'none', width: 36, height: 36, borderRadius: 999, cursor: 'pointer',
          display: 'grid', placeItems: 'center', color: 'hsl(var(--yk-ink))',
        }}><X size={18}/></button>
        {children}
      </div>
    </div>
  );
}

function FreeTrialModal({ open, onClose }) {
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    parent: '', email: '', phone: '', teenName: '', teenAge: '',
    sport: '', level: '', day: '', time: '',
  });
  const next = () => setStep(s => Math.min(4, s + 1));
  const back = () => setStep(s => Math.max(1, s - 1));

  const reset = () => { setStep(1); setForm({ parent: '', email: '', phone: '', teenName: '', teenAge: '', sport: '', level: '', day: '', time: '' }); };

  React.useEffect(() => { if (open) reset(); }, [open]);

  return (
    <Modal open={open} onClose={onClose} maxWidth={540}>
      {/* Header */}
      <div style={{ padding: '32px 32px 0', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span className="chip chip-gold" style={{ fontSize: 11 }}>FREE SESSION</span>
          <span style={{ fontSize: 12, color: 'hsl(var(--yk-ink) / .5)', fontWeight: 600 }}>Step {step} of 4</span>
        </div>
        <h2 className="display" style={{ margin: 0, fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em' }}>
          {step === 1 && "Let's start with your teen"}
          {step === 2 && "Which sport and level?"}
          {step === 3 && "Pick a day"}
          {step === 4 && "How do we reach you?"}
        </h2>
        <div style={{ height: 4, background: 'hsl(var(--yk-off))', borderRadius: 999, marginTop: 16, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${step * 25}%`, background: 'hsl(var(--yk-gold))', transition: 'width .3s' }}/>
        </div>
      </div>

      <div style={{ padding: 32, display: 'grid', gap: 14 }}>
        {step === 1 && (
          <>
            <label className="field"><span>Teen's first name</span>
              <input className="input" value={form.teenName} onChange={e => setForm({...form, teenName: e.target.value})} placeholder="e.g. Ethan"/>
            </label>
            <label className="field"><span>Teen's age</span>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['13','14','15','16','17'].map(a => (
                  <button key={a} type="button" className="tweak-chip"
                    style={{
                      background: form.teenAge === a ? 'hsl(var(--yk-ink))' : 'white',
                      color: form.teenAge === a ? 'white' : 'hsl(var(--yk-ink))',
                      borderColor: form.teenAge === a ? 'hsl(var(--yk-ink))' : 'hsl(var(--yk-line))',
                      padding: '12px 20px', fontSize: 15,
                    }}
                    onClick={() => setForm({...form, teenAge: a})}>{a}</button>
                ))}
              </div>
            </label>
          </>
        )}
        {step === 2 && (
          <>
            <label className="field"><span>Main sport (or general fitness)</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {['Rugby League','AFL','Football','Netball','Basketball','General fitness'].map(s => (
                  <button key={s} type="button"
                    style={{
                      padding: '14px', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer',
                      background: form.sport === s ? 'hsl(var(--yk-ink))' : 'white',
                      color: form.sport === s ? 'white' : 'hsl(var(--yk-ink))',
                      border: `1.5px solid ${form.sport === s ? 'hsl(var(--yk-ink))' : 'hsl(var(--yk-line))'}`,
                      textAlign: 'left',
                    }}
                    onClick={() => setForm({...form, sport: s})}>{s}</button>
                ))}
              </div>
            </label>
            <label className="field"><span>Gym experience</span>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['None', 'Some', 'Experienced'].map(l => (
                  <button key={l} type="button" className="tweak-chip"
                    style={{
                      background: form.level === l ? 'hsl(var(--yk-ink))' : 'white',
                      color: form.level === l ? 'white' : 'hsl(var(--yk-ink))',
                      borderColor: form.level === l ? 'hsl(var(--yk-ink))' : 'hsl(var(--yk-line))',
                      padding: '12px 18px', fontSize: 14,
                    }}
                    onClick={() => setForm({...form, level: l})}>{l}</button>
                ))}
              </div>
            </label>
          </>
        )}
        {step === 3 && (
          <>
            <label className="field"><span>Preferred day</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                {['Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
                  <button key={d} type="button"
                    style={{
                      padding: '14px', borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: 'pointer',
                      background: form.day === d ? 'hsl(var(--yk-gold))' : 'white',
                      color: form.day === d ? 'hsl(26 83% 14%)' : 'hsl(var(--yk-ink))',
                      border: `1.5px solid ${form.day === d ? 'hsl(var(--yk-gold))' : 'hsl(var(--yk-line))'}`,
                    }}
                    onClick={() => setForm({...form, day: d})}>{d}</button>
                ))}
              </div>
            </label>
            <label className="field"><span>Preferred time</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {['3:30 PM','4:30 PM','5:30 PM','6:30 PM'].map(t => (
                  <button key={t} type="button"
                    style={{
                      padding: '14px', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer',
                      background: form.time === t ? 'hsl(var(--yk-ink))' : 'white',
                      color: form.time === t ? 'white' : 'hsl(var(--yk-ink))',
                      border: `1.5px solid ${form.time === t ? 'hsl(var(--yk-ink))' : 'hsl(var(--yk-line))'}`,
                    }}
                    onClick={() => setForm({...form, time: t})}>{t}</button>
                ))}
              </div>
            </label>
          </>
        )}
        {step === 4 && (
          <>
            <label className="field"><span>Parent's name</span>
              <input className="input" value={form.parent} onChange={e => setForm({...form, parent: e.target.value})} placeholder="Your name"/>
            </label>
            <label className="field"><span>Email</span>
              <input className="input" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@email.com"/>
            </label>
            <label className="field"><span>Phone</span>
              <input className="input" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="0400 000 000"/>
            </label>
          </>
        )}

        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          {step > 1 && <button onClick={back} className="btn btn-outline" style={{ flex: '0 0 auto' }}>Back</button>}
          {step < 4 && <button onClick={next} className="btn btn-dark" style={{ flex: 1, justifyContent: 'center' }}>
            Continue <ArrowRight size={18} className="arrow"/>
          </button>}
          {step === 4 && <button onClick={next} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
            Book Free Session <Check size={18}/>
          </button>}
        </div>
      </div>

      {step === 5 && (
        <div style={{ padding: 32, textAlign: 'center' }}>
          <div style={{ width: 72, height: 72, margin: '0 auto 20px', borderRadius: 999, background: 'hsl(var(--yk-gold))', color: 'hsl(26 83% 14%)', display: 'grid', placeItems: 'center' }}>
            <Check size={36} stroke={2.5}/>
          </div>
          <h3 className="display" style={{ fontSize: 24, margin: 0, fontWeight: 800 }}>Booked.</h3>
          <p style={{ marginTop: 8, color: 'hsl(var(--yk-ink) / .6)' }}>
            Zac will confirm {form.teenName || 'your teen'}'s session on {form.day || 'their chosen day'} at {form.time || 'their chosen time'}.
          </p>
        </div>
      )}
    </Modal>
  );
}

function ContactCoachModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} maxWidth={560}>
      <div style={{ padding: '28px 28px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
          <div style={{ width: 52, height: 52, borderRadius: 999, background: 'linear-gradient(135deg, hsl(45 93% 47%), hsl(36 100% 50%))', color: 'hsl(26 83% 14%)', display: 'grid', placeItems: 'center', fontWeight: 800 }}>ZY</div>
          <div>
            <div className="display" style={{ fontSize: 20, fontWeight: 800 }}>Get in touch</div>
            <div style={{ fontSize: 13, color: 'hsl(var(--yk-ink) / .55)' }}>Usually replies within a few hours</div>
          </div>
        </div>
      </div>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/ATwKxumBh8CdpThEnu9I"
        style={{ width: '100%', border: 'none', display: 'block', minHeight: 560 }}
        id="modal-ghl-form-YK"
        title="Get in touch"
      />
    </Modal>
  );
}

Object.assign(window, { Modal, FreeTrialModal, ContactCoachModal });
