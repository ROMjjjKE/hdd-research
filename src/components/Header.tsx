import { useEffect, useRef } from 'react';

const PHONE = '+375 29 677-70-68';
const TEL = 'tel:+375296777068';

export default function Header() {
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="hdr">
      <div className="wrap hdr__in">
        <a className="hdr__brand" href="#top">
          HDD<i>·</i>RESEARCH<span className="hdr__city">Гомель</span>
        </a>
        <nav className="hdr__nav" aria-label="Разделы">
          <a href="#nositeli">Носители</a>
          <a href="#laboratoriya">Лаборатория</a>
          <a href="#poryadok">Порядок</a>
          <a href="#voprosy">Вопросы</a>
        </nav>
        <a className="hdr__tel" href={TEL}>{PHONE}</a>
      </div>
      <span className="hdr__bar" ref={bar} />
    </header>
  );
}
