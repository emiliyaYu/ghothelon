import React from 'react';
import Map from '../../common/map';
import styles from './styles.module.scss';

const MapPage = () => {
  return (
    <div className={styles.mapContainer}>
      <Map />
    </div>
  );
};

export default MapPage;
