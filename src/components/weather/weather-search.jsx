import React from 'react';

export const WeatherSearch = (props) => {

    const getWeather = () => {
         props.getWeather({ city: props.city });
    }

    const onKeyPress = (code) => {
        // ENTER key
        if (code === 13) {
            getWeather();
        }
    };

    return (
        <div>
            City: <input type='text' onChange={(e) => props.setCity({city: e.target.value})} onKeyPress={(e) => onKeyPress(e.charCode)} />
            <button onClick={() => getWeather()}>Search</button>
        </div>
    )
}