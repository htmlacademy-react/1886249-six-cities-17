import { Cities } from '@/libs/const';
import {createReducer} from '@reduxjs/toolkit';

const initialState = Cities.PARIS;

export const reducer = createReducer(initialState, () => {});
