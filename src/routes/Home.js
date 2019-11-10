import React from 'react';
import MainSection from '../components/MainSection';

import FeatureSection from '../components/FeatureSection';
import CreatorSection from '../components/CreatorSection';
import Pricing from './Pricing';

function Home() {
  return (
    <div>
      <MainSection />
      <Pricing />
      <FeatureSection />
      <CreatorSection />
    </div>
  );
}

export default Home;
