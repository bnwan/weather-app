import domready from 'domready';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';

import { WeatherContainer } from './components/weather'; 
import './styles/base.scss';

domready(() => {  
  render(
    <Provider store={store}>
       <WeatherContainer />
    </Provider>, 
    document.getElementById('app-container'));
});