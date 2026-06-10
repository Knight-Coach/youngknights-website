// Get Started page — hydrates the pre-rendered funnel (or mounts fresh if absent).
// During build-time pre-rendering there is no document, so this is skipped.

if (typeof document !== 'undefined') {
  const rootEl = document.getElementById('root');
  if (rootEl.hasChildNodes()) {
    ReactDOM.hydrateRoot(rootEl, <GetStarted/>);
  } else {
    ReactDOM.createRoot(rootEl).render(<GetStarted/>);
  }
}
