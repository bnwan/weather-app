import { combineEpics } from 'redux-observable';
import { epics } from './epics';

export const rootEpic = combineEpics(...epics);