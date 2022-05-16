import React from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import style from './ThisDay.module.scss';

function ThisDay() {
  return (
    <div className={style.thisDay}>
      <div className={style.topBlock}>
        <div className={style.blockWrapper}>
          <div className={style.thisTemp}>20˚</div>
          <div className={style.thisDay_day}>сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={style.bottomBlock}>
        <div className={style.thisTime}>
          Время:
          {' '}
          <span>12:10</span>
        </div>
        <div className={style.thisSity}>
          Город:
          {' '}
          <span>Москва</span>
        </div>
      </div>
    </div>
  );
}

export default ThisDay;
