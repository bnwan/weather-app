import * as ActionTypes from '../action-types';

const initialState = { 
  isLoading: false,
  isFetched: false,
  city: null,
  weatherCity: null,
  weatherData: []
};

export const weather = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CITY:
      return {
        ...state,
        city: action.payload.city
      };
    case ActionTypes.GET_WEATHER:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.GET_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isFetched: true,
        weatherCity: state.city,
        weatherData: [].concat(action.payload.data),
      };
    case ActionTypes.GET_WEATHER_ERROR:
      return {
        ...state,
        isLoading: false,
        isFetched: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};