import puppeteer from 'puppeteer-core';
const URL = 'https://romjjjke.github.io/hdd-research/';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const p = await b.newPage();
const errs = [];
p.on('pageerror', e => errs.push(e.message));
await p.setViewport({ width: 1440, height: 900 });
await p.goto(URL, { waitUntil: 'networkidle2' });
await p.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; });
await p.evaluate(() => document.fonts.ready);
await new Promise(r => setTimeout(r, 1200));
await p.screenshot({ path: 'screenshots/desktop-1440.png' });
const go = async (sel, off, name, approach = true) => {
  const top = await p.evaluate(s => Math.round(document.querySelector(s).getBoundingClientRect().top + window.scrollY), sel);
  if (approach) { await p.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), Math.max(0, top - 600)); await new Promise(r => setTimeout(r, 1100)); }
  const y2 = await p.evaluate(s => Math.round(document.querySelector(s).getBoundingClientRect().top + window.scrollY), sel);
  await p.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), y2 + off);
  await new Promise(r => setTimeout(r, 900));
  await p.screenshot({ path: 'screenshots/' + name + '.png' });
};
await go('#nositeli', 0, 'desktop-nositeli');
await go('#laboratoriya', 1150, 'desktop-zazor');
await go('#laboratoriya', 2400, 'desktop-laboratoriya');
await go('#ispolnitel', 60, 'desktop-ispolnitel');
await go('#poryadok', 60, 'desktop-poryadok');
await go('#zayavka', 40, 'desktop-zayavka');
const st = await p.evaluate(() => ({ cls: document.querySelector('.gap').className.split(' ').pop(), cnt: document.querySelector('.gap__count')?.innerText }));
console.log('gap', st, 'errors', errs.slice(0, 2));
// og
await p.setViewport({ width: 1200, height: 630 });
await p.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
await new Promise(r => setTimeout(r, 800));
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 86 });
// mobile
const m = await b.newPage();
await m.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await m.goto(URL, { waitUntil: 'networkidle2' });
await m.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; });
await m.evaluate(() => document.fonts.ready);
await new Promise(r => setTimeout(r, 1100));
await m.screenshot({ path: 'screenshots/mobile-390.png' });
for (const [sel, name] of [['#nositeli', 'mobile-390-nositeli'], ['#laboratoriya', 'mobile-390-zazor'], ['#zayavka', 'mobile-390-zayavka']]) {
  await m.evaluate(s => { const el = document.querySelector(s); window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 40, behavior: 'instant' }); }, sel);
  await new Promise(r => setTimeout(r, 700));
  await m.screenshot({ path: 'screenshots/' + name + '.png' });
}
console.log('shots ok');
await b.close();
