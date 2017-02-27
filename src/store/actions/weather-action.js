import * as ActionTypes from '../action-types';

export const setCity = payload => ({
  type: ActionTypes.SET_CITY,
  payload
});

export const getWeather = payload => ({
  type: ActionTypes.GET_WEATHER,
  payload
});