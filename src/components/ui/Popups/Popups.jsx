import React from 'react';
import { Popup } from 'react-leaflet';
import './popups.css';
import styles from './styles.module.scss';
import cn from 'classnames';

const Popups = ({ label, description, type }) => {
  const ownClasses = cn(
    { [styles.solariyaPopup]: type === 'solariya' },
    { [styles.harPopup]: type === 'har' },
    { [styles.maRaathPopup]: type === 'maRaath' },
    { [styles.aronaPopup]: type === 'arona' },
    { [styles.banukPopup]: type === 'banuk' },
    { [styles.noMansLandPopup]: type === 'noMansLand' }
  );
  return (
    <Popup className="popups">
      <div className={ownClasses}>
        <h1 className={styles.title}>{label}</h1>
      </div>
      <div className={styles.description}>{description}</div>
    </Popup>
  );
};

export default Popups;
