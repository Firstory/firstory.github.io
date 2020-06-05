import React from 'react';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  wrapper: {
    position: 'relative',
    paddingBottom: 150,
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 0,
      marginBottom: theme.spacing(4),
    },
  },
  info: {
    position: 'relative',
    padding: theme.spacing(6, 8),
    paddingBottom: theme.spacing(8),
    width: '70%',
    marginLeft: props => (props.reverse ? '30%' : 0),
    display: 'flex',
    justifyContent: props => (props.reverse ? 'flex-end' : 'flex-start'),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: props => (props.reverse ? 0 : 0),
      width: '100%',
      paddingBottom: theme.spacing(6),
    },
  },
  infoBackground: {
    position: 'absolute',
    backgroundColor: props => props.backgroundColor,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    left: 0,
    top: 0,
    zIndex: -2,
    [theme.breakpoints.down('xs')]: {
      borderRadius: 0,
    },
  },
  subtitle: {
    color: props => props.color,
  },
  title: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },
  description: {
    color: props => props.color,
    whiteSpace: 'pre-line',
    marginBottom: theme.spacing(2),
  },
  imageWrapper: {},
  imageContainer: {
    width: '50%',
    height: 300,
    position: 'absolute',
    left: props => (props.reverse ? 0 : 'auto'),
    right: props => (props.reverse ? 'auto' : 0),
    bottom: 0,
    zIndex: -1,
    [theme.breakpoints.down('md')]: {
      height: 200,
    },
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      width: '100%',
      padding: theme.spacing(0, 2),
      marginTop: -50,
      height: 200,
    },
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
}));

function FeatureRow({
  subtitle,
  title,
  description,
  color,
  backgroundColor,
  image,
  bottom,
  reverse,
}) {
  const classes = useStyles({ color, backgroundColor, reverse });
  return (
    <Container maxWidth="lg" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.info}>
          <div>
            <Typography variant="h6" className={classes.subtitle}>
              {subtitle}
            </Typography>
            <Typography variant="h4" className={classes.title}>
              {title}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              className={classes.description}
            >
              {description}
            </Typography>
            <div>{bottom}</div>
          </div>
          <div className={classes.infoBackground} />
        </div>
        <div className={classes.imageContainer}>
          <Img
            fluid={image.childImageSharp.fluid}
            className={classes.image}
            objectPosition="50% 20%"
          />
        </div>
      </div>
    </Container>
  );
}

export default FeatureRow;
