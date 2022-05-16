import React from 'react';
import IndicatorSvgSelector from '../../../../assets/icons/global/indicators/IndicatorSvgSelector';
import style from './ThisDayInfo.module.scss';

function ThisDayItem({ item }) {
  const { iconId, name, value } = item;
  return (
    <div className={style.item}>
      <div className={style.indicator}>
        <IndicatorSvgSelector id={iconId} />
      </div>
      <div className={style.indicatorName}>{name}</div>
      <div className={style.indicatorValue}>{value}</div>
    </div>
  );
}

export default ThisDayItem;
