import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900 });
await p.goto('http://127.0.0.1:4290/hdd-research/', { waitUntil: 'networkidle2' });
await new Promise(r => setTimeout(r, 500));
console.log(await p.evaluate(() => {
  const e = document.querySelector('.hero__platter'); const r = e.getBoundingClientRect();
  return { w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.x), y: Math.round(r.y) };
}));
await b.close();
