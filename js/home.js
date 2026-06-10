// --- components/Icons.jsx ---
;(function () {
// Lucide-style icons inlined as SVG components (stroke 1.75, currentColor)
const icon = (paths, vb = 24) => props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: props.size || 20,
  height: props.size || 20,
  viewBox: `0 0 ${vb} ${vb}`,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: props.stroke || 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: props.className,
  style: props.style
}, paths);
const ArrowRight = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 5 7 7-7 7"
})));
const ArrowLeft = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M19 12H5"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 19-7-7 7-7"
})));
const ArrowUpRight = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M7 17 17 7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 7h10v10"
})));
const Check = icon(/*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Dumbbell = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M14.4 14.4 9.6 9.6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m21.5 21.5-1.4-1.4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.9 3.9 2.5 2.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"
})));
const Trophy = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 22h16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
})));
const Zap = icon(/*#__PURE__*/React.createElement("path", {
  d: "M13 2 3 14h9l-1 8 10-12h-9l1-8z"
}));
const Heart = icon(/*#__PURE__*/React.createElement("path", {
  d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"
}));
const Users = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "7",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 21v-2a4 4 0 0 0-3-3.87"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 3.13a4 4 0 0 1 0 7.75"
})));
const Target = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "2"
})));
const Apple = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 2c1 .5 2 2 2 5"
})));
const Activity = icon(/*#__PURE__*/React.createElement("path", {
  d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.5.5 0 0 1-.96 0L9.24 2.18a.5.5 0 0 0-.96 0l-2.35 8.36A2 2 0 0 1 4 12H2"
}));
const MapPin = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
})));
const Phone = icon(/*#__PURE__*/React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));
const Mail = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
})));
const Calendar = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M8 2v4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 2v4"
}), /*#__PURE__*/React.createElement("rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 10h18"
})));
const Clock = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 6 12 12 16 14"
})));
const Star = icon(/*#__PURE__*/React.createElement("polygon", {
  points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
}));
const Shield = icon(/*#__PURE__*/React.createElement("path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}));
const X = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18"
}), /*#__PURE__*/React.createElement("path", {
  d: "m6 6 12 12"
})));
const Menu = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M4 6h16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 12h16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 18h16"
})));
const ChevronDown = icon(/*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));
const Flame = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
})));
const Play = icon(/*#__PURE__*/React.createElement("polygon", {
  points: "6 3 20 12 6 21 6 3"
}));
const Brain = icon(/*#__PURE__*/React.createElement("path", {
  d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Zm0 0a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Zm0 0v1"
}));
const TrendingUp = icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
  points: "22 7 13.5 15.5 8.5 10.5 2 17"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "16 7 22 7 22 13"
})));
Object.assign(window, {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Check,
  Dumbbell,
  Trophy,
  Zap,
  Heart,
  Users,
  Target,
  Apple,
  Activity,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
  Star,
  Shield,
  X,
  Menu,
  ChevronDown,
  Flame,
  Play,
  Brain,
  TrendingUp
});
})();

// --- components/Photo.jsx ---
;(function () {
// Real photos from Unsplash (free, hotlinkable, authentic gym/teen training imagery)
// Replace these URLs with real Young Knights photos when available.

// Each kind maps to a distinct photo — no reuse across the site.
const PHOTO_URLS = {
  coach: "assets/yk-zac.jpg",
  // Meet Zac — real photo
  bench: "assets/bench.jpg",
  // How It Works — step 2
  whiteboard: "assets/whiteboard.jpg",
  // How It Works — step 1
  rope: "assets/yk-rope-jump.jpg",
  // How It Works — step 3
  boxjump: "assets/yk-boxjump.jpg",
  // How It Works — step 5
  bandsprints: "assets/yk-bandsprints.jpg",
  // Program card — group in motion
  thumbsup: "assets/yk-thumbsup.jpg",
  // Results — two teens post-session
  storefront: "assets/yk-storefront.jpg",
  // Contact — Knight Fitness studio
  battlerope: "assets/yk-battlerope.jpg",
  // spare
  squat: "assets/yk-squat.jpg",
  // spare
  curl: "assets/yk-curl.jpg",
  // spare
  rower: "assets/yk-rower.jpg",
  // spare
  // legacy aliases so any old references still resolve gracefully
  athlete: "assets/bench.jpg",
  action: "assets/yk-bandsprints.jpg"
};
function Photo({
  label,
  kind = "coach",
  className = "",
  style = {},
  src,
  objectPosition
}) {
  const url = src || PHOTO_URLS[kind] || PHOTO_URLS.coach;
  return /*#__PURE__*/React.createElement("div", {
    className: `photo ${className}`,
    style: {
      background: 'hsl(220 30% 12%)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: label || "",
    loading: "lazy",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: objectPosition || 'center'
    }
  }));
}
window.Photo = Photo;
})();

// --- components/Hero.jsx ---
;(function () {
// Header + Hero

function Header({
  onStartTrial,
  onContact
}) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: scrolled ? 'hsl(224 71% 4% / .85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid hsl(0 0% 100% / .08)' : '1px solid transparent',
      transition: 'all .25s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 24px',
      color: 'white'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none',
      color: 'white'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/yk-logo.svg",
    alt: "Young Knights",
    style: {
      height: 64,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "hdr-powered",
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      paddingLeft: 12,
      borderLeft: '1px solid hsl(0 0% 100% / .18)',
      lineHeight: 1.15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'hsl(0 0% 100% / .55)'
    }
  }, "Powered by"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'white',
      letterSpacing: '-0.005em',
      marginTop: 2
    }
  }, "Knight Fitness \xB7 Lawnton"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'center'
    },
    className: "nav-desktop"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#program",
    className: "nav-link"
  }, "The Program"), /*#__PURE__*/React.createElement("a", {
    href: "#how",
    className: "nav-link"
  }, "How It Works"), /*#__PURE__*/React.createElement("a", {
    href: "#coach",
    className: "nav-link"
  }, "Meet Zac"), /*#__PURE__*/React.createElement("a", {
    href: "#schedule",
    className: "nav-link"
  }, "Schedule"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "nav-link"
  }, "Contact"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: onStartTrial
  }, "Get Started ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 16,
    className: "arrow"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "nav-mobile-toggle",
    onClick: () => setOpen(!open),
    style: {
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer'
    }
  }, open ? /*#__PURE__*/React.createElement(X, {
    size: 24
  }) : /*#__PURE__*/React.createElement(Menu, {
    size: 24
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile-panel",
    style: {
      background: 'hsl(224 71% 4%)',
      borderTop: '1px solid hsl(0 0% 100% / .08)',
      padding: '16px 24px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, ['The Program|#program', 'How It Works|#how', 'Meet Zac|#coach', 'Schedule|#schedule', 'Contact|#contact'].map(s => {
    const [label, href] = s.split('|');
    return /*#__PURE__*/React.createElement("a", {
      key: href,
      href: href,
      onClick: () => setOpen(false),
      className: "nav-link",
      style: {
        padding: '14px 0',
        borderBottom: '1px solid hsl(0 0% 100% / .06)',
        fontSize: 16
      }
    }, label);
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => {
      onStartTrial();
      setOpen(false);
    },
    style: {
      marginTop: 16,
      justifyContent: 'center'
    }
  }, "Get Started ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18,
    className: "arrow"
  }))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
        .nav-link { color: hsl(0 0% 100% / .75); text-decoration: none; font-size: 14px; font-weight: 500; transition: color .15s; }
        .nav-link:hover { color: white; }
        .nav-mobile-toggle { display: none; }
        @media (max-width: 960px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
        @media (max-width: 640px) {
          .hdr-powered { display: none !important; }
        }
      `
    }
  }));
}
function Hero({
  onStartTrial,
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 2,
      paddingTop: 40,
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 64,
      alignItems: 'center'
    },
    className: "hero-grid-layout"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "kicker-line kicker-dark",
    style: {
      marginBottom: 28,
      display: 'inline-flex'
    }
  }, "North Brisbane \xB7 Ages 13\u201317"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display h-display-xl",
    style: {
      fontSize: 'clamp(56px, 7.5vw, 104px)',
      margin: '28px 0 0',
      color: 'white'
    }
  }, "Give your teen an ", /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, "unfair advantage"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontSize: 19,
      lineHeight: 1.55,
      color: 'hsl(0 0% 100% / .75)',
      maxWidth: 540
    }
  }, "A ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'white'
    }
  }, "12-week strength & conditioning program"), " built for teens 13\u201317 \u2014 real coaching, real results, and a team that has their back."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: onStartTrial
  }, "Book Free Session ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18,
    className: "arrow"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: 'flex',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HeroStat, {
    value: "12",
    label: "Week program"
  }), /*#__PURE__*/React.createElement(HeroStat, {
    value: "500+",
    label: "Teens trained"
  }), /*#__PURE__*/React.createElement(HeroStat, {
    value: "5.0\u2605",
    label: "Parent rating"
  }))), /*#__PURE__*/React.createElement(HeroVisual, {
    onStartTrial: onStartTrial
  }))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
        @media (max-width: 960px) {
          .hero-grid-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `
    }
  }));
}
function HeroStat({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 36,
      fontWeight: 800,
      color: 'white',
      letterSpacing: '-0.03em',
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'hsl(0 0% 100% / .55)',
      marginTop: 6
    }
  }, label));
}
function HeroVisual({
  onStartTrial
}) {
  // Video player block — poster frame from brand photo, tap to play.
  // Drop a real video at assets/yk-hero.mp4 and it auto-wires up.
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [hasVideo, setHasVideo] = React.useState(false);
  React.useEffect(() => {
    // Probe: does the video file exist?
    fetch('assets/yk-hero.mp4', {
      method: 'HEAD'
    }).then(r => setHasVideo(r.ok)).catch(() => setHasVideo(false));
  }, []);
  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 20,
      overflow: 'hidden',
      aspectRatio: '4 / 5',
      background: 'hsl(220 30% 8%)',
      boxShadow: '0 40px 80px -20px rgba(0,0,0,.6), 0 0 0 1px hsl(0 0% 100% / .06)'
    }
  }, hasVideo ? /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    src: "assets/yk-hero.mp4",
    poster: "assets/yk-hero-poster.jpg",
    playsInline: true,
    controls: playing,
    preload: "metadata",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    },
    onEnded: () => setPlaying(false)
  }) : /*#__PURE__*/React.createElement("img", {
    src: "assets/yk-hero-poster.jpg",
    alt: "Young Knights training session",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), !playing && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, hsl(224 71% 4% / .15) 0%, hsl(224 71% 4% / .55) 100%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: hasVideo ? play : onStartTrial,
    "aria-label": hasVideo ? 'Play video' : 'Book free session',
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 92,
      height: 92,
      borderRadius: 999,
      background: 'hsl(var(--yk-red))',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0 20px 50px -10px rgba(0,0,0,.6), 0 0 0 8px hsl(var(--yk-red) / .25)',
      transition: 'transform .2s, box-shadow .2s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.06)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  }, /*#__PURE__*/React.createElement(Play, {
    size: 34,
    stroke: 0,
    style: {
      fill: 'currentColor',
      marginLeft: 5
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      bottom: 20,
      right: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'white'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement(Star, {
    key: i,
    size: 14,
    style: {
      color: 'hsl(var(--yk-gold))',
      fill: 'hsl(var(--yk-gold))'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'hsl(0 0% 100% / .85)'
    }
  }, "5.0 parent rating \xB7 ", hasVideo ? 'Watch the 60-second tour' : 'Watch our coaches in action'))));
}
Object.assign(window, {
  Header,
  Hero
});
})();

// --- components/Sections.jsx ---
;(function () {
// Program offer + problem/outcome + How it works + Coach + Reviews + Contact

function ProblemSection() {
  const items = [{
    icon: Brain,
    title: "Off the iPads",
    body: "We replace scrolling with barbells. Teens log their own sessions and see real progress every week."
  }, {
    icon: Shield,
    title: "Build bulletproof confidence",
    body: "Strength in the gym becomes strength on the field, in the classroom, and in how they carry themselves."
  }, {
    icon: TrendingUp,
    title: "Sport-specific edge",
    body: "Training built around the sport they already love — faster, stronger, harder to injure."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    style: {
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 80,
      alignItems: 'start'
    },
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kicker-line",
    style: {
      marginBottom: 24
    }
  }, "Why Young Knights"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 'clamp(36px, 5vw, 64px)',
      margin: 0
    }
  }, "Your teen deserves more than ", /*#__PURE__*/React.createElement("span", {
    className: "mark-stroke"
  }, "a screen"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'hsl(var(--yk-ink) / .7)',
      maxWidth: 480
    }
  }, "The teenage years decide how strong, resilient and confident your child becomes. We turn that window into an unfair advantage \u2014 with a coach who actually cares.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "card",
    style: {
      padding: 28,
      display: 'flex',
      gap: 20,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: 52,
      height: 52,
      borderRadius: 12,
      background: 'hsl(var(--yk-ink))',
      color: 'white',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(it.icon, {
    size: 24,
    stroke: 1.75
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      margin: 0,
      fontSize: 22,
      fontWeight: 800
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'hsl(var(--yk-ink) / .65)'
    }
  }, it.body))))))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `@media (max-width: 900px) { .two-col { grid-template-columns: 1fr !important; gap: 48px !important; } }`
    }
  }));
}
function ProgramSection({
  onStartTrial
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "program",
    className: "section-pad",
    style: {
      background: 'hsl(var(--yk-ink))',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: .4,
      pointerEvents: 'none',
      background: 'radial-gradient(800px 400px at 80% 0%, hsl(var(--yk-blue) / .3), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker-line kicker-dark",
    style: {
      marginBottom: 24
    }
  }, "The Flagship Program"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 'clamp(44px, 6vw, 84px)',
      margin: 0,
      color: 'white'
    }
  }, "The ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--yk-red))'
    }
  }, "12-Week"), /*#__PURE__*/React.createElement("br", null), "Strength & Conditioning Program."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 18,
      lineHeight: 1.55,
      color: 'hsl(0 0% 100% / .7)',
      maxWidth: 620
    }
  }, "Three months that change how your teen trains, eats, moves and believes. Built for ages 13\u201317 of any fitness level, at Knight Fitness Studio in Lawnton."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 14px',
      borderRadius: 999,
      border: '1px solid hsl(var(--yk-red) / .35)',
      background: 'hsl(var(--yk-red) / .08)',
      color: 'hsl(var(--yk-red))',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.01em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'hsl(var(--yk-red))'
    }
  }), "Up to 3 coached sessions/week \xB7 Strictly limited spots")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 40,
      alignItems: 'stretch'
    },
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-dark",
    style: {
      padding: 36,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      background: 'linear-gradient(160deg, hsl(var(--yk-ink-2)), hsl(220 45% 8%))',
      borderColor: 'hsl(var(--yk-red) / .3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip chip-gold"
  }, "12 Weeks"), /*#__PURE__*/React.createElement("span", {
    className: "chip chip-dark"
  }, "Ages 13\u201317"), /*#__PURE__*/React.createElement("span", {
    className: "chip chip-dark"
  }, "Small Groups"), /*#__PURE__*/React.createElement("span", {
    className: "chip chip-dark"
  }, "All Levels")), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 32,
      margin: '8px 0 0',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'white'
    }
  }, "Sports Development for Teens"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 12
    }
  }, ['Screening, testing & re-testing every 6 weeks', 'Programs personalised to their sport', 'Fun, challenging, results-driven sessions', 'Supervised by a qualified S&C coach', 'Nutrition & recovery education', 'A team, a coach, a sense of belonging'].map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      borderRadius: 999,
      background: 'hsl(var(--yk-red))',
      color: 'white',
      display: 'grid',
      placeItems: 'center',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Check, {
    size: 14,
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(0 0% 100% / .85)'
    }
  }, x)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 20,
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px',
      borderRadius: 14,
      background: 'hsl(0 0% 100% / .04)',
      border: '1px solid hsl(0 0% 100% / .1)'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 6,
      fontSize: 13,
      color: 'hsl(0 0% 100% / .75)'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: 999,
      background: 'hsl(var(--yk-red))',
      flex: 'none'
    }
  }), "Up to 3 coached sessions per week"), /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: 999,
      background: 'hsl(var(--yk-red))',
      flex: 'none'
    }
  }), "12-week foundation, then month-to-month"), /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: 999,
      background: 'hsl(var(--yk-red))',
      flex: 'none'
    }
  }), "Limited spots \u2014 we keep groups small"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary hide-cta-on-mobile",
    onClick: onStartTrial
  }, "Book Free Session ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18,
    className: "arrow"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#schedule",
    className: "btn btn-ghost-dark"
  }, "View Schedule")))), /*#__PURE__*/React.createElement(Photo, {
    kind: "bandsprints",
    style: {
      minHeight: 480,
      borderRadius: 16
    }
  }))));
}
function HowItWorksSection() {
  const steps = [{
    n: "01",
    title: "Book a Free Session",
    body: "Come in, meet Zac, try a session. No commitment, no pressure. Parents stay and watch."
  }, {
    n: "02",
    title: "Screening & Testing",
    body: "We baseline their movement, strength and goals. Identify strengths and weak links."
  }, {
    n: "03",
    title: "Personal Program",
    body: "They walk in knowing exactly what to do — built around their sport and level."
  }, {
    n: "04",
    title: "Coach + Community",
    body: "Supervised sessions 2–3x per week. Real coaching. A team that shows up for each other."
  }, {
    n: "05",
    title: "Re-Test & Level Up",
    body: "Every 6 weeks we re-test. You see the numbers. Your teen sees what hard work earns."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    className: "section-pad",
    style: {
      background: 'hsl(var(--yk-off))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 760,
      margin: '0 auto 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker-line",
    style: {
      marginBottom: 20,
      justifyContent: 'center'
    }
  }, "How It Works"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 'clamp(36px, 5.5vw, 64px)',
      margin: 0
    }
  }, "From first session to ", /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, "level up"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 16
    },
    className: "five-col"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "card",
    style: {
      padding: 24,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 44,
      fontWeight: 800,
      lineHeight: 1,
      color: 'hsl(var(--yk-red))',
      letterSpacing: '-0.05em',
      marginBottom: 16
    }
  }, s.n), /*#__PURE__*/React.createElement("h4", {
    className: "display",
    style: {
      margin: 0,
      fontSize: 19,
      fontWeight: 800
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'hsl(var(--yk-ink) / .6)'
    }
  }, s.body))))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
        @media (max-width: 1100px) { .five-col { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .five-col { grid-template-columns: 1fr !important; } }
      `
    }
  }));
}
function CoachSection({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "coach",
    className: "section-pad",
    style: {
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 64,
      alignItems: 'center'
    },
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    kind: "coach",
    label: "Zac Yow-yeh \xB7 Head Coach",
    objectPosition: "center 25%",
    style: {
      height: 560,
      width: '100%',
      borderRadius: 20
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kicker-line",
    style: {
      marginBottom: 20
    }
  }, "Meet Your Coach"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 'clamp(40px, 5vw, 68px)',
      margin: 0
    }
  }, "Zac Yow-yeh.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--yk-ink) / .4)'
    }
  }, "Head of Young Knights.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'hsl(var(--yk-ink) / .75)'
    }
  }, "Zac has spent years building young athletes in North Brisbane. He's the reason parents keep bringing siblings, the reason teens keep showing up, and the reason the Young Knights program actually works."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'hsl(var(--yk-ink) / .75)'
    }
  }, "Expect direct coaching, high standards, and a relentless belief that your teen can do more than they think they can."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CoachStat, {
    value: "8+",
    label: "Years coaching"
  }), /*#__PURE__*/React.createElement(CoachStat, {
    value: "500+",
    label: "Teens trained"
  }), /*#__PURE__*/React.createElement(CoachStat, {
    value: "13\u201317",
    label: "Age focus"
  }))))));
}
function CoachStat({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '3px solid hsl(var(--yk-red))',
      paddingLeft: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'hsl(var(--yk-ink) / .55)',
      marginTop: 6
    }
  }, label));
}
function SportsMarquee() {
  const sports = ['Rugby League', 'AFL', 'Football', 'Basketball', 'Netball', 'Touch', 'Athletics', 'Swimming', 'Cricket', 'Hockey', 'MMA', 'Rowing'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'hsl(var(--yk-ink))',
      color: 'white',
      padding: '48px 0',
      borderTop: '1px solid hsl(0 0% 100% / .08)',
      borderBottom: '1px solid hsl(0 0% 100% / .08)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'hsl(var(--yk-red))'
    }
  }, "Where our Young Knights come from")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee"
  }, [...sports, ...sports].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Trophy, {
    size: 20,
    style: {
      color: 'hsl(var(--yk-red))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontSize: 30,
      fontWeight: 700,
      color: 'white',
      letterSpacing: '-0.02em'
    }
  }, s), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(0 0% 100% / .25)',
      fontSize: 24
    }
  }, "\u2726"))))));
}
function ReviewsSection() {
  // Row A scrolls left, Row B scrolls right — for visual interest
  const rowA = [{
    name: "Kirsty Merchant",
    role: "Parent · Noah",
    quote: "Noah has been loving his time in the program and always wants to go and never complains that he has to go. We have noticed his body starting to change recently and he has a lot more confidence in himself."
  }, {
    name: "Melody Watkins",
    role: "Parent · Aaron",
    quote: "Big shout out to Zac and the Knight Fitness team. The improvement in Aaron's physical fitness and mindset towards fitness and healthy eating is unbelievable. These foundations will continue well into the future."
  }, {
    name: "Belinda Watson",
    role: "Parent · Harry",
    quote: "Harry's fitness levels have increased. He has also got increased confidence. Zac has been amazing with coaching Harry and has transformed him into a positive, driven teen. I couldn't thank him enough."
  }, {
    name: "Sarah Donnelly",
    role: "Parent · Jack, 14",
    quote: "Jack has gone from dreading school sport to being the first one ready for training. Zac gets teenage boys. It's honestly been life-changing for our whole family."
  }, {
    name: "Matt & Lisa P.",
    role: "Parents · Ollie, 16",
    quote: "Ollie's rugby coach pulled us aside and asked what we were doing differently. He's stronger, sharper, and way more coachable. The change in 10 weeks has been remarkable."
  }];
  const rowB = [{
    name: "Rachel Thompson",
    role: "Parent · Mia, 15",
    quote: "As a mum of a teen daughter, I was nervous about the gym environment. Zac created a space where Mia feels strong and supported — never intimidated. She looks forward to every session."
  }, {
    name: "David Pham",
    role: "Parent · Leo, 13",
    quote: "Leo used to come home from school and hit the couch. Now he's asking when his next Young Knights session is. The discipline has carried into his schoolwork too."
  }, {
    name: "Emma Hendricks",
    role: "Parent · Cooper",
    quote: "My son's confidence on and off the field has completely transformed. He walks taller. The coaching is next level — proper programming, not just workouts."
  }, {
    name: "Tom Sullivan",
    role: "Parent · Charlie",
    quote: "Worth every cent. Charlie has had injuries that physio couldn't fix — Zac identified a mobility issue in week 2 and he's been pain-free since. Actual coaching, not just sets and reps."
  }, {
    name: "Jess Marlow",
    role: "Parent · Ethan, 17",
    quote: "We've tried three other gyms. This is the first one Ethan has stuck with. Zac talks to him like an athlete, not a kid. That's everything."
  }];
  // Duplicate the arrays so the marquee loops seamlessly
  const dupA = [...rowA, ...rowA];
  const dupB = [...rowB, ...rowB];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad reviews-section",
    style: {
      background: 'hsl(var(--yk-off))',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      flexWrap: 'wrap',
      gap: 24,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kicker-line",
    style: {
      marginBottom: 16
    }
  }, "Parents & Teens"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 'clamp(36px, 5vw, 60px)',
      margin: 0
    }
  }, "Real reviews. Real ", /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, "results"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 20px',
      background: 'white',
      borderRadius: 14,
      border: '1px solid hsl(var(--yk-ink) / .08)',
      boxShadow: '0 6px 20px -8px rgba(0,0,0,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement(Star, {
    key: i,
    size: 20,
    style: {
      color: 'hsl(var(--yk-gold))',
      fill: 'hsl(var(--yk-gold))'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid hsl(var(--yk-ink) / .1)',
      paddingLeft: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, "350+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--yk-ink) / .6)',
      marginTop: 2
    }
  }, "5-star reviews"))))), /*#__PURE__*/React.createElement("div", {
    className: "rv-marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv-track rv-left"
  }, dupA.map((r, i) => /*#__PURE__*/React.createElement(ReviewCard, {
    key: `a${i}`,
    r: r
  })))), /*#__PURE__*/React.createElement("div", {
    className: "rv-marquee",
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv-track rv-right"
  }, dupB.map((r, i) => /*#__PURE__*/React.createElement(ReviewCard, {
    key: `b${i}`,
    r: r
  })))), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      marginTop: 40,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'hsl(var(--yk-ink) / .55)',
      margin: 0
    }
  }, "Sourced from Google Reviews & direct parent feedback \xB7 Knight Fitness Studio, Lawnton")), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
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
      `
    }
  }));
}
function ReviewCard({
  r
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 26,
      flex: '0 0 380px',
      width: 380,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement(Star, {
    key: i,
    size: 15,
    style: {
      color: 'hsl(var(--yk-gold))',
      fill: 'hsl(var(--yk-gold))'
    }
  }))), /*#__PURE__*/React.createElement("p", {
    className: "display",
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.55,
      fontWeight: 500,
      letterSpacing: '-0.005em',
      color: 'hsl(var(--yk-ink) / .85)'
    }
  }, "\"", r.quote, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      background: 'hsl(var(--yk-red) / .12)',
      color: 'hsl(var(--yk-red))',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 800,
      fontSize: 13
    }
  }, r.name.split(' ').map(p => p[0]).join('').slice(0, 2)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13.5
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'hsl(var(--yk-ink) / .55)'
    }
  }, r.role))));
}
function ResultsSection() {
  const results = [{
    value: '+30%',
    label: 'Average strength gain',
    sub: 'Measured from week 0 to week 12 across squat, deadlift and bench.'
  }, {
    value: '2–12kg',
    label: 'Body composition shift',
    sub: 'Leaner, stronger, more athletic — without crash diets or obsession.'
  }, {
    value: '8/10',
    label: 'Report better sleep',
    sub: 'Within the first 4 weeks. Training regulates energy, appetite and sleep.'
  }, {
    value: '94%',
    label: 'Train for 6+ months',
    sub: 'They keep showing up because they see and feel the difference.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "results",
    className: "section-pad",
    style: {
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker-line",
    style: {
      marginBottom: 20
    }
  }, "What They Walk Out With"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 'clamp(36px, 5vw, 60px)',
      margin: 0
    }
  }, "Real results, ", /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, "not hype"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'hsl(var(--yk-ink) / .7)'
    }
  }, "After 12 weeks of structured strength & conditioning, here's what we typically see in our Young Knights.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    },
    className: "four-col"
  }, results.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "card",
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-display",
    style: {
      fontSize: 'clamp(40px, 4vw, 56px)',
      color: 'hsl(var(--yk-ink))',
      lineHeight: 1
    }
  }, r.value), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 15,
      fontWeight: 800,
      letterSpacing: '-0.01em'
    }
  }, r.label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'hsl(var(--yk-ink) / .6)'
    }
  }, r.sub)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 12,
      color: 'hsl(var(--yk-ink) / .5)',
      textAlign: 'center'
    }
  }, "Results are indicative, based on Young Knights participants over the past 18 months. Every teen's journey is different.")), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
        @media (max-width: 1000px) { .four-col { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .four-col { grid-template-columns: 1fr !important; } }
      `
    }
  }));
}
function CtaBand({
  onStartTrial,
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'hsl(var(--yk-ink))',
      color: 'white',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: .5,
      background: 'radial-gradient(600px 300px at 20% 50%, hsl(var(--yk-red) / .2), transparent 60%), radial-gradient(600px 300px at 80% 50%, hsl(var(--yk-blue) / .25), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker-line kicker-dark",
    style: {
      marginBottom: 20,
      justifyContent: 'center'
    }
  }, "Ready when they are"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 'clamp(40px, 6vw, 80px)',
      margin: 0,
      color: 'white'
    }
  }, "Start their first session ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--yk-red))'
    }
  }, "free"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 18,
      color: 'hsl(0 0% 100% / .7)',
      maxWidth: 560,
      margin: '20px auto 0'
    }
  }, "No contracts. No pressure. Come meet the team, try a session, see if it's the right fit."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg hide-cta-on-mobile",
    onClick: onStartTrial
  }, "Book Free Session ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18,
    className: "arrow"
  })))));
}
function ContactSection({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "section-pad",
    style: {
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker-line",
    style: {
      marginBottom: 20,
      justifyContent: 'center'
    }
  }, "Get in Touch"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 'clamp(36px, 5vw, 56px)',
      margin: 0
    }
  }, "Better yet, come see us in person."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'hsl(var(--yk-ink) / .7)'
    }
  }, "Our team of knowledgeable coaches are standing by to answer your questions and show you around the studio.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40
    },
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 20,
      overflow: 'hidden',
      border: '1px solid hsl(var(--yk-ink) / .08)',
      boxShadow: '0 20px 40px -20px rgba(0,0,0,.15)',
      aspectRatio: '4 / 3',
      background: 'hsl(var(--yk-off))'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Knight Fitness Studio, Lawnton",
    src: "https://www.google.com/maps?q=Knight+Fitness+Lawnton+QLD&output=embed",
    width: "100%",
    height: "100%",
    style: {
      border: 0,
      display: 'block'
    },
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(ContactRow, {
    icon: MapPin,
    label: "Knight Fitness Studio",
    value: "664 Gympie Road, Lawnton QLD"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    icon: Phone,
    label: "Phone",
    value: "0452 519 877",
    href: "tel:0452519877"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    icon: Mail,
    label: "Email",
    value: "info@knightfitness.com.au",
    href: "mailto:info@knightfitness.com.au"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    icon: Clock,
    label: "Hours",
    value: "Mon\u2013Fri 3:00 PM \u2013 7:30 PM \xB7 Sat 6:00 AM \u2013 10:30 AM"
  }))), /*#__PURE__*/React.createElement(InlineContactForm, null))));
}
function ContactRow({
  icon: Icon,
  label,
  value,
  href
}) {
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: 44,
      height: 44,
      borderRadius: 10,
      background: 'hsl(var(--yk-ink))',
      color: 'white',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'hsl(var(--yk-ink) / .55)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 17,
      fontWeight: 700,
      marginTop: 2
    }
  }, value)));
  const style = {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit'
  };
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: style
  }, content) : /*#__PURE__*/React.createElement("div", {
    style: style
  }, content);
}
function InlineContactForm() {
  // GoHighLevel form — replaces the old fake form.
  // Submissions flow straight into the Young Knights GHL pipeline.
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      overflow: 'hidden',
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 8px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 800
    }
  }, "Send us a message"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'hsl(var(--yk-ink) / .65)',
      fontSize: 14,
      lineHeight: 1.5
    }
  }, "Drop your details and our team will reply within 24 hours.")), /*#__PURE__*/React.createElement("iframe", {
    src: "https://api.leadconnectorhq.com/widget/form/ATwKxumBh8CdpThEnu9I",
    style: {
      width: '100%',
      border: 'none',
      display: 'block',
      minHeight: 560
    },
    id: "inline-ghl-form-YK",
    title: "Contact Young Knights"
  }));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'hsl(var(--yk-ink))',
      color: 'white',
      padding: '56px 0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 48
    },
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "assets/yk-logo.svg",
    alt: "Young Knights",
    style: {
      height: 72,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 14px',
      borderRadius: 999,
      background: 'hsl(0 0% 100% / .06)',
      border: '1px solid hsl(0 0% 100% / .1)'
    }
  }, /*#__PURE__*/React.createElement(Shield, {
    size: 14,
    style: {
      color: 'hsl(var(--yk-red))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'hsl(0 0% 100% / .75)'
    }
  }, "Powered by Knight Fitness \xB7 Lawnton")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 14,
      color: 'hsl(0 0% 100% / .55)',
      lineHeight: 1.6,
      maxWidth: 420
    }
  }, "North Brisbane's home for teen strength, athletic development and unshakeable confidence. Based at Knight Fitness Studio, Lawnton QLD."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 1
    }
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement(Star, {
    key: i,
    size: 14,
    style: {
      color: 'hsl(var(--yk-gold))',
      fill: 'hsl(var(--yk-gold))'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'hsl(0 0% 100% / .7)',
      fontWeight: 600
    }
  }, "350+ 5-star reviews"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'hsl(var(--yk-red))',
      fontSize: 11
    }
  }, "Contact"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '16px 0 0',
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      fontSize: 14,
      color: 'hsl(0 0% 100% / .75)'
    }
  }, "664 Gympie Rd, Lawnton QLD"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "tel:0452519877",
    style: {
      color: 'hsl(0 0% 100% / .75)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, "0452 519 877")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@knightfitness.com.au",
    style: {
      color: 'hsl(0 0% 100% / .75)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, "info@knightfitness.com.au")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'hsl(var(--yk-red))',
      fontSize: 11
    }
  }, "Read"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '16px 0 0',
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "blog/",
    style: {
      color: 'hsl(0 0% 100% / .75)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, "Articles & guides")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "get-started.html",
    style: {
      color: 'hsl(0 0% 100% / .75)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, "Book a free session")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#faq",
    style: {
      color: 'hsl(0 0% 100% / .75)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, "Parent FAQs"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: '1px solid hsl(0 0% 100% / .08)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      fontSize: 12,
      color: 'hsl(0 0% 100% / .45)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Young Knights \xB7 Knight Fitness Pty Ltd"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "privacy.html",
    style: {
      color: 'hsl(0 0% 100% / .7)',
      textDecoration: 'none'
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("span", null, "Built for teens. Backed by coaches.")))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `@media (max-width: 720px) { .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`
    }
  }));
}
function FooterCol({
  title,
  links
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'hsl(var(--yk-red))',
      fontSize: 11
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '16px 0 0',
      display: 'grid',
      gap: 10
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'hsl(0 0% 100% / .75)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, l)))));
}
Object.assign(window, {
  ProblemSection,
  ProgramSection,
  HowItWorksSection,
  CoachSection,
  SportsMarquee,
  ReviewsSection,
  ResultsSection,
  CtaBand,
  ContactSection,
  Footer
});
})();

// --- components/Comparison.jsx ---
;(function () {
// Comparison table — Young Knights vs Regular Gym vs Group Fitness Class.
// Desktop: 4-col table. Mobile: 3 stacked cards.

function ComparisonSection({
  onStartTrial
}) {
  const rows = [{
    criterion: "Program built around their sport",
    sub: "Rugby, netball, AFL, soccer, swimming — each sport needs different training.",
    yk: {
      mark: true,
      text: "Personalised to sport & position"
    },
    gym: {
      mark: false,
      text: "No program"
    },
    group: {
      mark: false,
      text: "One-size-fits-all"
    }
  }, {
    criterion: "Qualified S&C coach on every rep",
    sub: "Not a gym floor attendant. A strength & conditioning specialist.",
    yk: {
      mark: true,
      text: "Every session"
    },
    gym: {
      mark: false,
      text: "Nobody"
    },
    group: {
      mark: "partial",
      text: "Group instructor"
    }
  }, {
    criterion: "Technique coached, not guessed",
    sub: "Poor form doesn't just limit results — it causes injury.",
    yk: {
      mark: true,
      text: "Hands-on coaching"
    },
    gym: {
      mark: false,
      text: "YouTube tutorials"
    },
    group: {
      mark: "partial",
      text: "Shouted cues"
    }
  }, {
    criterion: "Age-appropriate programming",
    sub: "Teens aren't small adults. They need training built for growing bodies.",
    yk: {
      mark: true,
      text: "Designed for 13–17"
    },
    gym: {
      mark: false,
      text: "Adult programs"
    },
    group: {
      mark: false,
      text: "Adult-focused class"
    }
  }, {
    criterion: "Re-testing to prove progress",
    sub: "Every 6 weeks we test the numbers — strength, speed, power.",
    yk: {
      mark: true,
      text: "Every 6 weeks"
    },
    gym: {
      mark: false,
      text: "Never"
    },
    group: {
      mark: false,
      text: "Never"
    }
  }, {
    criterion: "Training with their age group",
    sub: "A crew of teens who are all in the same boat.",
    yk: {
      mark: true,
      text: "13–17 only"
    },
    gym: {
      mark: false,
      text: "Adults everywhere"
    },
    group: {
      mark: false,
      text: "Adults everywhere"
    }
  }, {
    criterion: "Nutrition & recovery guidance",
    sub: "Eating, sleeping and recovery matter as much as training.",
    yk: {
      mark: true,
      text: "Built in"
    },
    gym: {
      mark: false,
      text: "None"
    },
    group: {
      mark: false,
      text: "None"
    }
  }, {
    criterion: "Injury reduction for their sport",
    sub: "The #1 reason teens drop out of sport is preventable injury.",
    yk: {
      mark: true,
      text: "Primary outcome"
    },
    gym: {
      mark: false,
      text: "Risk increases"
    },
    group: {
      mark: "partial",
      text: "Generic conditioning"
    }
  }];
  const markStyle = (value, onDark) => {
    const base = {
      width: 32,
      height: 32,
      borderRadius: 999,
      display: 'inline-grid',
      placeItems: 'center',
      flex: 'none'
    };
    if (value === true) return /*#__PURE__*/React.createElement("span", {
      style: {
        ...base,
        background: 'hsl(var(--yk-red))',
        color: 'white'
      }
    }, /*#__PURE__*/React.createElement(Check, {
      size: 18,
      stroke: 3
    }));
    if (value === "partial") return /*#__PURE__*/React.createElement("span", {
      style: {
        ...base,
        background: onDark ? 'hsl(0 0% 100% / .08)' : 'hsl(var(--yk-ink) / .06)',
        color: onDark ? 'hsl(0 0% 100% / .6)' : 'hsl(var(--yk-ink) / .55)',
        border: onDark ? '1px solid hsl(0 0% 100% / .15)' : '1px solid hsl(var(--yk-ink) / .15)',
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 1
      }
    }, "\u2013");
    return /*#__PURE__*/React.createElement("span", {
      style: {
        ...base,
        background: onDark ? 'hsl(0 0% 100% / .06)' : 'hsl(var(--yk-ink) / .05)',
        color: onDark ? 'hsl(0 0% 100% / .45)' : 'hsl(var(--yk-ink) / .4)',
        border: onDark ? '1px solid hsl(0 0% 100% / .12)' : '1px solid hsl(var(--yk-ink) / .12)'
      }
    }, /*#__PURE__*/React.createElement(X, {
      size: 14,
      stroke: 2.5
    }));
  };
  const columns = [{
    key: 'yk',
    kicker: 'Recommended',
    title: 'Young Knights',
    sub: 'Teen S&C program',
    highlight: true
  }, {
    key: 'gym',
    kicker: 'Alternative',
    title: 'Regular gym',
    sub: 'Training on their own',
    highlight: false
  }, {
    key: 'group',
    kicker: 'Alternative',
    title: 'Group fitness class',
    sub: 'Bootcamp / HIIT / CrossFit',
    highlight: false
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "compare",
    className: "section-pad",
    style: {
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780,
      margin: '0 auto 56px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker-line",
    style: {
      marginBottom: 20,
      justifyContent: 'center'
    }
  }, "What makes us different"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 'clamp(40px, 5.5vw, 68px)',
      margin: 0
    }
  }, "Not the gym. Not a ", /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, "class"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'hsl(var(--yk-ink) / .65)'
    }
  }, "There are plenty of places your teen could train. Here's why parents choose Young Knights over the alternatives.")), /*#__PURE__*/React.createElement("div", {
    className: "compare-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "compare-head-cell compare-head-empty"
  }), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.key,
    className: `compare-head-cell ${col.highlight ? 'compare-head-yk' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: col.highlight ? 'hsl(var(--yk-red))' : 'hsl(var(--yk-ink) / .45)',
      marginBottom: 6
    }
  }, col.kicker), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 22,
      fontWeight: 800,
      lineHeight: 1.1,
      color: col.highlight ? 'white' : 'hsl(var(--yk-ink))'
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginTop: 4,
      color: col.highlight ? 'hsl(0 0% 100% / .65)' : 'hsl(var(--yk-ink) / .55)'
    }
  }, col.sub))), rows.map((row, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "compare-criterion"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'hsl(var(--yk-ink))',
      lineHeight: 1.3
    }
  }, row.criterion), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'hsl(var(--yk-ink) / .55)',
      marginTop: 4,
      lineHeight: 1.5
    }
  }, row.sub)), columns.map(col => {
    const cell = row[col.key];
    const dark = col.highlight;
    return /*#__PURE__*/React.createElement("div", {
      key: col.key,
      className: `compare-cell ${dark ? 'compare-cell-yk' : ''}`
    }, markStyle(cell.mark, dark), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: dark ? 600 : 500,
        color: dark ? 'white' : 'hsl(var(--yk-ink) / .75)'
      }
    }, cell.text));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "compare-mobile"
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.key,
    className: `compare-card ${col.highlight ? 'compare-card-yk' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: col.highlight ? 'hsl(var(--yk-red))' : 'hsl(var(--yk-ink) / .45)',
      marginBottom: 6
    }
  }, col.kicker), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 26,
      fontWeight: 800,
      lineHeight: 1.1,
      color: col.highlight ? 'white' : 'hsl(var(--yk-ink))'
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      marginTop: 4,
      marginBottom: 20,
      color: col.highlight ? 'hsl(0 0% 100% / .65)' : 'hsl(var(--yk-ink) / .55)'
    }
  }, col.sub), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 12
    }
  }, rows.map((row, i) => {
    const cell = row[col.key];
    const dark = col.highlight;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, markStyle(cell.mark, dark), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1.3,
        color: dark ? 'white' : 'hsl(var(--yk-ink))'
      }
    }, row.criterion)));
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'hsl(var(--yk-ink) / .65)',
      maxWidth: 560,
      margin: '0 auto 24px'
    }
  }, "See the difference on the gym floor. Your teen's first session is on us."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg hide-cta-on-mobile",
    onClick: onStartTrial
  }, "Book Free Session ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18,
    className: "arrow"
  })))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
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
      `
    }
  }));
}
window.ComparisonSection = ComparisonSection;
})();

// --- components/FAQ.jsx ---
;(function () {
// FAQ — warm, parent-friendly accordion. One open at a time.

function FAQSection({
  onStartTrial
}) {
  const faqs = [{
    q: "What ages is Young Knights for?",
    a: "Young Knights is built specifically for teens aged 13–17. That covers early high school right through to senior year. If your child is 11 or 12 and is physically and mentally ready for a structured gym environment, have a chat with Zac — we'll give you an honest answer."
  }, {
    q: "How often does my teen need to train?",
    a: "Most of our Young Knights train 2–3 times per week, which is the sweet spot for real strength and conditioning gains alongside school, sport and rest. Some start with 2 sessions while they build the habit, then step up as they see results. We'll help you pick what fits their schedule."
  }, {
    q: "What if my teen has never lifted weights before? Is it safe?",
    a: "Absolutely safe — and absolutely welcome. Most teens who walk through our doors have never touched a barbell. Every program starts with movement screening and technique coaching before any real load. Zac is a qualified S&C coach and every session is supervised. Well-coached strength training is one of the safest things a teenager can do, and it's proven to reduce injury risk in sport."
  }, {
    q: "What do they need to wear and bring?",
    a: "Just active wear, closed-toe training shoes (no flat skate shoes for lifting days), a water bottle and a sweat towel. That's it. We supply everything else — all the equipment, a program, and a coach who cares."
  }, {
    q: "Can I stay and watch sessions?",
    a: "Yes, always. Parents are welcome to stay, watch and ask questions — especially for the first few sessions. A lot of parents love seeing their teen's progress first-hand. After a few weeks most teens are happy being dropped off, but you're never locked out."
  }, {
    q: "How much does it cost?",
    a: "Pricing depends on the program and how many sessions a week suit your teen, so we'd rather have a quick chat than quote a one-size-fits-all number. Call Zac on 0452 519 877 or book a free session and we'll walk you through the options — no pressure, no obligation. There are no joining fees or hidden extras."
  }, {
    q: "Do I need to sign a contract?",
    a: "The first 12 weeks are a committed foundation block — that's how long it takes to build real strength, clean up technique and see proper results. After the initial 12 weeks it rolls into month-to-month, so you can pause, stop or adjust at any time. No year-long lock-ins, no trap contracts."
  }, {
    q: "What happens on the free session?",
    a: "Book in, turn up, train. Your teen joins a real session, meets Zac and the crew, gets coached through a proper workout, and walks out knowing exactly what Young Knights is about. Parents stay if they want to. No pressure, no sales pitch at the end — if it's a fit, we talk next steps. If it's not, no hard feelings."
  }, {
    q: "What if my teen plays a specific sport — rugby, netball, AFL, footy?",
    a: "That's where we shine. Every program is personalised to the sport your teen plays, the position they play, and the demands of their season. Rugby kids get different work to netballers. Swimmers train differently to sprinters. We've worked with teens across rugby league, AFL, football, netball, touch, athletics, swimming, basketball, cricket and more — and we build their program to make them better at the game they love."
  }];
  const [openIdx, setOpenIdx] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "section-pad",
    style: {
      background: 'hsl(var(--yk-off))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 80,
      alignItems: 'start'
    },
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 100
    },
    className: "faq-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker-line",
    style: {
      marginBottom: 20
    }
  }, "Parent FAQs"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 'clamp(36px, 5vw, 60px)',
      margin: 0
    }
  }, "The questions ", /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, "every parent"), " asks us first."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'hsl(var(--yk-ink) / .7)',
      maxWidth: 420
    }
  }, "Still have questions? Give us a call on 0452 519 877 \u2014 or book a free session and see for yourself."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: onStartTrial
  }, "Book Free Session ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18,
    className: "arrow"
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:0452519877",
    className: "btn btn-outline"
  }, /*#__PURE__*/React.createElement(Phone, {
    size: 16
  }), " Call us"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, faqs.map((f, i) => {
    const open = openIdx === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "card",
      style: {
        padding: 0,
        overflow: 'hidden',
        borderColor: open ? 'hsl(var(--yk-ink) / .2)' : 'hsl(var(--yk-line))',
        boxShadow: open ? '0 10px 30px -14px rgba(0,0,0,.15)' : 'none',
        transition: 'border-color .2s, box-shadow .2s'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenIdx(open ? -1 : i),
      "aria-expanded": open,
      style: {
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
        font: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "display",
      style: {
        flex: 'none',
        width: 32,
        height: 32,
        borderRadius: 8,
        background: open ? 'hsl(var(--yk-red))' : 'hsl(var(--yk-off))',
        color: open ? 'hsl(26 83% 14%)' : 'hsl(var(--yk-ink) / .55)',
        display: 'grid',
        placeItems: 'center',
        fontSize: 13,
        fontWeight: 800,
        letterSpacing: 0,
        transition: 'background .2s, color .2s'
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      className: "display",
      style: {
        flex: 1,
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: '-0.015em',
        lineHeight: 1.35
      }
    }, f.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 36,
        height: 36,
        borderRadius: 999,
        background: open ? 'hsl(var(--yk-ink))' : 'transparent',
        color: open ? 'white' : 'hsl(var(--yk-ink) / .5)',
        border: open ? '1px solid hsl(var(--yk-ink))' : '1px solid hsl(var(--yk-line))',
        display: 'grid',
        placeItems: 'center',
        transition: 'transform .25s ease, background .2s, color .2s, border-color .2s',
        transform: open ? 'rotate(180deg)' : 'rotate(0)'
      }
    }, /*#__PURE__*/React.createElement(ChevronDown, {
      size: 18,
      stroke: 2.25
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: open ? '1fr' : '0fr',
        transition: 'grid-template-rows .3s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 26px 24px 78px',
        fontSize: 15.5,
        lineHeight: 1.65,
        color: 'hsl(var(--yk-ink) / .72)'
      }
    }, f.a))));
  })))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
        @media (max-width: 900px) {
          .faq-aside { position: static !important; }
        }
      `
    }
  }));
}
Object.assign(window, {
  FAQSection
});
})();

// --- components/Schedule.jsx ---
;(function () {
// Schedule section + expanded How It Works using real youngknights.com.au content

function ScheduleSection({
  onStartTrial
}) {
  // Real schedule from youngknights.com.au/schedule
  const schedule = [{
    day: 'MON',
    sessions: [{
      time: '4:50 PM',
      name: 'Young Knights · Teens 13–17',
      tag: 'After School'
    }, {
      time: '6:30 PM',
      name: 'Young Knights · Teens 13–17',
      tag: 'Evening'
    }]
  }, {
    day: 'TUE',
    sessions: [{
      time: '4:50 PM',
      name: 'Young Knights · Teens 13–17',
      tag: 'After School'
    }]
  }, {
    day: 'WED',
    sessions: [{
      time: '4:50 PM',
      name: 'Young Knights · Teens 13–17',
      tag: 'After School'
    }, {
      time: '6:30 PM',
      name: 'Young Knights · Teens 13–17',
      tag: 'Evening'
    }]
  }, {
    day: 'THU',
    sessions: [{
      time: '4:50 PM',
      name: 'Young Knights · Teens 13–17',
      tag: 'After School'
    }, {
      time: '6:30 PM',
      name: 'Young Knights · Teens 13–17',
      tag: 'Evening'
    }]
  }, {
    day: 'FRI',
    sessions: [{
      time: '4:50 PM',
      name: 'Young Knights · Teens 13–17',
      tag: 'After School'
    }]
  }, {
    day: 'SAT',
    sessions: [{
      time: '9:15 AM',
      name: 'Young Knights · Teens 13–17',
      tag: 'Weekend'
    }]
  }, {
    day: 'SUN',
    sessions: [],
    rest: true
  }];
  const tagColor = t => ({
    'After School': 'hsl(var(--yk-red))',
    'Evening': 'hsl(var(--yk-red-deep))',
    'Weekend': '#7db88f'
  })[t] || 'hsl(var(--yk-red))';
  return /*#__PURE__*/React.createElement("section", {
    id: "schedule",
    className: "section-pad",
    style: {
      background: 'hsl(var(--yk-ink))',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: .35,
      pointerEvents: 'none',
      background: 'radial-gradient(700px 350px at 85% 15%, hsl(var(--yk-red) / .22), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'end',
      marginBottom: 48
    },
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kicker-line kicker-dark",
    style: {
      marginBottom: 20
    }
  }, "Weekly Schedule"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 'clamp(40px, 5.5vw, 72px)',
      margin: 0,
      color: 'white'
    }
  }, "Train after school.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--yk-red))'
    }
  }, "Every week."))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'hsl(0 0% 100% / .7)',
      margin: 0,
      maxWidth: 440
    }
  }, "Sessions run Monday\u2013Friday after school and Saturday mornings. Pick the slots that work for your family \u2014 most teens attend 2\u20133 sessions per week.")), /*#__PURE__*/React.createElement("div", {
    className: "schedule-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 12
    }
  }, schedule.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderRadius: 16,
      border: '1px solid hsl(0 0% 100% / .1)',
      background: d.rest ? 'hsl(0 0% 100% / .02)' : 'hsl(0 0% 100% / .04)',
      padding: 20,
      minHeight: 260,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'hsl(var(--yk-red))',
      marginBottom: 20
    }
  }, d.day), d.rest ? /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'auto',
      textAlign: 'center',
      color: 'hsl(0 0% 100% / .35)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      marginBottom: 8
    }
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, "Rest Day")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      flex: 1
    }
  }, d.sessions.map((s, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      padding: '12px 14px',
      borderRadius: 10,
      background: 'hsl(0 0% 100% / .05)',
      borderLeft: `3px solid ${tagColor(s.tag)}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 18,
      fontWeight: 800,
      letterSpacing: '-0.01em',
      color: 'white'
    }
  }, s.time), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'hsl(0 0% 100% / .6)',
      marginTop: 4,
      fontWeight: 600
    }
  }, "Teens 13\u201317"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'inline-block',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: tagColor(s.tag)
    }
  }, s.tag))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      padding: '20px 24px',
      borderRadius: 14,
      background: 'hsl(0 0% 100% / .04)',
      border: '1px solid hsl(0 0% 100% / .08)',
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LegendDot, {
    color: "hsl(var(--yk-red))",
    label: "After School \xB7 Most popular"
  }), /*#__PURE__*/React.createElement(LegendDot, {
    color: "hsl(var(--yk-red-deep))",
    label: "Evening \xB7 Perfect if sport runs late"
  }), /*#__PURE__*/React.createElement(LegendDot, {
    color: "#7db88f",
    label: "Weekend"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary hide-cta-on-mobile",
    onClick: onStartTrial
  }, "Book Your First Session ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18,
    className: "arrow"
  }))))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
        @media (max-width: 1100px) {
          .schedule-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 720px) {
          .schedule-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `
    }
  }));
}
function LegendDot({
  color,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12,
      color: 'hsl(0 0% 100% / .7)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: color
    }
  }), label);
}

// Detailed How It Works — mirrors youngknights.com.au/how-it-works
function HowItWorksDetailed({
  onStartTrial,
  onContact
}) {
  const steps = [{
    n: '01',
    title: 'Book your free session',
    body: "Come in, meet Coach Zac and try a session. No commitment, no pressure. Parents are welcome to stay and watch — we want you to see exactly how we coach your teen.",
    photo: 'whiteboard',
    photoLabel: 'Session briefing · Knight Fitness Studio'
  }, {
    n: '02',
    title: 'Screening & performance testing',
    body: "We baseline every teen across movement, strength, speed, power and mobility. The data tells us what to train first, and gives us an honest starting line to measure progress against.",
    photo: 'bench',
    photoLabel: 'Coach Zac spotting a loaded bench press',
    reverse: true
  }, {
    n: '03',
    title: 'A personalised program',
    body: "Your teen walks in knowing exactly what to do. Their program is built around their sport, their goals and their current level — and updated regularly as they progress.",
    photo: 'rope',
    photoLabel: 'Program in motion — conditioning block'
  }, {
    n: '04',
    title: 'Coached sessions, every week',
    body: "Small-group coaching 2–3 times per week. Direct feedback on every rep. A team of teens chasing progress together — showing up, doing the work, getting better.",
    photo: 'thumbsup',
    photoLabel: 'Post-session — Young Knights crew',
    reverse: true
  }, {
    n: '05',
    title: 'Re-test every 6 weeks',
    body: "We re-test at weeks 6 and 12 so progress is measurable, not vibes. You see the numbers. Your teen sees what hard work actually earns — and carries that confidence everywhere else.",
    photo: 'squat',
    photoLabel: 'Re-test: loaded squat',
    objectPosition: 'center 12%'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    className: "section-pad",
    style: {
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 760,
      margin: '0 auto 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker-line",
    style: {
      marginBottom: 20,
      justifyContent: 'center'
    }
  }, "How It Works"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 'clamp(40px, 5.5vw, 68px)',
      margin: 0
    }
  }, "From first session to ", /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, "level up"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'hsl(var(--yk-ink) / .7)'
    }
  }, "Five steps. Twelve weeks. A system that actually works because every teen is coached as an individual.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 80
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 56,
      alignItems: 'center'
    },
    className: `hiw-row ${s.reverse ? 'hiw-reverse' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: s.reverse ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    kind: s.photo,
    label: s.photoLabel,
    objectPosition: s.objectPosition,
    style: {
      height: 460,
      width: '100%',
      borderRadius: 20
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      order: s.reverse ? 1 : 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 14px 8px 10px',
      borderRadius: 999,
      background: 'hsl(var(--yk-ink))',
      color: 'white',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 999,
      background: 'hsl(var(--yk-red))',
      color: 'white',
      display: 'grid',
      placeItems: 'center',
      fontSize: 12,
      fontWeight: 800
    }
  }, s.n), "Step ", s.n), /*#__PURE__*/React.createElement("h3", {
    className: "h-display",
    style: {
      fontSize: 'clamp(30px, 3.5vw, 44px)',
      margin: 0,
      letterSpacing: '-0.02em'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'hsl(var(--yk-ink) / .7)',
      maxWidth: 480
    }
  }, s.body), i === steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onStartTrial
  }, "First Session Free ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18,
    className: "arrow"
  })))))))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
        @media (max-width: 900px) {
          .hiw-row { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hiw-row > div { order: unset !important; }
          .hiw-row > div:first-child { order: 1 !important; }
          .hiw-row > div:last-child { order: 2 !important; }
        }
      `
    }
  }));
}
Object.assign(window, {
  ScheduleSection,
  HowItWorksDetailed
});
})();

// --- components/UrgencyBar.jsx ---
;(function () {
// Thin urgency bar — "Limited spots for this month's intake"

function UrgencyBar({
  onCta
}) {
  const [hidden, setHidden] = React.useState(false);
  if (hidden) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 50,
      background: 'linear-gradient(90deg, hsl(var(--yk-red)) 0%, hsl(var(--yk-red-deep)) 100%)',
      color: 'white',
      padding: '10px 20px',
      fontSize: 14,
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\uD83D\uDD25"), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 800,
      letterSpacing: '.01em'
    }
  }, "Limited spots"), /*#__PURE__*/React.createElement("span", null, "in this month's intake")), /*#__PURE__*/React.createElement("button", {
    onClick: onCta,
    style: {
      background: 'white',
      color: 'hsl(var(--yk-red))',
      padding: '6px 14px',
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, "Claim Your Spot \u2192"), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: () => setHidden(true),
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'hsl(0 0% 100% / .7)',
      fontSize: 18,
      lineHeight: 1,
      padding: 4
    }
  }, "\u2715"));
}
window.UrgencyBar = UrgencyBar;
})();

// --- components/Modals.jsx ---
;(function () {
// Modals for Free Session + Contact Coach

function Modal({
  open,
  onClose,
  children,
  maxWidth = 520
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      maxWidth
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      background: 'hsl(var(--yk-off))',
      border: 'none',
      width: 36,
      height: 36,
      borderRadius: 999,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      color: 'hsl(var(--yk-ink))'
    }
  }, /*#__PURE__*/React.createElement(X, {
    size: 18
  })), children));
}
function FreeTrialModal({
  open,
  onClose
}) {
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    parent: '',
    email: '',
    phone: '',
    teenName: '',
    teenAge: '',
    sport: '',
    level: '',
    day: '',
    time: ''
  });
  const next = () => setStep(s => Math.min(4, s + 1));
  const back = () => setStep(s => Math.max(1, s - 1));
  const reset = () => {
    setStep(1);
    setForm({
      parent: '',
      email: '',
      phone: '',
      teenName: '',
      teenAge: '',
      sport: '',
      level: '',
      day: '',
      time: ''
    });
  };
  React.useEffect(() => {
    if (open) reset();
  }, [open]);
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    maxWidth: 540
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 32px 0',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip chip-gold",
    style: {
      fontSize: 11
    }
  }, "FREE SESSION"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--yk-ink) / .5)',
      fontWeight: 600
    }
  }, "Step ", step, " of 4")), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      margin: 0,
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: '-0.02em'
    }
  }, step === 1 && "Let's start with your teen", step === 2 && "Which sport and level?", step === 3 && "Pick a day", step === 4 && "How do we reach you?"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'hsl(var(--yk-off))',
      borderRadius: 999,
      marginTop: 16,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${step * 25}%`,
      background: 'hsl(var(--yk-gold))',
      transition: 'width .3s'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'grid',
      gap: 14
    }
  }, step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, "Teen's first name"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: form.teenName,
    onChange: e => setForm({
      ...form,
      teenName: e.target.value
    }),
    placeholder: "e.g. Ethan"
  })), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, "Teen's age"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, ['13', '14', '15', '16', '17'].map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    type: "button",
    className: "tweak-chip",
    style: {
      background: form.teenAge === a ? 'hsl(var(--yk-ink))' : 'white',
      color: form.teenAge === a ? 'white' : 'hsl(var(--yk-ink))',
      borderColor: form.teenAge === a ? 'hsl(var(--yk-ink))' : 'hsl(var(--yk-line))',
      padding: '12px 20px',
      fontSize: 15
    },
    onClick: () => setForm({
      ...form,
      teenAge: a
    })
  }, a))))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, "Main sport (or general fitness)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 8
    }
  }, ['Rugby League', 'AFL', 'Football', 'Netball', 'Basketball', 'General fitness'].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    type: "button",
    style: {
      padding: '14px',
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      background: form.sport === s ? 'hsl(var(--yk-ink))' : 'white',
      color: form.sport === s ? 'white' : 'hsl(var(--yk-ink))',
      border: `1.5px solid ${form.sport === s ? 'hsl(var(--yk-ink))' : 'hsl(var(--yk-line))'}`,
      textAlign: 'left'
    },
    onClick: () => setForm({
      ...form,
      sport: s
    })
  }, s)))), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, "Gym experience"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ['None', 'Some', 'Experienced'].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    type: "button",
    className: "tweak-chip",
    style: {
      background: form.level === l ? 'hsl(var(--yk-ink))' : 'white',
      color: form.level === l ? 'white' : 'hsl(var(--yk-ink))',
      borderColor: form.level === l ? 'hsl(var(--yk-ink))' : 'hsl(var(--yk-line))',
      padding: '12px 18px',
      fontSize: 14
    },
    onClick: () => setForm({
      ...form,
      level: l
    })
  }, l))))), step === 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, "Preferred day"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 8
    }
  }, ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    type: "button",
    style: {
      padding: '14px',
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 700,
      cursor: 'pointer',
      background: form.day === d ? 'hsl(var(--yk-gold))' : 'white',
      color: form.day === d ? 'hsl(26 83% 14%)' : 'hsl(var(--yk-ink))',
      border: `1.5px solid ${form.day === d ? 'hsl(var(--yk-gold))' : 'hsl(var(--yk-line))'}`
    },
    onClick: () => setForm({
      ...form,
      day: d
    })
  }, d)))), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, "Preferred time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 8
    }
  }, ['3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    type: "button",
    style: {
      padding: '14px',
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      background: form.time === t ? 'hsl(var(--yk-ink))' : 'white',
      color: form.time === t ? 'white' : 'hsl(var(--yk-ink))',
      border: `1.5px solid ${form.time === t ? 'hsl(var(--yk-ink))' : 'hsl(var(--yk-line))'}`
    },
    onClick: () => setForm({
      ...form,
      time: t
    })
  }, t))))), step === 4 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, "Parent's name"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: form.parent,
    onChange: e => setForm({
      ...form,
      parent: e.target.value
    }),
    placeholder: "Your name"
  })), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, "Email"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    type: "email",
    value: form.email,
    onChange: e => setForm({
      ...form,
      email: e.target.value
    }),
    placeholder: "you@email.com"
  })), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, "Phone"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: form.phone,
    onChange: e => setForm({
      ...form,
      phone: e.target.value
    }),
    placeholder: "0400 000 000"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 12
    }
  }, step > 1 && /*#__PURE__*/React.createElement("button", {
    onClick: back,
    className: "btn btn-outline",
    style: {
      flex: '0 0 auto'
    }
  }, "Back"), step < 4 && /*#__PURE__*/React.createElement("button", {
    onClick: next,
    className: "btn btn-dark",
    style: {
      flex: 1,
      justifyContent: 'center'
    }
  }, "Continue ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18,
    className: "arrow"
  })), step === 4 && /*#__PURE__*/React.createElement("button", {
    onClick: next,
    className: "btn btn-primary",
    style: {
      flex: 1,
      justifyContent: 'center'
    }
  }, "Book Free Session ", /*#__PURE__*/React.createElement(Check, {
    size: 18
  })))), step === 5 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      margin: '0 auto 20px',
      borderRadius: 999,
      background: 'hsl(var(--yk-gold))',
      color: 'hsl(26 83% 14%)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Check, {
    size: 36,
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 24,
      margin: 0,
      fontWeight: 800
    }
  }, "Booked."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      color: 'hsl(var(--yk-ink) / .6)'
    }
  }, "Zac will confirm ", form.teenName || 'your teen', "'s session on ", form.day || 'their chosen day', " at ", form.time || 'their chosen time', ".")));
}
function ContactCoachModal({
  open,
  onClose
}) {
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    maxWidth: 560
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 28px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 999,
      background: 'linear-gradient(135deg, hsl(45 93% 47%), hsl(36 100% 50%))',
      color: 'hsl(26 83% 14%)',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 800
    }
  }, "ZY"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 20,
      fontWeight: 800
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'hsl(var(--yk-ink) / .55)'
    }
  }, "Usually replies within a few hours")))), /*#__PURE__*/React.createElement("iframe", {
    src: "https://api.leadconnectorhq.com/widget/form/ATwKxumBh8CdpThEnu9I",
    style: {
      width: '100%',
      border: 'none',
      display: 'block',
      minHeight: 560
    },
    id: "modal-ghl-form-YK",
    title: "Get in touch"
  }));
}
Object.assign(window, {
  Modal,
  FreeTrialModal,
  ContactCoachModal
});
})();

// --- components/App.jsx ---
;(function () {
// Homepage app shell — composes all sections and mounts to #root.

const TWEAKS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroHeadline": "Give your teen an unfair advantage.",
  "accent": "gold",
  "showStickyCta": true
} /*EDITMODE-END*/;
function App() {
  const [contactOpen, setContactOpen] = React.useState(false);
  const [tweaksOn, setTweaksOn] = React.useState(false);
  const [tweaks, setTweaks] = React.useState(TWEAKS_DEFAULTS);

  // Main booking flow — routes to the Get Started funnel
  // which qualifies leads with 4 questions before revealing the GHL calendar.
  const openTrial = () => {
    window.location.href = 'get-started.html';
  };

  // Tweaks protocol
  React.useEffect(() => {
    const onMsg = e => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') setTweaksOn(true);
      if (e.data.type === '__deactivate_edit_mode') setTweaksOn(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const setTweak = (k, v) => {
    const edits = {
      [k]: v
    };
    setTweaks(t => ({
      ...t,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
  };

  // Reveal on scroll
  React.useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) en.target.classList.add('in');
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    "data-accent": tweaks.accent
  }, /*#__PURE__*/React.createElement(UrgencyBar, {
    onCta: openTrial
  }), /*#__PURE__*/React.createElement(Header, {
    onStartTrial: openTrial,
    onContact: () => setContactOpen(true)
  }), /*#__PURE__*/React.createElement(Hero, {
    onStartTrial: openTrial,
    onContact: () => setContactOpen(true)
  }), /*#__PURE__*/React.createElement(ProblemSection, null), /*#__PURE__*/React.createElement(ProgramSection, {
    onStartTrial: openTrial
  }), /*#__PURE__*/React.createElement(HowItWorksDetailed, {
    onStartTrial: openTrial,
    onContact: () => setContactOpen(true)
  }), /*#__PURE__*/React.createElement(CoachSection, {
    onContact: () => setContactOpen(true)
  }), /*#__PURE__*/React.createElement(ResultsSection, null), /*#__PURE__*/React.createElement(ComparisonSection, {
    onStartTrial: openTrial
  }), /*#__PURE__*/React.createElement(FAQSection, {
    onStartTrial: openTrial
  }), /*#__PURE__*/React.createElement(ScheduleSection, {
    onStartTrial: openTrial
  }), /*#__PURE__*/React.createElement(SportsMarquee, null), /*#__PURE__*/React.createElement(ReviewsSection, null), /*#__PURE__*/React.createElement(ContactSection, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(ContactCoachModal, {
    open: contactOpen,
    onClose: () => setContactOpen(false)
  }), tweaks.showStickyCta && /*#__PURE__*/React.createElement("div", {
    className: "sticky-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      flex: 1,
      justifyContent: 'center',
      boxShadow: '0 10px 30px -6px rgba(0,0,0,.3)'
    },
    onClick: openTrial
  }, "Book Free Session ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18,
    className: "arrow"
  }))), tweaksOn && /*#__PURE__*/React.createElement("div", {
    className: "tweaks"
  }, /*#__PURE__*/React.createElement("h4", null, "Tweaks"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'hsl(var(--yk-ink) / .5)',
      marginBottom: 6,
      textTransform: 'uppercase',
      letterSpacing: '.1em'
    }
  }, "Accent color"), /*#__PURE__*/React.createElement("div", {
    className: "tweak-row"
  }, ['gold', 'blue', 'flame', 'green'].map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: 'tweak-chip' + (tweaks.accent === c ? ' on' : ''),
    onClick: () => setTweak('accent', c)
  }, c)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'hsl(var(--yk-ink) / .5)',
      marginBottom: 6,
      textTransform: 'uppercase',
      letterSpacing: '.1em'
    }
  }, "Sticky mobile CTA"), /*#__PURE__*/React.createElement("div", {
    className: "tweak-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'tweak-chip' + (tweaks.showStickyCta ? ' on' : ''),
    onClick: () => setTweak('showStickyCta', true)
  }, "On"), /*#__PURE__*/React.createElement("button", {
    className: 'tweak-chip' + (!tweaks.showStickyCta ? ' on' : ''),
    onClick: () => setTweak('showStickyCta', false)
  }, "Off")))));
}
Object.assign(window, {
  App
});

// In the browser, hydrate the pre-rendered HTML (or mount fresh if absent).
// During build-time pre-rendering there is no document, so this is skipped.
if (typeof document !== 'undefined') {
  const rootEl = document.getElementById('root');
  if (rootEl.hasChildNodes()) {
    ReactDOM.hydrateRoot(rootEl, /*#__PURE__*/React.createElement(App, null));
  } else {
    ReactDOM.createRoot(rootEl).render(/*#__PURE__*/React.createElement(App, null));
  }
}
})();
