import React from 'react';
import cx from 'classnames';
import styles from './Navbar.module.css';
import Logo from '../../assets/logo.svg';
import Menu from '../../assets/menu.svg';

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img src={Logo} className={styles.logo} alt="Logo" />
          <div className={styles.title}>Firstory</div>
          <nav className={cx(styles.navItem, styles.button)}>
            <a href="https://open.firstory.me/browse">開始製作</a>
          </nav>
          <nav className={styles.navItem}>
            <a to="/pricing">資費方案</a>
          </nav>
          <nav className={styles.navItem}>
            <a href="https://www.instagram.com/firstory_lab/">Instagram</a>
          </nav>
          <nav className={styles.navItem}>
            <a href="https://www.facebook.com/firstory.inc/">Facebook</a>
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
