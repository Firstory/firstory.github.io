import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    paddingTop: theme.spacing(16),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(8),
    },
    paddingBottom: theme.spacing(16),
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(8),
    },
    textAlign: 'center',
    position: 'relative',
  },
  title: {
    marginBottom: theme.spacing(6),
    fontWeight: 'bold',
  },
  description: {
    marginBottom: theme.spacing(6),
  },
  button: {
    height: 50,
    width: 150,
  },
  background: {
    backgroundColor: 'steelblue',
    width: '100%',
    height: 300,
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
  },
}));

function MainSection() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Hey! 我們是 Firstory
      </Typography>
      <Typography className={classes.description}>
        我們相信每個人都是故事人，相信聲音和分享的力量。
        <br />
        只需簡單錄製，剩下發布就交給 Firstory， <br />
        們會讓全世界都聽得到你的故事。
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
      >
        立即加入
      </Button>
      <div className={classes.background} />
    </div>
  );
}

export default MainSection;
