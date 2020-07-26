import React from 'react';
import { IntlProvider } from 'react-intl';
import Home from '../components/Home';
import messages from '../i18n/en';

function HomePage() {
  return (
    <IntlProvider locale="en" messages={messages}>
      <Home />
    </IntlProvider>
  );
}

export default HomePage;
