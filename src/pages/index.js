import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import MainSection from '../components/Home/MainSection';
import CreatorSection from '../components/Home/CreatorSection';
import FeatureSection from '../components/Home/FeatureSection';

function Home() {
  return (
    <Layout>
      <Seo />
      <MainSection />
      <CreatorSection />
      <FeatureSection />
    </Layout>
  );
}

export default Home;
