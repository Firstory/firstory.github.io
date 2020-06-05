import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: theme.spacing(6),
  },
  button: {
    fontSize: '1.2rem',
    height: 60,
    width: 200,
  },
}));

function CallToAction() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" color="primary" className={classes.title}>
        五個步驟，你的聲音即將被世界聽見。
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        component="a"
        href="https://studio.firstory.me"
        target="_blank"
        className={classes.button}
      >
        直接開始
      </Button>
    </Container>
  );
}

export default CallToAction;
