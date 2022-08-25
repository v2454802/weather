import React from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import { months, week } from '../../../../store/services/TimeServices';
import style from './Days.module.scss';

function Card({ day }) {
  const localTime = new Date(day.dt * 1000);
  const data = localTime.getDate();
  const month = localTime.getMonth();
  const dayWeek = localTime.getDay();

  return (
    <div className={style.card}>
      <div className={style.dayWeek}>{week[dayWeek]}</div>
      <div className={style.dayInfo}>{`${data} ${months[month]}`}</div>
      <div className={style.iconID}>
        <GlobalSvgSelector id={day.weather[0].main} />
      </div>
      <div className={style.tempDay}>
        день
        {' '}
        {Math.round(day.temp.day)}
      </div>
      <div className={style.tempNigth}>
        ночь
        {' '}
        {Math.round(day.temp.night)}
      </div>
      <div className={style.info}>{day.weather[0].description}</div>
    </div>
  );
}

export default Card;
