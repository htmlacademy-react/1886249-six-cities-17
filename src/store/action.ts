import { Cities, SortItem } from '@/libs/const';
import { OfferCardPrew } from '@/libs/types/types';
import { createAction } from '@reduxjs/toolkit';

export const changeActiveCity = createAction<Cities>('app/changeActiveCity');
export const loadOffers = createAction<OfferCardPrew[]>('data/loadOffers');
export const changeCurrentSort = createAction<SortItem>('app/changeCurrentSort');
