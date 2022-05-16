import React from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import style from './Days.module.scss';

function Card({ day }) {
  const {
    dayWeek, dayInfo, iconID, tempDay, tempNigth, info,
  } = day;

  return (
    <div className={style.card}>
      <div className={style.dayWeek}>{dayWeek}</div>
      <div className={style.dayInfo}>{dayInfo}</div>
      <div className={style.iconID}>
        <GlobalSvgSelector id={iconID} />
      </div>
      <div className={style.tempDay}>{tempDay}</div>
      <div className={style.tempNigth}>{tempNigth}</div>
      <div className={style.info}>{info}</div>
    </div>
  );
}

export default Card;
