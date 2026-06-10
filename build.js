// Compiles the JSX in components/ into plain JS bundles in js/, then
// pre-renders each page's HTML into the markers in index.html and
// get-started.html so crawlers and link previews see full content.
//
// Run with: npm install && npm run build:jsx
// Edit the .jsx sources, rebuild, and commit the regenerated js/ bundles
// and HTML files together.
//
// Named build:jsx (not build) on purpose: Vercel auto-runs a script named
// "build" and then expects a public/ output directory, but this site is
// served statically from the repo root with the build output committed.

const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const BUNDLES = {
  'js/home.js': [
    'Icons', 'Photo', 'Hero', 'Sections', 'Comparison',
    'FAQ', 'Schedule', 'UrgencyBar', 'Modals', 'App',
  ],
  'js/get-started.js': ['Icons', 'GetStarted', 'GetStartedApp'],
};

// page -> [bundle, html file, global component name to render]
const PAGES = {
  home: ['js/home.js', 'index.html', 'App'],
  'get-started': ['js/get-started.js', 'get-started.html', 'GetStarted'],
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

for (const [page, [bundle, htmlFile, componentName]] of Object.entries(PAGES)) {
  // Evaluate the bundle in a sandbox where window is the global object and
  // document is absent, so components register themselves but don't mount.
  const sandbox = { React, console };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(bundle, 'utf8'), sandbox, { filename: bundle });

  const rendered = ReactDOMServer.renderToString(
    React.createElement(sandbox[componentName])
  );

  const html = fs.readFileSync(htmlFile, 'utf8');
  const begin = `<!--prerender:${page}:begin-->`;
  const end = `<!--prerender:${page}:end-->`;
  const pattern = new RegExp(`${begin}[\\s\\S]*?${end}`);
  if (!pattern.test(html)) {
    throw new Error(`missing ${begin} ... ${end} markers in ${htmlFile}`);
  }
  const replacement = `${begin}\n<div id="root">${rendered}</div>\n${end}`;
  fs.writeFileSync(htmlFile, html.replace(pattern, replacement));
  console.log(`pre-rendered ${htmlFile} (${(rendered.length / 1024).toFixed(0)} KB of HTML)`);
}
