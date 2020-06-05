import React from 'react';
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
        to: '/#feature',
      },
      text: '功能特色',
    },
    {
      props: {
        component: Link,
        to: '/pricing',
      },
      text: '資費方案',
    },
    {
      props: {
        component: Link,
        to: '/help',
      },
      text: '幫助中心',
    },
    {
      props: {
        component: Link,
        to: '/policy',
      },
      text: '服務條款',
    },
    {
      props: {
        component: 'a',
        href: 'https://open.firstory.me',
      },
      text: '瀏覽節目',
    },
    {
      props: {
        component: 'a',
        href: 'https://studio.firstory.me',
      },
      text: '開始 Podcast',
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
      text: 'Facebook',
    },
    {
      props: {
        component: 'a',
        href: 'https://t.me/firstory',
      },
      text: 'Telegram',
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
                      {item.text}
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
