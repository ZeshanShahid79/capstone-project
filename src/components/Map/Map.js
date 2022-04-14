import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import osm from './osm-orviders';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const markerIcon = new L.Icon({
  iconUrl: './src/components/Map/marker-icon-2x.png',
  iconSize: [35, 45],
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
        <Marker position={position} icon={markerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </StyledMap>
    </>
  );
}

const StyledMap = styled(MapContainer)`
  height: 400px;
  width: 300px;
`;
