import React from 'react';
import cx from 'classnames';
import LapTopPhoneSvg from './LapTopPhoneSvg';
import GooglePic from '../../assets/Home/google-play-badge.png';
import styles from './MainSection.module.css';
import AppleStoreSvg from '../../assets/Home/Download_on_the_App_Store_Badge_CNTC_RGB_blk_100217.svg';

function MainSection() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          最簡單的
          <br /> Podcast 製作工具
        </h1>
        <a className={styles.button} href="https://open.firstory.me/">
          開始自己的 Podcast！
        </a>
        <div className={styles.buttonRow}>
          <a href="https://apps.apple.com/app/id1351170844">
            <img
              src={AppleStoreSvg}
              className={styles.image}
              alt="Apple Store"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.firstory">
            <img src={GooglePic} alt="Google Play" className={styles.image} />
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <LapTopPhoneSvg />
      </div>
    </section>
  );
}

export default MainSection;
