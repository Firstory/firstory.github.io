import React from 'react';
import Illustration from '../assets/illustration.svg';
import styles from '../styles/FeatureSection.module.css';

function FeatureSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        最簡單的 Podcast 的製作工具，讓世界聽到你的聲音。
      </h2>
      <div className={styles.row}>
        <div className={styles.left}>
          <img className={styles.image} src={Illustration} alt="record" />
        </div>
        <ul className={styles.right}>
          <li className={styles.item}>用手機輕鬆製作你的 Podcast</li>
          <li className={styles.item}>一鍵發布至 Spotify, Apple Podcast</li>
          <li className={styles.item}>一覽無遺聽眾的收聽數據</li>
        </ul>
      </div>
    </section>
  );
}

export default FeatureSection;
