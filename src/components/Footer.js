import React from 'react';
import styles from '../styles/Footer.module.css';
import FB from '../assets/fb.svg';
import IG from '../assets/ig.svg';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.title}>Make sure to follow us!</div>
      <div className={styles.row}>
        <a href="https://www.facebook.com/firstory.inc/">
          <img src={FB} alt="FB" className={styles.socialIcon} />
        </a>
        <a href="https://www.instagram.com/firstory_lab/">
          <img src={IG} alt="IG" className={styles.socialIcon} />
        </a>
      </div>
      <small className={styles.copyright}>
        © Firstory 2019. All Rights Reserved.
      </small>
    </footer>
  );
}

export default Footer;
