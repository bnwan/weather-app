import React from 'react';

import { WeatherPeriod } from './weather-period.jsx'

export const WeatherItem = (props) => {
    const renderWeatherPeriods = props.data.map((d, index) => {
        return (
            <WeatherPeriod key={index} {...d} />
        )
    });

    return (
        <div className='weather-item'>
          <div className='weather-day'> {props.day}</div>
          <div className='weather-details'>
                {renderWeatherPeriods}
          </div>
        </div>
    )
}