import { Observable } from 'rxjs/Observable';
import * as ActionTypes from '../action-types';
import moment from 'moment';

const apiKey = 'b3e6a2bfe585db6295674fd89dd08bb2';
const apiUrl = (city) => {
    return {
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`,
        crossDomain: true
    }
};

export const weatherEpic = action$ => {
    return action$.ofType(ActionTypes.GET_WEATHER)
        .switchMap(({payload}) => Observable
            .ajax(apiUrl(payload.city))
            .map(res => res.response)
            .map(weatherRes => weatherRes.list)
            .flatMap(result => {
                return Observable.of(
                        result.map(w => ({ 
                            day: moment(w.dt_txt).format('dddd'),
                            period: moment(w.dt_txt).format('HH:mm'),
                            main: w.main,
                            weather: w.weather[0]
                        }))
                    )
                })
            .map(data => ({
                type: ActionTypes.GET_WEATHER_SUCCESS,
                payload: { 
                    data
                }
            }))
            .catch(error => Observable.of({
                type: ActionTypes.GET_WEATHER_ERROR,
                payload: { error }
            }))
    );
}