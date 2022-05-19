import React from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import style from './ThisDay.module.scss';

function ThisDay({ weather }) {
  const localTime = new Date(weather.current.dt * 1000);
  const hour = localTime.getHours();
  const minute = localTime.getMinutes();

  return (
    <div className={style.thisDay}>
      <div className={style.topBlock}>
        <div className={style.blockWrapper}>
          <div className={style.thisTemp}>
            {Math.round(weather.current.temp)}
            °
          </div>
          <div className={style.thisDay_day}>сегодня</div>
        </div>
        <GlobalSvgSelector id={weather.current.weather[0].main} />
      </div>
      <div className={style.bottomBlock}>
        <div className={style.thisTime}>
          Время:
          {' '}
          <span>{`${hour}:${minute}`}</span>
        </div>
        <div className={style.thisSity}>
          Город:
          {' '}
          <span>{weather.timezone}</span>
        </div>
      </div>
    </div>
  );
}

export default ThisDay;
