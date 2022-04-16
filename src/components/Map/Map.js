import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import osm from './osm-providers';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const markerIcon = new L.Icon({
  iconUrl: require('./marker-icon-2x.png'),
  iconSize: [20, 25],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

export default function BasicMap() {
  const [center, setCenter] = useState({ lat: 53.551086, lng: 9.993682 });
  const ZOOM_LEVEL = 11;
  const mapRef = useRef();
  const position = [53.551086, 9.993682];

  return (
    <>
      <StyledMap center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        <Marker position={position} icon={markerIcon}></Marker>
      </StyledMap>
    </>
  );
}

const StyledMap = styled(MapContainer)`
  height: 400px;
  width: 300px;
`;
