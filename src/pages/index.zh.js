import React from 'react';
import { IntlProvider } from 'react-intl';
import Home from '../components/Home';
import messages from '../i18n/zh';

function HomePage() {
  return (
    <IntlProvider locale="zh" messages={messages}>
      <Home />
    </IntlProvider>
  );
}

export default HomePage;
