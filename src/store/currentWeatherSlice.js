import {
  createSlice
} from '@reduxjs/toolkit';

const initialState = {
  weather: {
    timezone: '',
    current: {
      temp: 0,
      humidity: 0,
      feels_like: 0,
      wind_speed: 0,
      weather: [{
        main: '',
        description: '',
      }, ],
    },
    daily: [{
      temp: {},
      weather: [{}, ],
    }],
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
};

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state,
      action,
    ) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentWeatherError(
      state,
      action,
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default currentWeatherSlice.reducer;
