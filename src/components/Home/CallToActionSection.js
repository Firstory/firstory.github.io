import React from 'react';
import cx from 'classnames';
import Pic1 from '../../assets/pic1.png';
import Pic2 from '../../assets/pic2.png';
import styles from './CallToActionSection.module.css';
import ArrowSvg from './ArrowSvg';
import ManSvg from './ManSvg';

function CallToActionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>打造個人品牌從 Firstory 開始</h2>
        <a className={styles.button}>免費註冊</a>
        {/* <p className={styles.text}>已經有 Podcast 了嗎 ？</p>
        <a className={styles.arrowLink}>
          搬家到 Firstory
          <ArrowSvg className={styles.arrow} />
        </a> */}
        <ManSvg className={styles.man}/>
      </div>
    </section>
  );
}

export default CallToActionSection;