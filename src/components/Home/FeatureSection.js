import React from 'react';
import cx from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import FeatureRow from './FeatureRow';
import applePodcast from '../../assets/home/apple-podcasts.png';
import googlePodcast from '../../assets/home/google-podcasts.svg';
import spotify from '../../assets/home/spotify.svg';
import soundon from '../../assets/home/soundon.png';
import pocketcast from '../../assets/home/pocketcast.png';

const useStyles = makeStyles(theme => ({
  platformRow: {
    display: 'flex',
  },
  platformIcon: {
    width: 36,
    height: 36,
    marginRight: theme.spacing(2),
  },
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
              ...GatsbyImageSharpFluid
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
        subtitle: '為你的 Podcast 找一個家',
        title: 'Podcast Hosting 服務',
        description: `幫你最快上架到各大平台，
並且用最完整的數據分析節目成效。`,
        color: '#259271',
        backgroundColor: '#e9faf5',
        image: imgMap.hosting,
        bottom: (
          <div className={classes.platformRow}>
            <img
              className={classes.platformIcon}
              src={applePodcast}
              alt="Apple Podcasts"
            />
            <img className={classes.platformIcon} src={spotify} alt="Spotify" />
            <img
              className={classes.platformIcon}
              src={googlePodcast}
              alt="Google Podcasts"
            />
            <img
              className={classes.platformIcon}
              src={pocketcast}
              alt="Pocketcast"
            />
            <img className={classes.platformIcon} src={soundon} alt="SoundOn" />
          </div>
        ),
      },
      {
        subtitle: '找到你的第一批聽眾',
        title: 'Podcast 社群推廣服務',
        description: `透過 Instagram、Telegram 等社群平台，
我們幫你找到第一批喜愛你的聽眾。`,
        color: '#dfa71b',
        backgroundColor: '#fff4d8',
        image: imgMap.community,
        bottom: (
          <div className={classes.buttonRow}>
            {[
              {
                href: 'https://www.facebook.com/firstory.inc',
                text: '追蹤我們的 FB',
              },
              {
                href: 'https://www.instagram.com/firstory_lab',
                text: '追蹤我們的 IG',
              },
              {
                href: 'https://t.me/firstory',
                text: '加入 Telegram 頻道',
              },
              {
                href: 'https://medium.com/firstory',
                text: '追蹤我們的 Medium',
              },
            ].map(button => (
              <Button
                key={button.text}
                component="a"
                href={button.href}
                target="_blank"
                variant="contained"
                className={classes.communityButton}
              >
                {button.text}
              </Button>
            ))}
          </div>
        ),
      },
      {
        subtitle: '了解聽眾最直接的回饋',
        title: 'Podcast 整合留言板功能',
        description: `受夠 Podcast 不能留言、聽眾要東奔西走才能找到你？
我們為每一集節目都建了一個留言板，
聽眾可以直接在這裡和你互動。`,
        color: '#f6a041',
        backgroundColor: '#fdf4ea',
        image: imgMap.comment,
      },
      {
        subtitle: '讓聽眾用最簡單的方式支持你',
        title: '創作者贊助金流服務',
        description: `透過我們的創作者專屬連結，
讓在任何平台收聽的粉絲都能直接贊助你。`,
        color: '#f95e76',
        backgroundColor: '#ffe6ea',
        image: imgMap.donate,
        bottom: (
          <div className={classes.buttonRow}>
            <Button
              component="a"
              href="https://medium.com/firstory/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-firstory-%E7%87%9F%E5%88%A9%E5%8A%9F%E8%83%BD%E8%88%87%E6%8F%90%E9%A0%98-567853997d93"
              target="_blank"
              variant="contained"
              size="large"
              className={classes.donateButton}
            >
              如何設定贊助
            </Button>
          </div>
        ),
      },
      {
        subtitle: '找到與你契合的品牌',
        title: '品牌商廣告媒合服務',
        description: `透過節目主題與聽眾輪廓分析，
我們為你媒合有興趣投放廣告的品牌。`,
        color: '#717ef5',
        backgroundColor: '#eaecff',
        image: imgMap.advertise,
      },
      {
        subtitle: '解決你經營 Podcast 的大小問題',
        title: 'Podcast 製作諮詢服務',
        description: `我們以自己經營和研究 Podcast 節目的經驗，
幫你解決遇到的各種麻煩和疑問。
身為創作者，我們最懂你。`,
        color: '#7a5149',
        backgroundColor: '#fff3f1',
        image: imgMap.consult,
        bottom: (
          <div className={classes.buttonRow}>
            <Button
              component="a"
              href="https://m.me/firstory.inc"
              target="_blank"
              variant="contained"
              size="large"
              className={classes.contactButton}
            >
              聯絡我們
            </Button>
          </div>
        ),
      },
      {
        subtitle: '最懂 Podcaster 的錄音空間',
        title: 'Podcast 錄音空間租用',
        description: `我們與 LAZI 團隊聯手打造的錄音室 LAZI Cube，
提供頂級 RODE 器材，給追求好品質的你。`,
        color: '#524434',
        backgroundColor: '#fff6eb',
        image: imgMap.studio,
        bottom: (
          <div className={cx(classes.buttonRow, classes.buttonRowStart)}>
            <Button
              component="a"
              href="https://lazicorner.com/"
              target="_blank"
              variant="contained"
              size="large"
              className={classes.laziButton}
            >
              預訂錄音室
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
