import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
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
    marginBottom: theme.spacing(6),
  },
  button: {
    height: 50,
    width: 150,
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
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <div className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        你的聲音，無遠弗屆
      </Typography>
      <Typography variant="h6" className={classes.description}>
        我們相信每個人都是故事人，相信聲音和分享的力量。
        <br />
        只需簡單錄製，剩下發布就交給 Firstory， <br />
        我們是 Podcaster 最強的後盾
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
      >
        免費開始
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
