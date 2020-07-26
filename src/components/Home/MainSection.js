import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    paddingTop: theme.spacing(16),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(8),
    },
    paddingBottom: theme.spacing(20),
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
    whiteSpace: 'pre-line',
    marginBottom: theme.spacing(6),
  },
  button: {
    height: 50,
    width: 150,
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  backgroundContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
    [theme.breakpoints.down('sm')]: {
      height: 250,
    },
  },
  background: {
    [theme.breakpoints.down('sm')]: {
      height: '100%',
    },
  },
}));

function MainSection() {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/landscape.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <div className={classes.container}>
      <Container>
        <Typography variant="h3" component="h1" className={classes.title}>
          <FormattedMessage id="home.title" />
        </Typography>
        <Typography variant="h6" component="p" className={classes.description}>
          <FormattedMessage id="home.hero" />
        </Typography>
      </Container>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        component="a"
        href="https://studio.firstory.me"
        target="_blank"
        rel="noopener"
      >
        <FormattedMessage id="nav.startForFree" />
      </Button>
      <div className={classes.backgroundContainer}>
        <Img
          loading="eager"
          fluid={data.file.childImageSharp.fluid}
          alt="background"
          className={classes.background}
        />
      </div>
    </div>
  );
}

export default MainSection;
