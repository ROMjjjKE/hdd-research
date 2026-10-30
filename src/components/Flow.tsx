const STEPS: Array<[string, string, string]> = [
  ['01', 'Приём', 'Диск, телефон или массив попадают в лабораторию. Фиксируем состояние и комплектность.'],
  ['02', 'Диагностика', 'Определяем, что именно сломалось: логика, электроника, механика, прошивка.'],
  ['03', 'Копия', 'Если носитель читается — снимаем образ. Работаем с копией, а не с оригиналом.'],
  ['04', 'Восстановление', 'Ремонт в чистой зоне, донор, прошивка, посекторное чтение, сборка RAID.'],
  ['05', 'Выдача', 'Отдаём данные на носитель, который вы принесёте: диск остаётся у нас как есть.'],
];

export default function Flow() {
  return (
    <section className="section" id="poryadok">
      <div className="wrap">
        <div className="shead reveal">
          <p className="shead__num">05 / порядок</p>
          <h2>Что происходит с носителем</h2>
          <p className="shead__note">Пять шагов, и первый из них — не «починить», а «не сделать хуже».</p>
        </div>

        <div className="flow">
          {STEPS.map(([n, t, d]) => (
            <div className="flow__step reveal" key={n}>
              <span className="flow__n">{n}</span>
              <span className="flow__t">{t}</span>
              <span className="flow__d">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
