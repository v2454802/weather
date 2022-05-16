import React from 'react';
import Card from './Card';
import Tabs from './Tabs';
import style from './Days.module.scss';

function Days() {
  const days = [
    {
      dayWeek: 'Сегодня',
      dayInfo: '14 мя',
      iconID: 'sun',
      tempDay: '+10',
      tempNigth: '+13',
      info: 'Облачно',
    },
    {
      dayWeek: 'Сегодня',
      dayInfo: '15 мя',
      iconID: 'sun',
      tempDay: '+10',
      tempNigth: '+13',
      info: 'Облачно',
    },
    {
      dayWeek: 'Сегодня',
      dayInfo: '16 мя',
      iconID: 'sun',
      tempDay: '+10',
      tempNigth: '+13',
      info: 'Облачно',
    },
    {
      dayWeek: 'Сегодня',
      dayInfo: '17 мя',
      iconID: 'sun',
      tempDay: '+10',
      tempNigth: '+13',
      info: 'Облачно',
    },
    {
      dayWeek: 'Сегодня',
      dayInfo: '19 мя',
      iconID: 'sun',
      tempDay: '+10',
      tempNigth: '+13',
      info: 'Облачно',
    },
    {
      dayWeek: 'Сегодня',
      dayInfo: '20 мя',
      iconID: 'sun',
      tempDay: '+10',
      tempNigth: '+13',
      info: 'Облачно',
    },
    {
      dayWeek: 'Сегодня',
      dayInfo: '21 мя',
      iconID: 'sun',
      tempDay: '+10',
      tempNigth: '+13',
      info: 'Облачно',
    },
  ];

  return (
    <>
      <Tabs />
      <div className={style.days}>
        {days.map((day) => (<Card day={day} key={day.dayInfo} />))}
      </div>
    </>
  );
}

export default Days;
