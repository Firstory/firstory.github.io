import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
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
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.campaign}>
        <Typography>
          加入我們的內容啟動計畫，讓 Firstory 成為你創作路上第一位贊助者。
        </Typography>
        <RightIcon />
      </div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
