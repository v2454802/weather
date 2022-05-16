import React from 'react';
import style from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import ThisDayItem from './ThisDayItem';

function ThisDayInfo() {
  const items = [
    {
      iconId: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      iconId: 'pressure',
      name: 'Давление',
      value: '765 мм - нормальное',
    },
    {
      iconId: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      iconId: 'wind',
      name: 'Ветер',
      value: '3 м/с - легкий',
    },
  ];

  return (
    <div className={style.thisDayInfo}>
      <div className={style.thisDayInfoItems}>
        {
          items.map((item) => (<ThisDayItem key={item.iconId} item={item} />))
        }
      </div>
      <img className={style.cloudImg} src={cloud} alt="Облако" />
    </div>
  );
}

export default ThisDayInfo;
