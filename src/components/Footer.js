import React from 'react';
import styles from '../styles/Footer.module.css';
import FB from '../assets/fb.svg';
import IG from '../assets/ig.svg';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.title}>Make sure to follow us!</div>
      <div className={styles.row}>
        <img src={FB} alt="FB" className={styles.socialIcon} />
        <img src={IG} alt="IG" className={styles.socialIcon} />
      </div>
      <small className={styles.copyright}>
        © Firstory 2019. All Rights Reserved.
      </small>
    </footer>
  );
}

export default Footer;
