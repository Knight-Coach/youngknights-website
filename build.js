// Compiles the JSX in components/ into plain JS bundles in js/.
// Run with: npm install && npm run build:jsx
// The HTML pages load the bundles from js/ — edit the .jsx sources,
// rebuild, and commit both.
// Named build:jsx (not build) on purpose: Vercel auto-runs a script named
// "build" and then expects a public/ output directory, but this site is
// served statically from the repo root with the js/ bundles committed.

const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');

const BUNDLES = {
  'js/home.js': [
    'Icons', 'Photo', 'Hero', 'Sections', 'Comparison',
    'FAQ', 'Schedule', 'UrgencyBar', 'Modals', 'App',
  ],
  'js/get-started.js': ['Icons', 'GetStarted', 'GetStartedApp'],
};

fs.mkdirSync('js', { recursive: true });

for (const [out, parts] of Object.entries(BUNDLES)) {
  const compiled = parts.map((name) => {
    const src = fs.readFileSync(path.join('components', `${name}.jsx`), 'utf8');
    const { code } = babel.transformSync(src, {
      filename: `${name}.jsx`,
      presets: [['@babel/preset-react', { runtime: 'classic' }]],
      compact: false,
    });
    // Each file shares globals via explicit window assignments, so an IIFE
    // keeps top-level const/let declarations from colliding across files.
    return `// --- components/${name}.jsx ---\n;(function () {\n${code}\n})();`;
  });
  fs.writeFileSync(out, compiled.join('\n\n') + '\n');
  console.log(`built ${out} (${(fs.statSync(out).size / 1024).toFixed(0)} KB)`);
}
