import React, { useState } from 'react';
import { MapContainer, TileLayer, AttributionControl } from 'react-leaflet';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen';

import MapControl from './MapControl';
import Markers from '../../ui/Markers';
import MapEvents from './MapEvents';
import TextMarkers from '../../ui/TextMarkers';
import ZoomsControl from '../../ui/ZoomsControl';
import PopupData from '~/data/popupData';
import './map.css';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';

const Map = () => {
  const maxZoom = 4;
  const center = [0, 0];
  const zoom = 2;
  const viscosity = 1.0;
  const minZoom = 3;

  const [currentZoom, setCurrentZoom] = useState(zoom);
  return (
    <div className="map">
      <MapContainer
        style={{ height: 'inherit', width: 'inherit' }}
        maxZoom={maxZoom}
        center={center}
        zoom={currentZoom}
        continuousWorld={false}
        minZoom={minZoom}
        attributionControl={false}
        maxBoundsViscosity={viscosity}
        zoomControl={false}
        fullscreenControl={true}
      >
        <TileLayer url="tiles/{z}/{x}/{y}.png" noWrap={true} />
        <MapControl />
        <MapEvents updateZoom={setCurrentZoom} />
        <Markers legend={PopupData} currentZoom={currentZoom} />
        <TextMarkers />
        <ZoomsControl />
        <AttributionControl position="bottomright" prefix="Ghothelon 1.0" />
      </MapContainer>
    </div>
  );
};
export default Map;
