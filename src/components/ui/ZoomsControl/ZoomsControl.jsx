import React from 'react';
import { ZoomControl } from 'react-leaflet';
import ZoomInIcon from '../../../assets/icons/zoom-in.png';
import ZoomOutIcon from '../../../assets/icons/zoom-out.png';
import './zoomControl.css';

const ZoomsControl = () => {
  const zoomInIcon = `<div><img src=${ZoomInIcon} class='zoomIcon'/></div>`;
  const zoomOutIcon = `<div><img src=${ZoomOutIcon} class='zoomIcon'/></div>`;
  return (
    <ZoomControl
      position="topright"
      zoomInText={zoomInIcon}
      zoomOutText={zoomOutIcon}
    />
  );
};
export default ZoomsControl;
