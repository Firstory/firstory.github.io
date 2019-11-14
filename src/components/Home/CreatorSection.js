import React from 'react';
import styles from '../styles/CreatorSection.module.css';
import creators from '../creators.json';

function CreatorSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>來自 Firstory 的創作者</h2>
      <div className={styles.row}>
        {creators.map(c => (
          <a
            key={c.id}
            className={styles.item}
            href={`https://open.firstory.me/user/${c.id}`}
          >
            <h4 className={styles.shortDescription}>{c.shortDescription}</h4>
            <img className={styles.image} src={c.avatar} alt={c.name} />
            <h3 className={styles.name}>{c.name}</h3>
          </a>
        ))}
      </div>
      <a className={styles.button} href="https://open.firstory.me/browse">
        開始你的第一個 Podcast
      </a>
    </section>
  );
}

export default CreatorSection;
