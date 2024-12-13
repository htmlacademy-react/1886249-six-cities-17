import clsx from 'clsx';
import './map-component.css';
import { MapType, UrlMarker } from '../../libs/const';
import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '@/hooks/useMap';
import { OfferCardPrew, OfferCity } from '@/libs/types/types';

type MapProps = {
  mapType: MapType;
  selectedOffer: OfferCardPrew | undefined;
  city: OfferCity; //это правильный тип (имя и локация)
  offers: OfferCardPrew[];
}

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function MapComponent({mapType, city, offers, selectedOffer}: MapProps) {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.title === selectedOffer.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);
  return (
    <section className={clsx(`${mapType}__map map`)} ref={mapRef}/>
  );
}

export default MapComponent;

