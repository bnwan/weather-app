import React from 'react';

export const WeatherPeriod = (props) => {

    let icon = `http://openweathermap.org/img/w/${props.weather.icon}.png`;

    return (
        <div className='weather-period'>
           <div className='weather-period-time'>{props.period}</div>
           <div><img src={icon} alt={props.weather.description} /></div>
           <div className='weather-temperature'>{props.main.temp.toFixed()}<span></span></div>
        </div>
    )
}