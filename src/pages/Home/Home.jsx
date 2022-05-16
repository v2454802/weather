import React from 'react';
import Days from './components/Days/Days';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import style from './Home.module.scss';

function Home() {
  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
}

export default Home;
