import React from 'react';
import styles from './PartnerShipSection.module.css';
import DIT from '../../assets/Partnership/dit_startup.jpg';
import DRAGON from '../../assets/Partnership/dragon.png';
import FITI from '../../assets/Partnership/fiti.png';
import TSS from '../../assets/Partnership/tss.png';
import USTART from '../../assets/Partnership/ustart.png';

function PartnerShipSection() {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <img className={styles.image} src={DIT} alt="創夢市集" />
        <img className={styles.image} src={DRAGON} alt="Dragon" />
        <img className={styles.image} src={FITI} alt="FITI" />
        <img className={styles.image} src={TSS} alt="TSS" />
        <img className={styles.image} src={USTART} alt="UStart" />
      </div>
    </section>
  );
}

export default PartnerShipSection;
