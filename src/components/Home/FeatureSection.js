import React, { Fragment } from 'react';
import cx from 'classnames';
import styles from './FeatureSection.module.css';
import HoldingPhoneSvg from './HoldingPhoneSvg';

function FeatureSection(props) {
  const {
    Image,
    featureTitle,
    featureList = [],
    reverse,
    title,
    featureSubTitle,
    featureSubList,
  } = props;
  return (
    <section className={styles.container}>
      <span className={styles.anchor} id="feature"></span>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={cx(styles.row, { [styles.reverse]: reverse })}>
        <div className={cx(styles.left, { [styles.reverse]: reverse })}>
          <Image className={styles.image} />
        </div>
        <ul className={cx(styles.right, { [styles.reverse]: reverse })}>
          <h2 className={styles.featureTitle}>{featureTitle}</h2>
          <div className={styles.list}>
            {featureList.map((item, index) => (
              <li key={index} className={styles.item}>
                {item}
              </li>
            ))}
          </div>
          {featureSubTitle && (
            <Fragment>
              <h2 className={styles.featureSubTitle}>{featureSubTitle}</h2>
              <div className={styles.list}>
                {featureSubList.map((item, index) => (
                  <li key={index} className={styles.item}>
                    {item}
                  </li>
                ))}
              </div>
            </Fragment>
          )}
        </ul>
      </div>
    </section>
  );
}

export default FeatureSection;
