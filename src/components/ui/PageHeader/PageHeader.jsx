import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import SunLogo from '../../../assets/icons/sun.png';
import { uniqueId } from 'lodash';

const NavigationData = [
  { label: 'Карта', key: uniqueId('map'), path: '/map' },
  { label: 'Информация', key: uniqueId('info'), path: '/info' },
];

const PageHeader = () => {
  const renderNavigation = () => {
    return (
      <div>
        {NavigationData.map((link) => {
          return (
            <Link className={styles.headerLink} key={link.key} to={link.path}>
              {link.label}
            </Link>
          );
        })}
      </div>
    );
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <img src={SunLogo} alt="ghothelon-logo" className={styles.headerIcon} />
        <h1 className={styles.headerTitle}>Гхотэлон</h1>
      </div>
      {renderNavigation()}
    </div>
  );
};

export default PageHeader;
