import React from 'react';
import style from './Days.module.scss';

function Tabs() {
  const tabs = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На месяц',
    },
  ];

  return (
    <div className={style.tabs}>
      <div className={style.tabsWrapper}>
        {
          tabs.map((item) => (
            <div className={`${style.tab} ${style.active}`} key={item.value}>{item.value}</div>
          ))
        }
      </div>
      <div className={style.cancel}>Отменить</div>
    </div>
  );
}

export default Tabs;
