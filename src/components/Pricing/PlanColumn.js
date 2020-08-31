import React from 'react';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CloseIcon from '@material-ui/icons/Close';
import Rocket from './Rocket';
import { plans, developing, planBits, featureList } from './constants';
import { lightTheme, darkTheme } from '../../theme';

const planNames = {
  FREE: 'pricing.plan.free',
  PREMIUM: 'pricing.plan.premium',
  ENTERPRISE: 'pricing.plan.enterprise',
};

const buttonTexts = {
  FREE: 'pricing.plan.freeButton',
  PREMIUM: 'pricing.free',
  ENTERPRISE: 'pricing.plan.enterpriseButton',
};

const limits = {
  FREE: 1,
  PREMIUM: 0,
  ENTERPRISE: 0,
};

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(2),
    borderRadius: 10,
    position: 'relative',
  },
  rocket: {
    position: 'absolute',
    top: 0,
    left: -20,
    height: 150,
    transform: 'translateY(-50%)',
  },
  hotSale: {
    position: 'absolute',
    top: 0,
    left: '50%',
    borderRadius: 5,
    background: 'white',
    color: lightTheme.palette.primary.main,
    padding: theme.spacing(1, 2),
    transform: 'translate(-50%, -50%)',
    whiteSpace: 'pre-line',
  },
  hotSaleText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  premium: {
    flex: 1.25,
    margin: theme.spacing(0, 2),
    paddingTop: theme.spacing(8),
    background:
      'linear-gradient(to bottom, rgb(244, 41, 99), rgb(240, 151, 20))',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      marginTop: theme.spacing(4),
    },
  },
  premiumText: {
    color: 'white',
  },
  notActive: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  price: {
    textAlign: 'center',
    color: '#10cfaa',
    '&$premiumText': {
      color: 'white',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(4, 0),
  },
  button: {},
  premiumButton: {
    height: 60,
    width: 120,
    fontSize: 20,
  },
  limit: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  limitTime: {
    margin: theme.spacing(1, 0),
  },
  feature: {
    display: 'flex',
    padding: theme.spacing(2),
  },
  unavailableFeature: {
    opacity: 0.3,
  },
  featureIcon: {
    marginRight: theme.spacing(2),
  },
  featureText: {
    fontWeight: 'bold',
  },
}));

function PlanColumn({ plan, active }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={plan === plans.PREMIUM ? darkTheme : lightTheme}>
      <Paper
        elevation={3}
        className={cx(classes.container, {
          [classes.premium]: plan === plans.PREMIUM,
          [classes.notActive]: !active,
        })}
      >
        {plan === plans.PREMIUM && (
          <>
            <Rocket alt="Rocket" className={classes.rocket} />
            <Paper className={classes.hotSale}>
              <Typography color="primary" className={classes.hotSaleText}>
                <FormattedMessage id="pricing.hotSale" />
              </Typography>
            </Paper>
          </>
        )}
        <Typography
          variant="h5"
          color="textPrimary"
          className={cx(classes.title)}
        >
          <FormattedMessage id={planNames[plan]} />
        </Typography>
        {plan === plans.PREMIUM ? (
          <>
            <Typography
              variant="h6"
              className={cx(classes.price, classes.premiumText)}
            >
              <del>
                <FormattedMessage id="pricing.monthPrice" />
              </del>
            </Typography>
            <Typography
              variant="caption"
              component="p"
              className={cx(classes.price, classes.premiumText)}
            >
              <del>
                <FormattedMessage id="pricing.anually" />
                <br />
                <FormattedMessage id="pricing.orMonthPrice" />
              </del>
            </Typography>
          </>
        ) : (
          <Typography variant="h6" className={classes.price}>
            <FormattedMessage
              id={plan === plans.FREE ? 'pricing.free' : 'pricing.contactUs'}
            />
          </Typography>
        )}
        <div className={classes.buttonContainer}>
          <Button
            className={cx(classes.button, {
              [classes.premiumButton]: plan === plans.PREMIUM,
            })}
            variant={plan === plans.PREMIUM ? 'contained' : 'outlined'}
            color={plan === plans.PREMIUM ? 'secondary' : 'default'}
            size="large"
            component="a"
            href={
              plan === plans.ENTERPRISE
                ? 'https://m.me/firstory.inc'
                : 'https://studio.firstory.me'
            }
            target="_blank"
            rel="noopener"
          >
            <FormattedMessage id={buttonTexts[plan]} />
          </Button>
        </div>
        <Typography variant="h6" color="default" className={classes.limit}>
          <FormattedMessage
            id="pricing.monthlyQuota"
            values={{
              limit: (
                <Typography
                  variant="h4"
                  color={plan === plans.PREMIUM ? 'default' : 'secondary'}
                  className={classes.limitTime}
                >
                  <FormattedMessage
                    id={limits[plan] ? 'pricing.hours' : 'pricing.noLimit'}
                    values={{ hours: limits[plan] }}
                  />
                </Typography>
              ),
            }}
          />
        </Typography>
        {Object.keys(featureList).map(f => {
          let className;
          let alt;
          let Icon;
          if (featureList[f] & planBits[plan]) {
            if (featureList[f] & developing) {
              className = classes.developingFeature;
              alt = 'Coming Soon';
              Icon = RadioButtonCheckedIcon;
            } else {
              className = classes.availableFeature;
              alt = 'Available';
              Icon = CheckIcon;
            }
          } else {
            className = classes.unavailableFeature;
            alt = 'Not Available';
            Icon = CloseIcon;
          }
          return (
            <div key={f} className={classes.feature}>
              <Icon className={cx(classes.featureIcon, className)} alt={alt} />
              <Typography className={cx(classes.featureText, className)}>
                <FormattedMessage id={`pricing.${f}`} />
              </Typography>
            </div>
          );
        })}
      </Paper>
    </ThemeProvider>
  );
}

export default PlanColumn;
