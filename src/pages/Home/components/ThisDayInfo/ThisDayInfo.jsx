import React from 'react';
import style from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import ThisDayItem from './ThisDayItem';

function ThisDayInfo({ weather }) {
  const items = [
    {
      iconId: 'temp',
      name: 'Температура',
      value: `${Math.round(weather.current.temp)}° - ощущается как ${Math.round(weather.current.feels_like)}°`,
    },
    {
      iconId: 'humidity',
      name: 'Влажность',
      value: `${weather.current.humidity}%`,
    },
    {
      iconId: 'precipitation',
      name: 'Осадки',
      value: `${weather.current.weather[0].description}`,
    },
    {
      iconId: 'wind',
      name: 'Ветер',
      value: `${Math.round(weather.current.wind_speed)} м/с`,
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
