import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { darkTheme } from '../../theme';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2, 0),
    backgroundColor: '#262a3b',
  },
  row: {
    marginBottom: theme.spacing(4),
  },
  linkContainer: {
    margin: theme.spacing(2),
  },
  link: {
    color: 'white',
  },
  copyright: {
    display: 'block',
    textAlign: 'center',
  },
}));

const footers = [
  [
    {
      props: {
        component: Link,
        to: '/pricing',
      },
      textId: 'nav.pricing',
    },
    {
      props: {
        component: 'a',
        href: 'https://intercom.help/firstory',
      },
      textId: 'nav.help',
    },
    {
      props: {
        component: Link,
        to: '/policy',
      },
      textId: 'nav.policy',
    },
    {
      props: {
        component: 'a',
        href: 'https://open.firstory.me',
      },
      textId: 'nav.browseShow',
    },
    {
      props: {
        component: 'a',
        href: 'https://studio.firstory.me',
      },
      textId: 'nav.start',
    },
  ],
  [
    {
      props: {
        component: 'a',
        href: 'https://www.facebook.com/firstory.inc',
      },
      text: 'Facebook',
    },
    {
      props: {
        component: 'a',
        href: 'https://www.instagram.com/firstory_lab/',
      },
      text: 'Instagram',
    },
    {
      props: {
        component: 'a',
        href: 'https://t.me/firstory',
      },
      text: 'Telegram',
    },
    {
      props: {
        component: 'a',
        href: 'https://medium.com/firstory',
      },
      text: 'Medium',
    },
    {
      props: {
        component: 'a',
        href: 'mailto:support@firstory.me',
      },
      text: 'Email: support@firstory.me',
    },
  ],
];

function Footer() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <footer className={classes.container}>
        <Container maxWidth="md">
          <Grid container className={classes.row}>
            {footers.map((column, i) => (
              <Grid key={i} item xs={6}>
                {column.map((item, j) => (
                  <div key={j} className={classes.linkContainer}>
                    <MuiLink className={classes.link} {...item.props}>
                      {item.textId ? (
                        <FormattedMessage id={item.textId} />
                      ) : (
                        item.text
                      )}
                    </MuiLink>
                  </div>
                ))}
              </Grid>
            ))}
          </Grid>
          <Typography color="textPrimary" component="small" variant="caption">
            © Firstory {new Date().getFullYear()}. All Rights Reserved.
          </Typography>
        </Container>
      </footer>
    </ThemeProvider>
  );
}

export default Footer;
