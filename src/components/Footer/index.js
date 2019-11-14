import React from 'react';
import styles from './Footer.module.css';
import FB from '../../assets/fb.svg';
import IG from '../../assets/ig.svg';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.title}>Make sure to follow us!</div>
      <div className={styles.row}>
        <a
          className={styles.socialIcon}
          href="https://www.facebook.com/firstory.inc/"
        >
          <img src={FB} alt="FB" />
        </a>
        <a
          className={styles.socialIcon}
          href="https://www.instagram.com/firstory_lab/"
        >
          <img src={IG} alt="IG" />
        </a>
      </div>
      <small className={styles.copyright}>
        © Firstory {new Date().getFullYear()}. All Rights Reserved.
      </small>
    </footer>
  );
}

export default Footer;
