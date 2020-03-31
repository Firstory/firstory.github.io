import React from 'react';
import cx from 'classnames';
import mixpanel from 'mixpanel-browser';
import PlanColumn from './PlanColumn';
import ComingSoon from './ComingSoon';
import { plans } from './constants';
import styles from './Pricing.module.css';

mixpanel.init('1fa276e4e72e21867df7c429e861eecf');

function Pricing() {
  const [plan, setPlan] = React.useState(plans.PREMIUM);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          升級成為 Firstory Infinity 讓您的節目飛上太空！
        </h2>
        <div className={styles.planTitle}>
          防疫期間在家錄 Podcast 最安全，現在註冊即享有終身免費！
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
          <PlanColumn plan="FREE" active={plan === plans.FREE} />
          <PlanColumn plan="PREMIUM" active={plan === plans.PREMIUM} />
          <PlanColumn plan="ENTERPRISE" active={plan === plans.ENTERPRISE} />
        </div>
        <div className={styles.iconHint}>
          <ComingSoon alt="Coming Soon" className={cx(styles.icon)} />
          代表即將推出
        </div>
      </div>
    </section>
  );
}

export default Pricing;
