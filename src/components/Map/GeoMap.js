import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useRef } from 'react';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import useGeoLocation from './useGeolocation';
import L from 'leaflet';
import osm from './osm-providers';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import Navigation from '../Navigation/Navigation';

export default function GeoMap({ address }) {
  mapboxgl.accessToken = process.env.REACT_APP_ACCESSTOKEN;

  const markerIcon = new L.Icon({
    iconUrl: require('./marker-icon-2x.png'),
    iconSize: [22, 32],
    iconAnchor: [16, 32],
  });
  const destinationMarker = new L.Icon({
    iconUrl: require('./final.png'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
  const location = useGeoLocation();

  const [destinationMapbox, setDestinationMapbox] = useLocalStorage(
    'destinationMapBox',
    [53.551086, 9.993682]
  );
  const ZOOM_LEVEL = 11.2;
  const mapRef = useRef();
  const center = { lat: destinationMapbox[0], lng: destinationMapbox[1] };
  const position = [destinationMapbox[0], destinationMapbox[1]];
  useEffect(() => {
    const geocoderDestination = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      types: 'country, region, place, poi, address',
      limit: 5,
      placeholder: 'paste here and choose ↓ ',
    });
    geocoderDestination.on('result', e => {
      return setDestinationMapbox([
        e.result.center[1],
        e.result.center[0],
        e.result,
      ]);
    });

    geocoderDestination.addTo('#geocoderdestination');
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <MapBox center={center} zoom={ZOOM_LEVEL} ref={mapRef} id="map">
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        <Marker position={position} icon={destinationMarker} />

        {location.loaded && !location.error && (
          <Marker
            icon={markerIcon}
            position={[location.coordinates.lat, location.coordinates.lng]}
          ></Marker>
        )}
      </MapBox>
      <SearchWrapper>
        <GeoCoderDestination
          id={'geocoderdestination'}
          onKeyDown={handleEnterClick}
        ></GeoCoderDestination>
        <SearchButton type="submit">run Map</SearchButton>
      </SearchWrapper>

      <Navigation />
    </>
  );

  function handleEnterClick(event) {
    let code = 0;
    code = event.keyCode;
    if (code === 13) {
      window.location.reload();
    }
  }
}
const MapBox = styled(MapContainer)`
  height: 617px;
  @media screen and (min-width: 700px) {
    height: 736px;
  }
`;

const SearchWrapper = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 90vw;
  max-height: 90vh;
  color: white;
  display: flex;
  z-index: 400;
  gap: 10px;
  margin-bottom: 100px;
`;

const SearchButton = styled.button`
  margin-top: 10px;
  background-color: gold;
  border: solid 1px goldenrod;
  border-radius: 14px;
`;

const GeoCoderDestination = styled.div`
  margin-top: 10px;
  display: ${props => (props.display === 'none' ? 'none' : '')};
  height: 28px;
  background-color: white;
  font-size: small;
  width: 240px;
`;
