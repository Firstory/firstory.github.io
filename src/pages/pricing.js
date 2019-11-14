import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Pricing from '../components/Pricing';

function Home() {
  return (
    <Layout>
      <SEO title="資費方案" />
      <Pricing />
    </Layout>
  );
}

export default Home;

