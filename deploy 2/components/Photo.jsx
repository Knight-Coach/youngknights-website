// Real photos from Unsplash (free, hotlinkable, authentic gym/teen training imagery)
// Replace these URLs with real Young Knights photos when available.

// Each kind maps to a distinct photo — no reuse across the site.
const PHOTO_URLS = {
  coach: "assets/yk-zac.jpg",              // Meet Zac — real photo
  bench: "assets/bench.jpg",               // How It Works — step 2
  whiteboard: "assets/whiteboard.jpg",     // How It Works — step 1
  rope: "assets/yk-rope-jump.jpg",         // How It Works — step 3
  boxjump: "assets/yk-boxjump.jpg",        // How It Works — step 5
  bandsprints: "assets/yk-bandsprints.jpg",// Program card — group in motion
  thumbsup: "assets/yk-thumbsup.jpg",      // Results — two teens post-session
  storefront: "assets/yk-storefront.jpg",  // Contact — Knight Fitness studio
  battlerope: "assets/yk-battlerope.jpg",  // spare
  squat: "assets/yk-squat.jpg",            // spare
  curl: "assets/yk-curl.jpg",              // spare
  rower: "assets/yk-rower.jpg",            // spare
  // legacy aliases so any old references still resolve gracefully
  athlete: "assets/bench.jpg",
  action: "assets/yk-bandsprints.jpg",
};

function Photo({ label, kind = "coach", className = "", style = {}, src, objectPosition }) {
  const url = src || PHOTO_URLS[kind] || PHOTO_URLS.coach;
  return (
    <div className={`photo ${className}`}
         style={{ background: 'hsl(220 30% 12%)', ...style }}>
      <img src={url} alt={label || ""} loading="lazy"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: objectPosition || 'center' }}/>
    </div>
  );
}

window.Photo = Photo;
