import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/styles';
import spotify from '../../assets/home/platforms/spotify.svg';
import googlePodcast from '../../assets/home/platforms/google-podcasts.svg';

const useStyles = makeStyles(theme => ({
  platformRow: {
    display: 'flex',
  },
  platformIcon: {
    width: 36,
    height: 36,
    marginRight: theme.spacing(2),
  },
}));

function PlatformRow() {
  const classes = useStyles();

  const imgData = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { glob: "home/platforms/*png" } }) {
        nodes {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  const imgMap = {};
  imgData.allFile.nodes.forEach(f => {
    imgMap[f.name] = f;
  });

  return (
    <div className={classes.platformRow}>
      <Img
        className={classes.platformIcon}
        fluid={imgMap['apple-podcasts-small'].childImageSharp.fluid}
        alt="Apple Podcasts"
      />
      <img className={classes.platformIcon} src={spotify} alt="Spotify" />
      <img
        className={classes.platformIcon}
        src={googlePodcast}
        alt="Google Podcasts"
      />
      <Img
        className={classes.platformIcon}
        fluid={imgMap['pocketcast-small'].childImageSharp.fluid}
        alt="Pocketcast"
      />
      <Img
        className={classes.platformIcon}
        fluid={imgMap['soundon-small'].childImageSharp.fluid}
        alt="SoundOn"
      />
    </div>
  );
}

export default PlatformRow;
