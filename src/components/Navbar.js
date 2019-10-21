import React from 'react';
import styles from '../styles/Navbar.module.css';
import Logo from '../assets/logo.svg';

function Navbar() {
  return (
    <header>
      <div className={styles.container}>
        <img src={Logo} className={styles.logo} alt="Logo" />
        <div className={styles.title}>Firstory</div>
        <nav className={styles.navItem}>
          <a href="https://www.instagram.com/firstory_lab/">Instagram</a>
        </nav>
        <nav className={styles.navItem}>
          <a href="https://www.facebook.com/firstory.inc/">Facebook</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
