import React from 'react';
import Layout from '../Layout';
import Seo from '../Seo';
import MainSection from './MainSection';
import CreatorSection from './CreatorSection';
import FeatureSection from './FeatureSection';
import CallToAction from './CallToAction';

function Home() {
  return (
    <Layout>
      <Seo
        schemaData={[
          {
            '@context': 'http://schema.org',
            '@type': 'Organization',
            url: 'https://firstory.me',
            name: 'Firstory',
            logo: 'https://firstory.me/logo.png',
            foundingDate: '2018',
            sameAs: [
              'https://www.facebook.com/firstory.inc',
              'https://www.instagram.com/firstory_lab/',
              'https://twitter.com/firstory4u',
              'https://medium.com/firstory',
              'https://t.me/firstory',
            ],
            potentialAction: [
              {
                '@type': 'SearchAction',
                target:
                  'https://open.firstory.me/search/result/{search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            ],
          },
        ]}
      />
      <MainSection />
      <CreatorSection />
      <FeatureSection />
      <CallToAction />
    </Layout>
  );
}

export default Home;
