import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div style={{ paddingTop: 80 }}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
