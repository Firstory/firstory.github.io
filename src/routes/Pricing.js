import React from 'react';
import cx from 'classnames';
import styles from '../styles/Pricing.module.css';
import { i18n } from '../i18n';

const free = 1;
const premium = 2;
const enterprise = 4;
const developing = 8;
const featureList = {
  basicAnalytics: free | premium | enterprise,
  appRecord: free | premium | enterprise,
  personalSite: free | premium | enterprise,
  embeddedPlayer: free | premium | enterprise,
  customUrl: premium | enterprise,
  removeWaterMark: premium | enterprise,
  advancedAnalytics: premium | enterprise | developing,
  scheduling: premium | enterprise | developing,
  topicPublish: premium | enterprise | developing,
  advancedSocialShare: premium | enterprise | developing,
  paywall: premium | enterprise | developing,
  sponsorship: premium | enterprise | developing,
  multiMember: enterprise | developing,
  multiShow: enterprise | developing,
};

function Pricing() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        升級成為 Firstory Infinity 讓您的節目飛上太空！{' '}
      </h2>
      <div className={styles.planTitle}>資費方案</div>
      <div className={styles.planSubTitle}>
        免費體驗不需要信用卡，付費方案可以隨時取消。
      </div>
      <div className={styles.planSection}>
        <div className={styles.planBlock}>
          <div className={styles.planName}>基本方案</div>
          <div className={styles.planPrice}>免費</div>
          <div className={styles.planButton}>開始使用</div>
          <div className={styles.planMonthly}>
            每個月 <div>一小時</div>上傳時間
          </div>
          {Object.keys(featureList).map(f => {
            let className;
            if (featureList[f] === (free | premium | enterprise)) {
              className = styles.availableFeature;
            } else {
              className = styles.unavailableFeature;
            }
            return (
              <div key={f} className={cx(styles.planText, className)}>
                {i18n.zh.pricing[f]}
              </div>
            );
          })}
        </div>
        <div className={styles.planBlock}>
          <div className={styles.planName}>基本方案</div>
          <div className={styles.planPrice}>免費</div>
          <div>開始使用</div>
          <div className={styles.planMonthly}>
            每個月 <div>一小時</div>上傳時間
          </div>
          {Object.keys(featureList).map(f => {
            let className;
            if (
              featureList[f] === (free | premium | enterprise) ||
              featureList[f] === (premium | enterprise)
            ) {
              className = styles.availableFeature;
            } else if (featureList[f] === (premium | enterprise | developing)) {
              className = styles.developingFeature;
            } else {
              className = styles.unavailableFeature;
            }
            return (
              <div key={f} className={cx(styles.planText, className)}>
                {i18n.zh.pricing[f]}
              </div>
            );
          })}
        </div>
        <div className={styles.planBlock}>
          <div className={styles.planName}>基本方案</div>
          <div className={styles.planPrice}>免費</div>
          <div>開始使用</div>
          <div className={styles.planMonthly}>
            每個月 <div>一小時</div>上傳時間
          </div>
          {Object.keys(featureList).map(f => {
            let className;
            if (
              featureList[f] === (free | premium | enterprise) ||
              featureList[f] === (premium | enterprise) ||
              featureList[f] === enterprise
            ) {
              className = styles.availableFeature;
            } else if (
              featureList[f] === (premium | enterprise | developing) ||
              featureList[f] === (enterprise | developing)
            ) {
              className = styles.developingFeature;
            } else {
              className = styles.unavailableFeature;
            }
            return (
              <div key={f} className={cx(styles.planText, className)}>
                {i18n.zh.pricing[f]}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
