import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useRef } from 'react';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import useGeolocation from './useGeolocation';
import osm from './osm-providers';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export default function GeoMap() {
  mapboxgl.accessToken = process.env.REACT_APP_ACCESSTOKEN;

  const markerIcon = new L.Icon({
    iconUrl: require('./marker-icon-2x.png'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
  const [center, setCenter] = useLocalStorage('center', {
    lat: 53.551086,
    lng: 9.993682,
  });
  const [destinationMapbox, setDestinationMapbox] = useLocalStorage(
    'destinationMapBox',
    [53.551086, 9.993682]
  );
  const ZOOM_LEVEL = 11;
  const mapRef = useRef();
  const position = [destinationMapbox[0], destinationMapbox[1]];
  const location = useGeolocation();

  console.log(destinationMapbox);

  useEffect(() => {
    const geocoderDestination = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      types: 'country, region, place, poi, address',
      limit: 5,
      placeholder: 'e.g. Sievekingdamm 3',
      minLength: 2,
      setView: true,
    });
    geocoderDestination.on('result', event => {
      return setDestinationMapbox([
        event.result.center[1],
        event.result.center[0],
      ]);
    });
    geocoderDestination.addTo('#geocoderdestination');
  });

  return (
    <>
      <StyledMap center={center} zoom={ZOOM_LEVEL} ref={mapRef} id="map">
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
      <SearchWrapper>
        <GeoCoderDestination
          id={'geocoderdestination'}
          type="Submit"
          onKeyDown={onEnter}
        ></GeoCoderDestination>
        <SearchButton onClick={onEnter}>search</SearchButton>
      </SearchWrapper>
    </>
  );

  function onEnter(event) {
    let code = 0;
    code = event.keyCode;
    if (code === 13) {
      event.preventDefault();
      console.log('hello');
      setCenter({ lat: destinationMapbox[0], lng: destinationMapbox[1] });
      window.location.reload();
    }
  }
}

const StyledMap = styled(MapContainer)`
  height: 50vh;
  width: 50vw;
`;

const SearchWrapper = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 400px;
  color: white;
  display: flex;
  z-index: 400;
  position: relative;
`;

const SearchButton = styled.button`
  height: 28px;
  width: 55px;
  margin-top: 10px;
`;

const GeoCoderDestination = styled.div`
  margin-top: 10px;
  display: ${props => (props.display === 'none' ? 'none' : '')};
  height: 28px;

  ul {
    list-style: none;
    padding: 0 20px;
    margin: 0;
    max-width: 70vw;
  }
  li {
    margin: 5px 0;
    border: 1px solid white;
    background-color: black;
    color: white;
  }

  button {
    position: absolute;
    right: 10px;
    top: 4px;
    background: white;
    color: white;
    border: none;
  }
`;
