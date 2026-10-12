// Modals: Contact Coach (the booking flow is get-started.html)

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
      <div style={{ padding: '0 20px 20px' }}>
        <EnquiryForm source="young-knights-contact-popup" title="Get in touch" />
      </div>
    </Modal>
  );
}

Object.assign(window, { Modal, ContactCoachModal });
