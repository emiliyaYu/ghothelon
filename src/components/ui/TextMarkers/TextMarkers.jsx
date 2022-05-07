import React from 'react';
import { Marker, Polygon } from 'react-leaflet';
import L from 'leaflet';
import textMarkersData from '../../../data/textMarkersData';
import './textMarkers.css';

const TextMarkers = () => {
  return textMarkersData.map((data) => {
    const text = new L.divIcon({
      html: `<div class=${data.styles}>${data.label}</div>`,
    });
    const center = new L.polygon(data.coords).getBounds().getCenter();

    return (
      <Polygon
        positions={data.coords}
        className="polygon"
        key={`${data.coords}`}
      >
        <Marker position={center} icon={text} className="textMarkers" />
      </Polygon>
    );
  });
};

export default TextMarkers;
