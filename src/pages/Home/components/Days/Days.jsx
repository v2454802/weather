import React from 'react';
import Card from './Card';
import Tabs from './Tabs';
import style from './Days.module.scss';

function Days({ weather }) {
  const days = weather.daily;

  return (
    <>
      <Tabs />
      <div className={style.days}>
        {days
          .filter(((day, id) => id > 0))
          .map((day) => (<Card day={day} key={day.dt} />))}
      </div>
    </>
  );
}

export default Days;
