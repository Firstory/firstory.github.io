import React from 'react';
import { Link } from 'gatsby';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.row}>
        <ul className={styles.list}>
          <h3>Firstory</h3>
          <li>
            <Link className={styles.link} href="/#feature">
              功能特色
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/pricing">
              資費方案
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/help">
              幫助中心
            </Link>
          </li>
          <li>
            <a className={styles.link} href="https://open.firstory.me/signup">
              註冊
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://open.firstory.me/login">
              登入
            </a>
          </li>
        </ul>
        <ul className={styles.list}>
          <h3>社群</h3>

          <li>
            <a
              className={styles.link}
              href="https://www.facebook.com/firstory.inc/"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.instagram.com/firstory_lab/"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <small className={styles.copyright}>
        © Firstory {new Date().getFullYear()}. All Rights Reserved.
      </small>
    </footer>
  );
}

export default Footer;
