import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Pricing from '../components/Pricing';

function Home() {
  return (
    <Layout>
      <Seo title="資費方案" />
      <Pricing />
    </Layout>
  );
}

export default Home;

