import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const w of [320, 390, 480, 768, 1024, 1200, 1440, 1680]) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: 900 });
  await p.goto('http://127.0.0.1:4290/hdd-research/', { waitUntil: 'networkidle2' });
  await p.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 400));
  const r = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth, h1: getComputedStyle(document.querySelector('h1')).fontSize }));
  console.log(w, r.sw <= r.iw + 1 ? 'ok' : 'OVERFLOW ' + r.sw, r.h1);
  await p.close();
}
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900 });
await p.goto('http://127.0.0.1:4290/hdd-research/', { waitUntil: 'networkidle2' });
await p.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; });
await new Promise(r => setTimeout(r, 600));
const pre = await p.evaluate(() => Math.round(document.querySelector('#laboratoriya').getBoundingClientRect().top + window.scrollY));
await p.evaluate(y => window.scrollTo({ top: y - 500, behavior: 'instant' }), pre);
await new Promise(r => setTimeout(r, 1000));
const st = await p.evaluate(() => Math.round(document.querySelector('.gap__stage').getBoundingClientRect().top + window.scrollY));
for (const off of [30, 400, 800, 1200, 1600]) {
  await p.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), st + off);
  await new Promise(r => setTimeout(r, 500));
  console.log(off, await p.evaluate(() => ({
    cls: document.querySelector('.gap').className.split(' ').pop(),
    y: Math.round(document.querySelector('.gap__stage').getBoundingClientRect().top),
    gap: getComputedStyle(document.querySelector('.gap__stage')).getPropertyValue('--gap'),
    on: document.querySelectorAll('.gap__line.on').length,
    cnt: document.querySelector('.gap__count').textContent,
  })));
}
await b.close();
