const NUM: Array<[string, string, string]> = [
  ['20+', 'лет', 'лаборатория восстановления данных: не «направление» в прайсе сервиса, а основной профиль.'],
  ['2 нм', '', 'зазор между головкой и пластиной. Пылинка крупнее — и диск уже не прочитать.'],
  ['500 €', '', 'стоит один съёмник блока магнитных головок, и подходит он к одному семейству дисков.'],
  ['тысячи', '', 'восстановлений за спиной: логика, физика, RAID, монолитные флешки.'],
];

export default function Lab() {
  return (
    <section className="section" id="laboratoriya-chisla">
      <div className="wrap">
        <div className="shead reveal">
          <p className="shead__num">03 / оборудование</p>
          <h2>Почему это не сервис у дома</h2>
          <p className="shead__note">
            Работа с накопителем не делается «подручными средствами»: нужны инструмент, чистое
            помещение и знания, которых не бывает у мастера широкого профиля.
          </p>
        </div>

        <div className="lab reveal">
          {NUM.map(([v, unit, k]) => (
            <div className="lab__cell" key={v + k}>
              <span className="lab__v">
                {v} {unit && <i>{unit}</i>}
              </span>
              <span className="lab__k">{k}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
