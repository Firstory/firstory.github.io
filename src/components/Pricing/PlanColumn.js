import React from 'react';
import cx from 'classnames';
import styles from './Pricing.module.css';
import { i18n } from '../../i18n';
import ComingSoon from './ComingSoon';
import Available from './Available';
import NotAvailable from './NotAvailable';
import HotSale from './HotSale';
import Rocket from './Rocket';
import { plans, developing, planBits, featureList } from './constants';

const planNames = {
  FREE: '基本方案',
  PREMIUM: '標準方案',
  ENTERPRISE: '企業方案',
};

const limits = {
  FREE: 1,
  PREMIUM: 0,
  ENTERPRISE: 0,
};

function PlanColumn({ plan, active, onPaymentClick }) {
  const handlePaymentClick = React.useCallback(() => {
    onPaymentClick(plan);
  }, [plan, onPaymentClick]);

  return (
    <div
      className={cx(styles.planBlock, {
        [styles.planBlockPremium]: plan === plans.PREMIUM,
        [styles.planBlockNotActive]: !active,
      })}
    >
      {plan === plans.PREMIUM && (
        <div className={styles.absoluteRow}>
          <Rocket alt="Rocket" className={styles.rocket} />
          <HotSale alt="Hot sale" className={styles.hotSale} />
        </div>
      )}
      <div
        className={cx(styles.planName, {
          [styles.planTextPremium]: plan === plans.PREMIUM,
        })}
      >
        {planNames[plan]}
      </div>
      {plan === plans.PREMIUM ? (
        <>
          <div className={cx(styles.planPrice, styles.planTextPremium)}>
            NT$249 / 月
          </div>
          <div className={styles.planPriceDescription}>
            年繳{'\n'}或者月繳 NT$299 / 月
          </div>
        </>
      ) : (
        <div className={styles.planPrice}>
          {plan === plans.FREE ? '免費' : '聯絡我們'}
        </div>
      )}
      <button
        type="button"
        className={cx(
          styles.planButton,
          plan === plans.PREMIUM
            ? styles.planButtonStroke
            : styles.planButtonNormal,
        )}
        onClick={handlePaymentClick}
      >
        聯絡我們
      </button>
      <div
        className={cx(styles.planMonthly, {
          [styles.planTextPremium]: plan === plans.PREMIUM,
        })}
      >
        每個月
        <div
          className={cx(styles.planLimit, {
            [styles.planTextPremium]: plan === plans.PREMIUM,
          })}
        >
          {limits[plan] ? `${limits[plan]} 小時` : '無限制'}
        </div>
        上傳時間
      </div>
      {Object.keys(featureList).map(f => {
        let className;
        let alt;
        let Icon;
        if (featureList[f] & planBits[plan]) {
          if (featureList[f] & developing) {
            className = styles.developingFeature;
            alt = 'Coming Soon';
            Icon = ComingSoon;
          } else {
            className = styles.availableFeature;
            alt = 'Available';
            Icon = Available;
          }
        } else {
          className =
            plan === plans.PREMIUM
              ? styles.unavailablePremium
              : styles.unavailableFeature;
          alt = 'Not Available';
          Icon = NotAvailable;
        }
        return (
          <div
            key={f}
            className={cx(styles.planTextRow, className, {
              [styles.planRowPremium]: plan === plans.PREMIUM,
            })}
          >
            <Icon
              alt={alt}
              className={cx(styles.icon, className, {
                [styles.iconPremium]: plan === plans.PREMIUM,
              })}
            />
            <div
              className={cx(styles.planText, className, {
                [styles.planTextPremium]: plan === plans.PREMIUM,
              })}
            >
              {i18n.zh.pricing[f]}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlanColumn;
