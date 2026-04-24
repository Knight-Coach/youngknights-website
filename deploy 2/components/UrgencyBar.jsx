// Thin urgency bar — "Limited spots for this month's intake"

function UrgencyBar({ spotsLeft = 4, onCta }) {
  const [hidden, setHidden] = React.useState(false);
  if (hidden) return null;
  const now = new Date();
  const monthName = now.toLocaleString('default', { month: 'long' });
  return (
    <div style={{
      position: 'relative', zIndex: 50,
      background: 'linear-gradient(90deg, hsl(var(--yk-red)) 0%, hsl(var(--yk-red-deep)) 100%)',
      color: 'white',
      padding: '10px 20px',
      fontSize: 14, fontWeight: 600,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
      flexWrap: 'wrap',
    }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 16 }}>🔥</span>
        <strong style={{ fontWeight: 800, letterSpacing: '.01em' }}>
          {spotsLeft} spots left
        </strong>
        <span>in our {monthName} intake</span>
      </span>
      <button onClick={onCta} style={{
        background: 'white', color: 'hsl(var(--yk-red))',
        padding: '6px 14px', borderRadius: 999, border: 'none', cursor: 'pointer',
        fontWeight: 700, fontSize: 12, letterSpacing: '.04em', textTransform: 'uppercase',
      }}>
        Claim Your Spot →
      </button>
      <button aria-label="Dismiss" onClick={() => setHidden(true)} style={{
        position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
        background: 'none', border: 'none', cursor: 'pointer',
        color: 'hsl(0 0% 100% / .7)', fontSize: 18, lineHeight: 1, padding: 4,
      }}>✕</button>
    </div>
  );
}

window.UrgencyBar = UrgencyBar;
