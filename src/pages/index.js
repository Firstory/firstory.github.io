import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MainSection from '../components/Home/MainSection';
import FeatureSection from '../components/Home/FeatureSection';
import Pricing from '../components/Pricing';
import CreatorSection from '../components/Home/CreatorSection';

function Home() {
  return (
    <Layout>
      <SEO />
      <MainSection />
      <FeatureSection />
      <Pricing />
      <CreatorSection />
    </Layout>
  );
}

export default Home;
