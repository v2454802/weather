import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCurrentWeather from '../../store/fetchCurrentWeather';
import selectCurrentWeatherData from '../../store/services/selectors';
import Days from './components/Days/Days';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import style from './Home.module.scss';

function Home() {
  const dispatch = useDispatch();
  const { weather } = useSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather({ lat: 55.7483, lon: 37.6156 }));
  }, []);

  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      <Days weather={weather} />
    </div>
  );
}

export default Home;
