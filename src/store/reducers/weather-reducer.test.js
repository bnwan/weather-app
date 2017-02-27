import expect, { createSpy, spyOn, isSpy } from 'expect'

import { weather } from './weather-reducer';

describe('Weather Reducer', () => {

    describe('Initial state', () => {
        it('should return default state if no action is specified', () => {
            let state = weather(undefined, { type: '' });
            expect(state.isFetched).toBeFalsy;
        });
    });

    describe('SET_CITY', () => {
        it('should set city', () => {
             let state = weather(undefined, {
                type: 'SET_CITY', 
                payload: {
                    city: 'London'
                }
            });

            expect(state.city).toEqual('London');
        });
    });

});