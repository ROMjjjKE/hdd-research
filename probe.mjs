import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const p = await b.newPage();
const errs = [];
p.on('pageerror', e => errs.push(e.message));
await p.setViewport({ width: 1440, height: 900 });
await p.goto('http://127.0.0.1:4290/hdd-research/', { waitUntil: 'networkidle2' });
await p.evaluate(() => document.fonts.ready);
await new Promise(r => setTimeout(r, 700));
console.log(JSON.stringify(await p.evaluate(() => {
  const c = document.createElement('canvas').getContext('2d');
  const s = 'Восстановление данных с жёстких дисков, SSD и RAID-массивов, 8–10 мм';
  const w = f => { c.font = f; return +c.measureText(s).width.toFixed(1); };
  return {
    jbm: w('400 40px "JetBrains Mono"'), courier: w('400 40px "Courier New"'),
    inter: w('400 40px Inter'), arial: w('400 40px Arial'),
    rJbm: +(w('400 40px "JetBrains Mono"') / w('400 40px "Courier New"')).toFixed(4),
    rInter: +(w('400 40px Inter') / w('400 40px Arial')).toFixed(4),
    h1: document.querySelector('h1').textContent.trim().slice(0, 60),
    fonts: [...document.fonts].filter(f => f.status === 'loaded').length,
    media: document.querySelectorAll('.media__row').length,
  };
}), null, 1), errs);
await b.close();
