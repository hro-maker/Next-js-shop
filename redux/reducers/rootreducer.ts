import { combineReducers } from 'redux';
import { alertt } from './alert';
import { authreducer } from './authreducer';
export const rootreducer=combineReducers({
    auth:authreducer,
    alert:alertt
})
export type State=ReturnType<typeof rootreducer>