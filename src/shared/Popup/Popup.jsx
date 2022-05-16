import React from 'react';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import ThisDayItem from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import style from './Popup.module.scss';

function Popup() {
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
    <>
      <div className={style.blur} />
      <div className={style.popup}>

        <div className={style.day}>
          <div className={style.dayTemp}>20˚</div>
          <div className={style.dayWeek}>сегодня</div>
          <div className={style.img}>
            <GlobalSvgSelector id="rain" />
          </div>
          <div className={style.dayTime}>
            Время:
            {' '}
            <span>12:10</span>
          </div>
          <div className={style.daySity}>
            Город:
            {' '}
            <span>Москва</span>
          </div>
        </div>

        <div className={style.thisDayInfoItems}>
          {
            items.map((item) => (<ThisDayItem key={item.iconId} item={item} />))
          }
        </div>
        <div className={style.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
}

export default Popup;
