import React from 'react';
import { rhythm } from '../utils/typography';
import styles from './Help/Help.module.css';

function ArticleContainer({ children }) {
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        paddingBottom: `${rhythm(5)}`,
      }}
      className={styles.article}
    >
      {children}
    </div>
  );
}

export default ArticleContainer;
