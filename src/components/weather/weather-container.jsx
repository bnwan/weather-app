import { connect } from 'react-redux';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

import { WeatherList } from './weather-list.jsx';
import { setCity, getWeather } from '../../store/actions/weather-action';

import './style.scss';

const mapStateToProps = state => {

    let groupData = _.groupBy(state.weather.weatherData, x => x.day);

    return {
        status: state.weather.status,
        weatherCity: state.weather.weatherCity,
        city: state.weather.city,
        days: Object.keys(groupData),
        period: state.weather.period,
        weatherData: groupData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCity: payload => dispatch(setCity(payload)),
        getWeather: payload => dispatch(getWeather(payload))
    };
};

export const WeatherContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherList); 