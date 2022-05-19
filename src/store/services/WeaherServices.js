import axios from 'axios';

export default class WeaherServices {
  static getCurrentWeather(city) {
    const { lon, lat } = city;
    return axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=aad35e11753b9ac4eebda42ca25a36f4`,
    );
  }
}
