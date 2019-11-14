import React from 'react';
import cx from 'classnames';
import mixpanel from 'mixpanel-browser';
import PlanColumn from './PlanColumn';
import ComingSoon from './ComingSoon';
import Available from './Available';
import NotAvailable from './NotAvailable';
import HotSale from './HotSale';
import Rocket from './Rocket';
import {
  free,
  premium,
  enterprise,
  developing,
  featureList,
  plans,
} from './constants';
import { i18n } from '../../i18n';
import styles from './Pricing.module.css';

mixpanel.init('1fa276e4e72e21867df7c429e861eecf');
window.mixpanel = mixpanel;

function Pricing() {
  const [plan, setPlan] = React.useState(plans.PREMIUM);

  function handlePaymentClick(p) {
    mixpanel.track('Interest in Payment', { plan: p });
    alert('即將於 12 月推出！敬請期待！');
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
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
          <PlanColumn
            plan="FREE"
            active={plan === plans.FREE}
            onPaymentClick={handlePaymentClick}
          />
          <PlanColumn
            plan="PREMIUM"
            active={plan === plans.PREMIUM}
            onPaymentClick={handlePaymentClick}
          />
          <PlanColumn
            plan="ENTERPRISE"
            active={plan === plans.ENTERPRISE}
            onPaymentClick={handlePaymentClick}
          />
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
