import React from 'react';
import cx from 'classnames';
import mixpanel from 'mixpanel-browser';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styles from '../styles/Pricing.module.css';
import { i18n } from '../i18n';
import { ReactComponent as ComingSoon } from '../assets/comingsoon.svg';
import { ReactComponent as Available } from '../assets/have.svg';
import { ReactComponent as NotAvailabe } from '../assets/havent.svg';
import { ReactComponent as HotSale } from '../assets/hotsale.svg';
import { ReactComponent as Rocket } from '../assets/rocket.svg';

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

const plans = {
  FREE: 1,
  PREMIUM: 2,
  ENTERPRISE: 3,
};

mixpanel.init('1fa276e4e72e21867df7c429e861eecf');
window.mixpanel = mixpanel;

function Pricing() {
  const [plan, setPlan] = React.useState(plans.PREMIUM);
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        升級成為 Firstory Infinity 讓您的節目飛上太空！
      </h2>
      <div className={styles.planTitle}>資費方案</div>
      <div className={styles.planSubTitle}>
        免費體驗不需要信用卡，付費方案可以隨時取消。
      </div>
      <div className={styles.buttonRow}>
        <button
          className={cx(styles.tabButton, styles.tabButtonLeft, {
            [styles.tabActive]: plan === plans.FREE,
          })}
          onClick={() => setPlan(plans.FREE)}
        >
          基本方案
        </button>
        <button
          className={cx(styles.tabButton, styles.tabButtonMid, {
            [styles.tabActive]: plan === plans.PREMIUM,
          })}
          onClick={() => setPlan(plans.PREMIUM)}
        >
          標準方案
        </button>
        <button
          className={cx(styles.tabButton, styles.tabButtonRight, {
            [styles.tabActive]: plan === plans.ENTERPRISE,
          })}
          onClick={() => setPlan(plans.ENTERPRISE)}
        >
          企業方案
        </button>
      </div>
      <div className={styles.planSection}>
        <div
          className={cx(styles.planBlock, {
            [styles.planBlockNotActive]: !(plan === plans.FREE),
          })}
        >
          <div className={styles.planName}>基本方案</div>
          <div className={styles.planPrice}>免費</div>
          <button
            type="button"
            className={styles.planButton}
            onClick={() => {
              mixpanel.track('Interest in Payment', { plan: 'FREE' });
              alert('即將於 12 月推出！敬請期待！');
            }}
          >
            開始使用
          </button>
          <div className={styles.planMonthly}>
            每個月 <div className={styles.planLimit}>1 小時</div>上傳時間
          </div>
          {Object.keys(featureList).map(f => {
            let className;
            let Icon;
            let alt;
            if (featureList[f] === (free | premium | enterprise)) {
              className = styles.availableFeature;
              Icon = Available;
              alt = 'Available';
            } else {
              className = styles.unavailableFeature;
              Icon = NotAvailabe;
              alt = 'NotAvailable';
            }
            return (
              <div key={f} className={cx(styles.planText, className)}>
                <Icon alt={alt} className={styles.icon} />
                {i18n.zh.pricing[f]}
              </div>
            );
          })}
        </div>
        <div
          className={cx(styles.planBlock, styles.planBlockPremium, {
            [styles.planBlockNotActive]: !(plan === plans.PREMIUM),
          })}
        >
          <div className={styles.absoluteRow}>
            <Rocket alt="Rocket" className={styles.rocket} />
            <HotSale alt="Hot sale" className={styles.hotSale} />
          </div>
          <div className={cx(styles.planName, styles.planTextPremium)}>
            標準方案
          </div>
          <div className={cx(styles.planPrice, styles.planTextPremium)}>
            NT$249 / 月
          </div>
          <div className={styles.planPriceDescription}>
            年繳{'\n'}或者月繳 NT$299 / 月
          </div>
          <button
            type="button"
            className={styles.planButtonStroke}
            onClick={() => {
              mixpanel.track('Interest in Payment', { plan: 'PREMIUM' });
              alert('即將於 12 月推出！敬請期待！');
            }}
          >
            開始使用
          </button>
          <div className={cx(styles.planMonthly, styles.planTextPremium)}>
            每個月{' '}
            <div className={cx(styles.planLimit, styles.planTextPremium)}>
              無限制
            </div>
            上傳時間
          </div>
          {Object.keys(featureList).map(f => {
            let className;
            let Icon;
            let alt;
            if (
              featureList[f] === (free | premium | enterprise) ||
              featureList[f] === (premium | enterprise)
            ) {
              className = styles.availableFeature;
              Icon = Available;
              alt = 'Available';
            } else if (featureList[f] === (premium | enterprise | developing)) {
              className = styles.developingFeature;
              Icon = ComingSoon;
              alt = 'Coming Soon';
            } else {
              className = styles.unavailablePremium;
              Icon = NotAvailabe;
              alt = 'NotAvailable';
            }
            return (
              <div
                key={f}
                className={cx(
                  styles.planText,
                  className,
                  styles.planTextPremium,
                )}
              >
                <Icon
                  alt={alt}
                  className={cx(styles.icon, styles.iconPremium, className)}
                />
                {i18n.zh.pricing[f]}
              </div>
            );
          })}
        </div>
        <div
          className={cx(styles.planBlock, {
            [styles.planBlockNotActive]: !(plan === plans.ENTERPRISE),
          })}
        >
          <div className={styles.planName}>企業方案</div>
          <div className={styles.planPrice}>請聯絡我們</div>
          <button
            type="button"
            className={styles.planButton}
            onClick={() => {
              mixpanel.track('Interest in Payment', { plan: 'ENTERPRISE' });
              alert('即將於 12 月推出！敬請期待！');
            }}
          >
            聯絡我們
          </button>
          <div className={styles.planMonthly}>
            每個月 <div className={styles.planLimit}>無限制</div>上傳時間
          </div>
          {Object.keys(featureList).map(f => {
            let className;
            let alt;
            let Icon;
            if (
              featureList[f] === (free | premium | enterprise) ||
              featureList[f] === (premium | enterprise) ||
              featureList[f] === enterprise
            ) {
              className = styles.availableFeature;
              alt = 'Available';
              Icon = Available;
            } else if (
              featureList[f] === (premium | enterprise | developing) ||
              featureList[f] === (enterprise | developing)
            ) {
              className = styles.developingFeature;
              alt = 'Coming Soon';
              Icon = ComingSoon;
            } else {
              className = styles.unavailableFeature;
              alt = 'Not Available';
              Icon = NotAvailabe;
            }
            return (
              <div key={f} className={cx(styles.planText, className)}>
                <Icon alt={alt} className={cx(styles.icon)} />
                {i18n.zh.pricing[f]}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.iconHint}>
        <ComingSoon alt="Coming Soon" className={cx(styles.icon)} />
        代表即將推出
      </div>
    </section>
  );
}

export default Pricing;
