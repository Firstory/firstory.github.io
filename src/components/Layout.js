import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/styles';
import MuiLink from '@material-ui/core/Link';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import Navbar from './Navbar';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  campaign: {
    width: '100%',
    color: 'white',
    background: theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
  link: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  },
}));

function Layout({ hideCampaign, children }) {
  const classes = useStyles();

  return (
    <div>
      {!hideCampaign && (
        <div className={classes.campaign}>
          <MuiLink
            component={Link}
            to="/content-startup"
            className={classes.link}
          >
            加入我們的內容啟動計畫，讓 Firstory 成為你創作路上第一位贊助者。
            <RightIcon />
          </MuiLink>
        </div>
      )}
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
