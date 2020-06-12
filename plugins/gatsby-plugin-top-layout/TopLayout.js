import React from 'react';
import { Helmet } from 'react-helmet';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { colors, lightTheme } from '../../src/theme';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {props.children}
        <MessengerCustomerChat
          shouldShowDialog
          pageId="1031242460349972"
          appId="1373748122771244"
          themeColor={colors.tomato}
          language="zh_TW"
        />
      </ThemeProvider>
    </React.Fragment>
  );
}
