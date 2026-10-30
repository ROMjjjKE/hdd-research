import { useEffect, useRef, useState } from 'react';

const LINES = [
  'Поверхность пластины проходит под головкой со скоростью около 120 км/ч.',
  'Магнитная головка не касается диска: она парит на потоке воздуха.',
  'Пылинка крупнее этого зазора в десятки раз — она сносит и поверхность, и головку.',
  'Поэтому диск вскрывают только в ламинарном боксе, а не на столе в сервисе.',
];

export default function Gap() {
  const [pin, setPin] = useState(false);
  const [step, setStep] = useState(0);
  const sec = useRef<HTMLElement | null>(null);
  const stage = useRef<HTMLDivElement | null>(null);
  const dot = useRef<HTMLDivElement | null>(null);
  const big = useRef<HTMLDivElement | null>(null);
  const stepRef = useRef(0);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 980px)');
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!desktop.matches || calm.matches) return;

    let killed = false;
    let cleanup: (() => void) | null = null;

    const begin = () => {
      Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ default: gsap }, { ScrollTrigger }]) => {
        if (killed || !sec.current || !stage.current) return;
        gsap.registerPlugin(ScrollTrigger);
        setPin(true);

        requestAnimationFrame(() => {
          const st = ScrollTrigger.create({
            trigger: sec.current!,
            start: 'top top',
            end: () => '+=' + Math.round(window.innerHeight * 1.8),
            pin: stage.current!,
            pinSpacing: true,
            scrub: 0.5,
            invalidateOnRefresh: true,
            onUpdate: self => {
              const p = self.progress;
              stage.current?.style.setProperty('--gap', (8 + p * 132).toFixed(1) + 'px');
              if (big.current) {
                const t = Math.min(1, Math.max(0, (p - 0.18) / 0.22));
                big.current.style.opacity = String(t);
                big.current.style.transform = `translate3d(0, ${((1 - t) * 12).toFixed(1)}px, 0)`;
              }
              if (dot.current) {
                const d = p > 0.5 ? Math.min(1, (p - 0.5) / 0.5) : 0;
                dot.current.style.opacity = String(d > 0 ? Math.min(1, d * 2.2) : 0);
                dot.current.style.transform = `translate3d(0, ${(-96 + d * 78).toFixed(1)}px, 0)`;
              }
              const next = LINES.filter((_, i) => p >= 0.06 + i * 0.26).length;
              if (next !== stepRef.current) {
                stepRef.current = next;
                setStep(next);
              }
            },
          });
          cleanup = () => st.kill();
        });
      });
    };

    const io = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          io.disconnect();
          setTimeout(begin, 60);
        }
      },
      { rootMargin: '320px 0px' }
    );
    if (sec.current) io.observe(sec.current);

    return () => {
      killed = true;
      io.disconnect();
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section className={'gap' + (pin ? ' gap--pin' : ' gap--manual')} id="laboratoriya" ref={sec}>
      <div className="gap__stage" ref={stage}>
        <div className="wrap">
          <p className="micro">02 / почему это не делают «на коленке»</p>
          <div className="gap__big" ref={big} style={{ opacity: pin ? 0 : 1 }}>
            <div className="gap__n">
              2 <i>нм</i>
            </div>
            <p className="gap__caption">расстояние между головкой и пластиной · около шести молекул азота</p>
          </div>
          <div className="gap__labels">
            {LINES.map((l, i) => (
              <p className={'gap__line' + (i < step || !pin ? ' on' : '')} key={l}>
                <b>{String(i + 1).padStart(2, '0')}</b> {l}
              </p>
            ))}
          </div>
        </div>

        <div className="gap__field" aria-hidden="true">
          <div className="gap__head">
            <span className="gap__tag">магнитная головка</span>
          </div>
          <div className="gap__surface">
            <span className="gap__tag gap__tag--low">поверхность · ~120 км/ч</span>
          </div>
          <div className="gap__particle" ref={dot} />
        </div>

        <span className="gap__count">{pin ? `0${Math.min(4, step + 1)} / 04` : '04 / 04'}</span>
      </div>
    </section>
  );
}
