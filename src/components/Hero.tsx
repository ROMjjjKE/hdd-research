export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div>
          <p className="micro">Центр восстановления информации · Гомель</p>
          <h1>
            Данные с диска <em>достают</em>, а не «пробуют»
          </h1>
          <p className="hero__lead">
            HDD, SSD, RAID-массивы, флешки, телефоны. Конечный исполнитель, а не посредник:
            работаем в своей лаборатории в Гомеле двадцать лет.
          </p>
          <div className="hero__cta">
            <a className="btn" href="tel:+375296777068">Позвонить в лабораторию</a>
            <a className="btn btn--ghost" href="#nositeli">Что восстанавливаем</a>
          </div>
          <p className="hero__hint">
            Кирова, 55, офис 312 · 3 этаж · +375 29 838-70-68
          </p>
        </div>

        <div className="hero__platter" aria-hidden="true">
          <div className="platter">
            <div className="platter__hub" />
            <div className="platter__arm" />
            <div className="platter__tick">
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i} style={{ transform: `rotate(${i * 15}deg)` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
