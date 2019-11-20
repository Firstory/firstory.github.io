import React from 'react';
import styles from './CreatorSection.module.css';
import creators from './creators.json';

function CreatorSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>合作夥伴</h2>
      <div className={styles.row}>
        {creators.map(c => (
          <a
            key={c.id}
            className={styles.item}
            href={`https://open.firstory.me/user/${c.id}`}
          >
            <img className={styles.image} src={c.avatar} alt={c.name} />
            <h3 className={styles.name}>{c.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CreatorSection;
