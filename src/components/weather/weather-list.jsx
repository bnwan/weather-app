import React from 'react';

import { WeatherItem } from './weather-item.jsx';
import { WeatherSearch } from './weather-search.jsx';

export const WeatherList = (props) => {

    const renderWeatherList = props.days.map((day, index) => {
        return (
            <WeatherItem key={index} day={day} data={props.weatherData[day]} />
        )
    });

    return (
        <div className='weather-container'>
            <WeatherSearch {...props} />
            <div className='weather-city'>{props.weatherCity}</div>
            <div className='weather-list-container'>
                {renderWeatherList}
            </div>
        </div>
    )
}