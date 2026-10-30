export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__grid">
          <div className="ftr__col">
            <h3>HDD Research Group</h3>
            <p>Центр восстановления информации: HDD, SSD, RAID, флешки, телефоны. ИП Марченко С. Ю.</p>
            <p>Гомель, ул. Кирова, 55, офис 312, 3 этаж.</p>
          </div>
          <div className="ftr__col">
            <h3>Связь</h3>
            <a href="tel:+375296777068">+375 29 677-70-68</a>
            <a href="tel:+375298387068">+375 29 838-70-68</a>
            <a href="mailto:info@hdd-recovery.org">info@hdd-recovery.org</a>
          </div>
          <div className="ftr__col">
            <h3>Разделы</h3>
            <a href="#nositeli">Носители</a>
            <a href="#laboratoriya">Лаборатория</a>
            <a href="#poryadok">Порядок работы</a>
            <a href="#voprosy">Вопросы</a>
          </div>
        </div>
        <div className="ftr__legal">
          <span>© {new Date().getFullYear()} HDD Research Group · Гомель</span>
          <span>Сроки и стоимость называем после диагностики носителя.</span>
        </div>
      </div>
    </footer>
  );
}
