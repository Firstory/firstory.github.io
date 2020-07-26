import React from 'react';
import { FormattedMessage } from 'react-intl';
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
        <FormattedMessage id="cta.title" />
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        component="a"
        href="https://studio.firstory.me"
        target="_blank"
        rel="noopener"
        className={classes.button}
      >
        <FormattedMessage id="cta.button" />
      </Button>
    </Container>
  );
}

export default CallToAction;
