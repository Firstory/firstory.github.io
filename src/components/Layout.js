import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: 80 }}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
