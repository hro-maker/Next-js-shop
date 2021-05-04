import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '../redux/reducers/rootreducer';


export const typetuseSelector:TypedUseSelectorHook<State>=useSelector