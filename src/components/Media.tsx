const LIST: Array<[string, string, string, string]> = [
  ['01', 'Жёсткие диски', 'Магнитная запись: клин, стук, «не определяется», залитая поверхность, вскрытый «мастером» диск.', 'HDD'],
  ['02', 'SSD и флеш-память', 'Контроллер, прошивка, износ ячеек: здесь не помогает ни один «восстановитель файлов».', 'SSD'],
  ['03', 'RAID-массивы', 'Любой уровень и любая конфигурация: собираем образ массива, а не «диск по одному».', 'RAID 0/1/5/6/10'],
  ['04', 'Флешки и карты', 'Монолитные, с обломанным разъёмом, с умершим контроллером; карты фото и видео.', 'USB · SD · CF'],
  ['05', 'Телефоны, планшеты, диктофоны', 'Съём памяти, разбор корпуса, работа с прошивкой устройства.', 'mobile'],
];

export default function Media() {
  return (
    <section className="section" id="nositeli">
      <div className="wrap">
        <div className="shead reveal">
          <p className="shead__num">01 / носители</p>
          <h2>Пять типов носителей, и у каждого своя причина смерти</h2>
          <p className="shead__note">
            Прежде чем что-то делать, мы выясняем, что именно сломалось. Логическая ошибка и
            физическая поломка — разные работы и разные риски.
          </p>
        </div>

        <div className="media">
          {LIST.map(([n, t, d, tag]) => (
            <div className="media__row reveal" key={n}>
              <span className="media__n">{n}</span>
              <span className="media__t">{t}</span>
              <span className="media__d">{d}</span>
              <span className="media__tag">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
