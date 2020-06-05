import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import MainSection from '../components/Home/MainSection';
import CreatorSection from '../components/Home/CreatorSection';
import FeatureSection from '../components/Home/FeatureSection';
import CallToAction from '../components/Home/CallToAction';

function Home() {
  return (
    <Layout>
      <Seo />
      <MainSection />
      <CreatorSection />
      <FeatureSection />
      <CallToAction />
    </Layout>
  );
}

export default Home;
