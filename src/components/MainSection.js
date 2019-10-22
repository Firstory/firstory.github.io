import React from 'react';
import cx from 'classnames';
import Pic1 from '../assets/pic1.png';
import Pic2 from '../assets/pic2.png';
import styles from '../styles/MainSection.module.css';

function MainSection() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          最簡單的
          <br /> Podcast 製作工具
        </h1>
        <div className={styles.buttonRow}>
          <a
            className={cx(styles.button, styles.ios)}
            href="https://apps.apple.com/app/id1351170844"
          >
            iOS
          </a>
          <a
            className={cx(styles.button, styles.android)}
            href="https://play.google.com/store/apps/details?id=com.firstory"
          >
            Android
          </a>
        </div>
      </div>
      <img className={styles.pic} src={Pic1} alt="pic1" />
      <img className={styles.pic} src={Pic2} alt="pic2" />
    </section>
  );
}

export default MainSection;
