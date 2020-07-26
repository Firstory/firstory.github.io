import React from 'react';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import FeatureRow from './FeatureRow';
import PlatformRow from './PlatformRow';

const useStyles = makeStyles(theme => ({
  buttonRow: {
    display: 'flex',
    justifyContent: ' flex-end',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(4),
  },
  buttonRowStart: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: ' flex-start',
    },
  },
  communityButton: {
    color: 'white',
    background: '#bc8d1a',
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
    '&:hover': {
      background: '#bc8d1a',
    },
  },
  donateButton: {
    color: 'white',
    background: '#f95e76',
    '&:hover': {
      background: '#f95e76',
    },
  },
  contactButton: {
    color: 'white',
    background: '#7a5149',
    '&:hover': {
      background: '#7a5149',
    },
  },
  laziButton: {
    color: 'white',
    background: '#524434',
    '&:hover': {
      background: '#524434',
    },
  },
}));

function useFeatureData() {
  const imgData = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { glob: "home/features/*" } }) {
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

  const classes = useStyles();

  const features = React.useMemo(() => {
    return [
      {
        subtitle: 'feature.hosting.subtitle',
        title: 'feature.hosting.title',
        description: 'feature.hosting.description',
        color: '#259271',
        backgroundColor: '#e9faf5',
        image: imgMap.hosting,
        bottom: <PlatformRow />,
      },
      {
        subtitle: 'feature.donate.subtitle',
        title: 'feature.donate.title',
        description: 'feature.donate.description',
        color: '#f95e76',
        backgroundColor: '#ffe6ea',
        image: imgMap.donate,
        bottom: (
          <div className={classes.buttonRow}>
            <Button
              component="a"
              href="https://medium.com/firstory/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-firstory-%E7%87%9F%E5%88%A9%E5%8A%9F%E8%83%BD%E8%88%87%E6%8F%90%E9%A0%98-567853997d93"
              target="_blank"
              rel="noopener"
              variant="contained"
              size="large"
              className={classes.donateButton}
            >
              <FormattedMessage id="feature.donate.howTo" />
            </Button>
          </div>
        ),
      },
      {
        subtitle: 'feature.comment.subtitle',
        title: 'feature.comment.title',
        description: 'feature.comment.description',
        color: '#f6a041',
        backgroundColor: '#fdf4ea',
        image: imgMap.comment,
      },
      {
        subtitle: 'feature.social.subtitle',
        title: 'feature.social.title',
        description: 'feature.social.description',
        color: '#dfa71b',
        backgroundColor: '#fff4d8',
        image: imgMap.community,
        bottom: (
          <div className={classes.buttonRow}>
            {[
              {
                href: 'https://www.facebook.com/firstory.inc',
                text: 'feature.social.facebook',
              },
              {
                href: 'https://www.instagram.com/firstory_lab',
                text: 'feature.social.instagram',
              },
              {
                href: 'https://t.me/firstory',
                text: 'feature.social.telegram',
              },
              {
                href: 'https://medium.com/firstory',
                text: 'feature.social.medium',
              },
            ].map(button => (
              <Button
                key={button.text}
                component="a"
                href={button.href}
                target="_blank"
                rel="noopener"
                variant="contained"
                className={classes.communityButton}
              >
                <FormattedMessage id={button.text} />
              </Button>
            ))}
          </div>
        ),
      },
      {
        subtitle: 'feature.ads.subtitle',
        title: 'feature.ads.title',
        description: 'feature.ads.description',
        color: '#717ef5',
        backgroundColor: '#eaecff',
        image: imgMap.advertise,
      },
      {
        subtitle: 'feature.consult.subtitle',
        title: 'feature.consult.title',
        description: 'feature.consult.description',
        color: '#7a5149',
        backgroundColor: '#fff3f1',
        image: imgMap.consult,
        bottom: (
          <div className={classes.buttonRow}>
            <Button
              component="a"
              href="https://m.me/firstory.inc"
              target="_blank"
              rel="noopener"
              variant="contained"
              size="large"
              className={classes.contactButton}
            >
              <FormattedMessage id="feature.consult.contactUs" />
            </Button>
          </div>
        ),
      },
      {
        subtitle: 'feature.lazi.subtitle',
        title: 'feature.lazi.title',
        description: 'feature.lazi.description',
        color: '#524434',
        backgroundColor: '#fff6eb',
        image: imgMap.studio,
        bottom: (
          <div className={cx(classes.buttonRow, classes.buttonRowStart)}>
            <Button
              component="a"
              href="https://lazicorner.com/"
              target="_blank"
              rel="noopener"
              variant="contained"
              size="large"
              className={classes.laziButton}
            >
              <FormattedMessage id="feature.lazi.book" />
            </Button>
          </div>
        ),
      },
    ];
  }, [classes, imgMap]);

  return features;
}

function FeatureSection() {
  const features = useFeatureData();

  return features.map((f, i) => (
    <FeatureRow key={f.title} {...f} reverse={i % 2 === 1} />
  ));
}

export default FeatureSection;
