import clsx from 'clsx';
import { Cities, MapType } from '../../libs/const';
import { OfferCardPrew } from '@/libs/types';

type MapProps = {
  mapType: MapType;
  offers: OfferCardPrew[];
  selectedPoint: OfferCardPrew;
  activeCity: Cities;
}

function MapComponent({mapType, offers, selectedPoint, activeCity}: MapProps) {
  return (
    <section className={clsx(`${mapType}__map map`)}/>
  );
}

export default MapComponent;
