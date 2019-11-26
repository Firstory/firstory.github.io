import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import styles from './Navbar.module.css';
import Logo from '../../assets/logo.svg';
import Menu from '../../assets/menu.svg';
import WebLogoSvg from './WebLogoSvg';

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Link to="/" className={styles.titleLink}>
            <WebLogoSvg className={styles.logo}/>
            <div className={styles.title}>Firstory</div>
          </Link>
          <div className={styles.padding} />
          <nav className={styles.navItem}>
            <Link to="/help">幫助中心</Link>
          </nav>
          <nav className={styles.navItem}>
            <Link to="/pricing">資費方案</Link>
          </nav>
          <nav className={styles.navItem}>
            <a href="https://open.firstory.me/login">登入</a>
          </nav>
          <nav className={styles.navItem}>
            <a href="https://open.firstory.me/signup">免費註冊</a>
          </nav>
          <img
            className={styles.menuIcon}
            src={Menu}
            alt="menu"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
      <div className={cx(styles.menu, { [styles.open]: open })}>
        <div className={styles.menuClose} onClick={() => setOpen(false)}>
          ×
        </div>
        <nav className={styles.menuItem}>
          <Link to="/pricing">資費方案</Link>
        </nav>
        <nav className={styles.menuItem}>
          <a href="https://www.instagram.com/firstory_lab/">Instagram</a>
        </nav>
        <nav className={styles.menuItem}>
          <a href="https://www.facebook.com/firstory.inc/">Facebook</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
