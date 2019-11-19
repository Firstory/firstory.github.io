import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import MainSection from '../components/Home/MainSection';
import FeatureSection from '../components/Home/FeatureSection';
import Pricing from '../components/Pricing';
import CreatorSection from '../components/Home/CreatorSection';
import HoldingPhoneSvg from '../components/Home/HoldingPhoneSvg';
import HeadphoneSvg from '../components/Home/HeadphoneSvg';
import DonateAndSubscriptionSvg from '../components/Home/DonateAndSubscriptionSvg';

function Home() {
  return (
    <Layout>
      <SEO />
      <MainSection />
      <FeatureSection
        Image={HoldingPhoneSvg}
        featureTitle={'用手機就可以\n製作 Podcast！'}
        featureList={[
          '操作簡單、方便的錄音工具。',
          '內建背景音樂庫，為故事增添風格。',
          '獨特靈感系統，不怕沒故事說。',
        ]}
      />
      <FeatureSection
        Image={HeadphoneSvg}
        featureTitle={'不管您的聽眾在哪收聽，\n都找得到您的節目。'}
        featureList={['一鍵發布至\nApple Podcasts、Spotify']}
        reverse
      />
      <FeatureSection
        title={'Podcast 盈利功能即將上線！'}
        Image={DonateAndSubscriptionSvg}
        featureTitle={'斗內 (Donate) 功能'}
        featureList={['聽眾可以隨時支持您的 Podcast。']}
        featureSubTitle={'訂閱 (Subscriptions) 功能'}
        featureSubList={[
          '聽眾可以每個月固定支持您的節目，\n並成為您社群中的一份子！',
        ]}
      />
      <Pricing />
      <CreatorSection />
    </Layout>
  );
}

export default Home;
