import { State } from '@/libs/types/state';
import type { AppDispatch } from '@/storage';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


export const useAppDispatch = () => useDispatch<AppDispatch>();


export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
