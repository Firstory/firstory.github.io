import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PreviewImage from '../assets/content-startup.jpg';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    textAlign: 'center',
    position: 'relative',
  },
  title: {},
  image: {
    marginBottom: theme.spacing(4),
  },
  section: {
    fontWeight: 'normal',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  reverse: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(6, 0),
    marginBottom: theme.spacing(6),
    '& $title, $section': {
      color: 'white',
    },
    '& $button': {
      color: theme.palette.secondary.main,
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: 'white',
      },
    },
  },
  block: {
    marginBottom: theme.spacing(12),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  learnMore: {
    fontWeight: 'bold',
  },
  hint: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: 0,
    right: 0,
    opacity: 0.5,
  },
}));

function ContentStartup() {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "campaign.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <Layout hideCampaign>
      <Seo title="Firstory 內容啟動計劃" image={PreviewImage} />
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Img
            loading="eager"
            fluid={data.file.childImageSharp.fluid}
            alt="image"
            className={classes.image}
          />
        </Container>
        <Container maxWidth="sm">
          <Typography variant="h4" component="h1" className={classes.title}>
            讓 Firstory 成為你的第一位贊助者
          </Typography>
          <Typography variant="h6" component="p" className={classes.section}>
            我們相信內容有價，每個節目都是創作者的心血。
            <br />
            創作者需要支持，才能走得比別人更長、更遠。
            <br />
            推出贊助功能至今，我們發現許多創作者已經開始獲益。
            <br />
            今天，Firstory 想要成為你創作路上的第一位贊助者！
            <br />
          </Typography>
        </Container>
        <Container maxWidth="sm">
          <Typography variant="h4" component="h2" className={classes.title}>
            Firstory 內容啟動計劃
          </Typography>
          <Typography variant="h6" component="p" className={classes.section}>
            我們推出全新的邀請碼功能，
            <br />
            鼓勵創作者邀請朋友加入， <br />
            雙方都能獲得來自 Firstory 的贊助。 <br />
            <br />
            <Typography component="span" className={classes.learnMore}>
              了解內容啟動計劃
              <br />↓
            </Typography>
          </Typography>
        </Container>
        <div className={classes.reverse}>
          <Container maxWidth="sm">
            <Typography variant="h4" component="h2" className={classes.title}>
              設置贊助功能
            </Typography>
            <Typography variant="h6" component="p" className={classes.section}>
              贊助功能在各大收聽平台都能使用，
              <br />
              讓聽眾以最直接的方式支持你創作。 <br />
            </Typography>
            <Button
              variant="contained"
              component="a"
              size="large"
              href="https://medium.com/firstory/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-firstory-%E7%87%9F%E5%88%A9%E5%8A%9F%E8%83%BD%E8%88%87%E6%8F%90%E9%A0%98-567853997d93"
              target="_blank"
              className={classes.button}
            >
              設置贊助功能
            </Button>
          </Container>
        </div>
        <Container maxWidth="sm">
          <div className={classes.block}>
            <Typography variant="h4" component="h2" className={classes.title}>
              邀請碼使用方式
            </Typography>
            <Typography variant="h6" component="p" className={classes.section}>
              邀請你的朋友加入或轉移至 Firstory， <br />
              並且前往後台填寫你的專屬邀請碼，
              <br />
              當他們成功發布節目 / 轉移至 Firstory，
              <br />
              雙方即可獲得 Firstory 贊助的 Podcast 啟動基金！
              <br />
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              component="a"
              size="large"
              href="https://studio.firstory.me/invite-code"
              target="_blank"
              className={classes.button}
            >
              取得邀請碼
            </Button>
          </div>
        </Container>
        <Typography variant="caption" className={classes.hint}>
          Firstory 保留對活動的最終解釋權。
        </Typography>
      </div>
    </Layout>
  );
}

export default ContentStartup;
