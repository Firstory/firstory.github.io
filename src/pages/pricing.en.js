import React from 'react';
import { IntlProvider } from 'react-intl';
import Pricing from '../components/Pricing';
import messages from '../i18n/en';

function Home() {
  return (
    <IntlProvider locale="en" messages={messages}>
      <Pricing />
    </IntlProvider>
  );
}

export default Home;
