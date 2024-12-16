import { Leaflet } from '@/libs/const';
import { OfferCity } from '@/libs/types/types';
import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';


function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: OfferCity
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(
    () => {
      if (mapRef.current !== null && !isRenderedRef.current) {
        const { URL_TEMPLATE, OPTIONS } = Leaflet;
        const { latitude: lat, longitude: lng, zoom } = city.location;
        const mapOptions = {
          center: {
            lat,
            lng
          },
          zoom
        };

        const instance = new Map(mapRef.current, mapOptions);
        const layer = new TileLayer(URL_TEMPLATE, OPTIONS);

        instance.addLayer(layer);
        setMap(instance);

        isRenderedRef.current = true;
      }
    },
    [mapRef, city]
  );

  return map;
}

export default useMap;
