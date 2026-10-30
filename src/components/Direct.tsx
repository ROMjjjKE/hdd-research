export default function Direct() {
  return (
    <section className="section" id="ispolnitel">
      <div className="wrap">
        <div className="shead reveal">
          <p className="shead__num">04 / кто делает</p>
          <h2>Мы конечный исполнитель, а не посредник</h2>
          <p className="shead__note">
            Посредники привозят заказы нам, когда не справляются сами. Если вы сдаёте диск
            «в сервис по ремонту техники», он всё равно едет в лабораторию.
          </p>
        </div>

        <div className="direct">
          <div className="direct__quote reveal">
            <p>
              «Работа с накопителями невозможна подручными средствами. Нужно дорогостоящее
              оборудование, специальный инструмент и чистое помещение — иначе это не
              восстановление, а добивание данных».
            </p>
            <p className="micro" style={{ letterSpacing: '0.12em' }}>HDD Research Group · Гомель</p>
          </div>

          <div className="direct__list">
            {[
              ['01', 'Не посредник: диск не уезжает в другой город и не ждёт «партию».'],
              ['02', 'Свои аппаратно-программные комплексы и собственные разработки.'],
              ['03', 'Сначала диагностика: понять, что сломалось, и только потом делать.'],
              ['04', 'Не включаем диск «посмотреть»: каждое включение может стоить данных.'],
            ].map(([n, t]) => (
              <div className="direct__item reveal" key={n}>
                <b>{n}</b>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
