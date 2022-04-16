import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import osm from './osm-providers';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import useGeoLocation from './useGeolocation';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';

const markerIcon = new L.Icon({
  iconUrl: require('./marker-icon-2x.png'),
  iconSize: [25, 25],
  iconAnchor: [10, 25],
  popupAnchor: [0, -46],
});

export default function BasicMap() {
  const [center, setCenter] = useState({ lat: 53.551086, lng: 9.993682 });
  const ZOOM_LEVEL = 11;
  const mapRef = useRef();
  const position = [53.551086, 9.993682];
  const location = useGeoLocation();
  mapboxgl.accessToken = process.env.REACT_APP_ACCESSTOKEN;

  return (
    <>
      <StyledMap center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        <Marker position={position} icon={markerIcon}></Marker>
        {location.loaded && !location.error && (
          <Marker
            icon={markerIcon}
            position={[location.coordinates.lat, location.coordinates.lng]}
          ></Marker>
        )}
      </StyledMap>
    </>
  );
}

const StyledMap = styled(MapContainer)`
  height: 400px;
  width: 300px;
`;
