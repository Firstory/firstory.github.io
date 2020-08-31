import React from 'react';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import PlanColumn from './PlanColumn';
import ComingSoon from './ComingSoon';
import Layout from '../Layout';
import Seo from '../Seo';
import { plans } from './constants';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(6),
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  buttonRow: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  planSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6),
    },
  },
  comingSoon: {
    display: 'flex',
    margin: theme.spacing(4, 0),
  },
  iconHint: {
    width: 20,
    height: 20,
  },
}));

function Pricing() {
  const classes = useStyles();
  const [plan, setPlan] = React.useState(plans.PREMIUM);

  return (
    <Layout pathname="/pricing">
      <Seo title="資費方案" />
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          <FormattedMessage id="pricing.title" />
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          <FormattedMessage id="pricing.covid19Free" />
        </Typography>
        <div className={classes.buttonRow}>
          <ButtonGroup disableElevation color="secondary">
            {[
              { plan: plans.FREE, text: '基本方案' },
              { plan: plans.PREMIUM, text: '標準方案' },
              // { plan: plans.ENTERPRISE, text: '企業方案' },
            ].map(p => (
              <Button
                key={p.text}
                variant={plan === p.plan ? 'contained' : 'outlined'}
                onClick={() => setPlan(p.plan)}
              >
                {p.text}
              </Button>
            ))}
          </ButtonGroup>
        </div>
        <div className={classes.planSection}>
          <PlanColumn plan="FREE" active={plan === plans.FREE} />
          <PlanColumn plan="PREMIUM" active={plan === plans.PREMIUM} />
          {/*
          <PlanColumn plan="ENTERPRISE" active={plan === plans.ENTERPRISE} />
          */}
        </div>
        <Typography variant="caption" className={classes.comingSoon}>
          <ComingSoon alt="Coming Soon" className={classes.iconHint} />
          <FormattedMessage id="pricing.comingSoon" />
        </Typography>
      </Container>
    </Layout>
  );
}

export default Pricing;
