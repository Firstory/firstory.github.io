import React from 'react';
import { IntlProvider } from 'react-intl';
import Pricing from '../components/Pricing';
import messages from '../i18n/zh';

function Home() {
  return (
    <IntlProvider locale="zh" messages={messages}>
      <Pricing />
    </IntlProvider>
  );
}

export default Home;
