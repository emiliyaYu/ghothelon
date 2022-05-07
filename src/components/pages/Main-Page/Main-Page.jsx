import React from 'react';
import styles from './styles.module.scss';

const MainPage = (props) => {
  return <div className={styles.mainContainer}>{props.children}</div>;
};

export default MainPage;
