// Knight Admin's enquiry form (knight-agent /form/enquiry) in an iframe: every enquiry is posted in Slack with a
// lead card for the teens coach, tagged and noted on the parent's HighLevel contact, and counted on the staff
// boards' sales pipeline. The site fixes the gym and program, so it asks the parent's name, mobile, email, the
// teen's age and an optional message.
//
// The form posts {type: 'kf-form', height} as it renders, so the frame is sized to fit, and {submitted: true}
// once the enquiry is in (it shows its own thank-you). Only messages from ENQUIRY_ORIGIN, from this frame, count.

const ENQUIRY_ORIGIN = 'https://knight-agent.vercel.app';

// `source` names the page the form is on (young-knights-<where>): it's on the Slack card, in the HighLevel note,
// and a HighLevel tag (from-<source>) a follow-up workflow can trigger on.
function enquiryFormSrc(source) {
  return `${ENQUIRY_ORIGIN}/form/enquiry?embed=1&site=lawnton&program=young-knights&fix=program&src=${encodeURIComponent(source)}`;
}

function EnquiryForm({ source, title, minHeight = 620 }) {
  const ref = React.useRef(null);
  const [height, setHeight] = React.useState(minHeight);

  React.useEffect(() => {
    const onMsg = (e) => {
      if (e.origin !== ENQUIRY_ORIGIN || !ref.current || e.source !== ref.current.contentWindow) return;
      const d = e.data;
      if (!d || typeof d !== 'object' || d.type !== 'kf-form') return;
      const h = parseInt(d.height, 10);
      if (h >= 120 && h <= 4000) setHeight(h);
      if (d.submitted) {
        // A sent enquiry is the site's conversion. Analytics must never break the page.
        try {
          if (window.gtag) window.gtag('event', 'generate_lead', { form: source });
          if (window.fbq) window.fbq('track', 'Lead');
        } catch (_) { /* ignore */ }
      }
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [source]);

  return (
    <iframe
      ref={ref}
      src={enquiryFormSrc(source)}
      title={title}
      data-kf-form="enquiry"
      loading="lazy"
      style={{ width: '100%', border: 'none', display: 'block', height }}
    />
  );
}

Object.assign(window, { EnquiryForm, enquiryFormSrc, ENQUIRY_ORIGIN });
