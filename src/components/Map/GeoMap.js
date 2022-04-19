import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useRef } from 'react';
import styled from 'styled-components';
import { IoMdArrowRoundBack as ArrowBack } from 'react-icons/io';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import useGeoLocation from './useGeolocation';
import L from 'leaflet';
import osm from './osm-providers';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Link } from 'react-router-dom';

export default function GeoMap({ address }) {
  mapboxgl.accessToken = process.env.REACT_APP_ACCESSTOKEN;
  const markerIcon = new L.Icon({
    iconUrl: require('./marker-icon-2x.png'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
  const location = useGeoLocation();

  const [destinationMapbox, setDestinationMapbox] = useLocalStorage(
    'destinationMapBox',
    [53.551086, 9.993682]
  );
  const ZOOM_LEVEL = 11;
  const mapRef = useRef();
  const center = { lat: destinationMapbox[0], lng: destinationMapbox[1] };
  const position = [destinationMapbox[0], destinationMapbox[1]];
  useEffect(() => {
    const geocoderDestination = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      types: 'country, region, place, poi, address',
      limit: 5,
      placeholder: 'e.g. Sievekingdamm 7',
      minLength: 2,
    });
    geocoderDestination.on('result', e => {
      return setDestinationMapbox([
        e.result.center[1],
        e.result.center[0],
        e.result,
      ]);
    });
    // handleSetAddress(address);
    geocoderDestination.addTo('#geocoderdestination');
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} id="map">
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        <Marker position={position} icon={markerIcon} />

        {location.loaded && !location.error && (
          <Marker
            icon={markerIcon}
            position={[location.coordinates.lat, location.coordinates.lng]}
          ></Marker>
        )}
      </MapContainer>
      <SearchWrapper>
        <GeoCoderDestination
          id={'geocoderdestination'}
          onKeyDown={handleEnterClick}
        ></GeoCoderDestination>
        <SearchButton type="submit">search</SearchButton>
      </SearchWrapper>
      <LinkBack to="/" name="back">
        <ArrowBack />
      </LinkBack>
    </>
  );
  //   function handleSetAddress(address) {
  //     if (address !== '') {
  //       return window.location.reload();
  //     } else {
  //       return;
  //     }
  //   }

  function handleEnterClick(event) {
    let code = 0;
    code = event.keyCode;
    if (code === 13) {
      window.location.reload();
    }
  }
}

const SearchWrapper = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 90vw;
  color: white;
  display: flex;
  z-index: 400;
`;

const SearchButton = styled.button`
  height: 28px;
  width: 55px;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 14px;
`;

const GeoCoderDestination = styled.div`
  margin-top: 10px;
  display: ${props => (props.display === 'none' ? 'none' : '')};
  height: 28px;
`;

const LinkBack = styled(Link)`
  position: absolute;
  left: 12px;
  top: 80px;
  height: 30px;
  color: white;
  font-size: 1.8rem;
  border: none;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 900;
`;
