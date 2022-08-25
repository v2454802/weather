import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import currentWeatherSliceReducer from './currentWeatherSlice';

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
