import { useState } from 'react';

const PHONE1 = '+375 29 677-70-68';
const PHONE2 = '+375 29 838-70-68';
const WA = 'https://wa.me/375296777068';

const KINDS = ['HDD', 'SSD', 'RAID-массив', 'Флешка или карта', 'Телефон / планшет', 'Не знаю'];

export default function Ask() {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [kind, setKind] = useState(KINDS[0]);
  const [note, setNote] = useState('');

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      'Заявка с сайта HDD Research Group',
      name && `Имя: ${name}`,
      tel && `Телефон: ${tel}`,
      `Носитель: ${kind}`,
      note && `Что случилось: ${note}`,
    ]
      .filter(Boolean)
      .join('\n');
    window.open(`${WA}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };

  return (
    <section className="section ask" id="zayavka">
      <div className="wrap">
        <div className="shead reveal">
          <p className="shead__num">07 / связь</p>
          <h2>Позвоните до того, как диск включат ещё раз</h2>
          <p className="shead__note">
            Чем меньше попыток «починить» было до лаборатории, тем выше шансы. Консультация по
            телефону — самый быстрый путь.
          </p>
        </div>

        <div className="ask__grid">
          <div className="reveal">
            <a className="ask__tel" href="tel:+375296777068">
              {PHONE1}
            </a>
            <a className="ask__tel" href="tel:+375298387068">
              {PHONE2}
            </a>
            <div className="ask__addr">
              <span>
                <b>Лаборатория</b>
                Гомель, ул. Кирова, 55, офис 312, 3 этаж
              </span>
              <span>
                <b>Почта</b>
                <a href="mailto:info@hdd-recovery.org">info@hdd-recovery.org</a>
              </span>
            </div>
          </div>

          <form className="form reveal" onSubmit={send}>
            <div className="form__row form__row--2">
              <div className="field">
                <label htmlFor="nm">Как вас зовут</label>
                <input id="nm" value={name} onChange={e => setName(e.target.value)} placeholder="Имя" />
              </div>
              <div className="field">
                <label htmlFor="tl">Телефон</label>
                <input id="tl" value={tel} onChange={e => setTel(e.target.value)} placeholder="+375" inputMode="tel" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="kd">Что за носитель</label>
              <select id="kd" value={kind} onChange={e => setKind(e.target.value)}>
                {KINDS.map(k => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="nt">Что случилось</label>
              <textarea
                id="nt"
                value={note}
                onChange={e => setNote(e.target.value)}
                placeholder="Например: диск щёлкает, компьютер его не видит. Данные нужны срочно."
              />
            </div>
            <button className="btn" type="submit">
              Отправить в WhatsApp
            </button>
            <p className="ask__fine">
              Форма открывает WhatsApp с готовым сообщением. Если неудобно — просто позвоните,
              это быстрее.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
