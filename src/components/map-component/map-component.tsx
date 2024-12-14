import clsx from 'clsx';
import { MapType } from '../../libs/const';

type MapProps = {
  mapType: MapType;
}

function MapComponent({mapType}: MapProps) {
  return (
    <section className={clsx(`${mapType}__map map`)}/>
  );
}

export default MapComponent;
