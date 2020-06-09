import React from 'react';
import cx from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  recommendationRow: {
    marginBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    borderRadius: 10,
  },
  cardContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  description: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    whiteSpace: 'pre-line',
  },
  author: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  title: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: '#555',
    borderRadius: 10,
    overflow: 'hidden',
  },
  otherTitle: {
    textAlign: 'center',
    margin: theme.spacing(4, 0),
  },
  otherImage: {
    width: 120,
    height: 120,
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      height: 70,
      width: 70,
      margin: theme.spacing(0.8),
    },
  },
  otherRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
}));

function useCreatorData() {
  const url = 'https://open.firstory.me/user/';
  const imgData = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { glob: "home/creators/*" } }) {
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

  const data = React.useMemo(() => {
    const recommendations = [
      {
        image: imgMap.sexchat,
        description: `Firstory 從我做節目沒多久就聯繫我，
認識以後即便還沒將Hosting轉來，
依舊以驚人的速度在解決我的問題。後來轉移了之後，
又以神速開發出美觀實用的後台，
也為聽眾提供簡易的一鍵贊助服務，完全是創作者與聽眾的雙贏！
真的非常非常感謝 Firstory ，
我唯一支持的 Hosting 服務平台，podcaster 不能沒有你們，
台灣 podcast 產業有你們真的是最幸福的事！`,
        author: '揚',
        title: 'Sex Chat 談性說愛',
        url: url + 'cjyqpf4a72q6v0743tfjdxhbg',
      },
      {
        image: imgMap.william,
        description: `感謝 Firstory 大大，
Firstory 給人一種，
只要你有才華、有想法，再素的素人都有發聲的機會。
有了自己的節目就像是有了自己的小孩，
就像生小孩一樣，
原本想說做 podcast 不就聊聊天錄下來而已嗎？
結果小孩生下去才發現乾真的是忙到靠北，
好險有 Firstory 的贊助功能，
讓你在每個崩潰邊緣、無力感襲擊、
很想把小孩塞回去的 moment 都有了再做兩集的動力！`,
        author: '威廉',
        title: '威廉不務正夜',
        url: url + 'ck3gpdxgj32ur08699i0drxzl',
      },
    ];
    const others = [
      { id: 'cjzryn64q34i607580oyblh1u', image: 'unlock-the-earth' },
      { id: 'ck07hgbx84y4z0786x4hxz28v', image: 'sound-in-taipei' },
      { id: 'cjzdxzm7ic0vq0758o2u4rlnf', image: 'two-girls' },
      { id: 'ck5uwly7z0w9i0b269okbedwo', image: 'kaosensei' },
      { id: 'ck7nm4yhdh0zl0873wegbf5p3', image: 'simone' },
      { id: 'ck7pj8m1ajal5087371m5v031', image: 'beallmouth' },
      { id: 'ck50uxe0emkyv0b26hjueodgo', image: 'actor' },
      { id: 'ck3kd7xa5de1g0869vu31f6gk', image: 'allen' },
      { id: 'ck7prc6cvjr8o0873g1guzb5d', image: 'chew-chew' },
      { id: 'ck50cjx0jm1n20b26nhdxp31l', image: 'culture' },
      { id: 'ck81noc2ubda70873rqmdpod9', image: 'laugh-shot' },
      { id: 'ck6tfukac1bfc0873jahvjqmn', image: 'mama' },
      { id: 'cjw8ivs9ao8by0743a7wjlnqm', image: 'otr' },
      { id: 'ck4v2m8m6fhlg0b26fo5il5yc', image: 'roommate' },
      { id: 'ck7fri94o326d08736fcfnktu', image: 'song' },
      { id: 'cka26w5n2p1x60873g74j1uom', image: 'zebra' },
      { id: 'cka6k6bqhcrtk087375gj8mxj', image: 'dirty-talk' },
    ].map(({ id, image }) => ({
      id,
      url: url + id,
      image: imgMap[image],
    }));

    return { recommendations, others };
  }, [imgMap]);

  return data;
}

function CreatorSection() {
  const classes = useStyles();
  const { recommendations, others } = useCreatorData();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={4} className={classes.recommendationRow}>
        {recommendations.map(r => (
          <Grid key={r.title} item sm={6} xs={12}>
            <Card elevation={5} className={classes.card}>
              <CardContent className={classes.cardContent}>
                <div>
                  <Img
                    fluid={r.image.childImageSharp.fluid}
                    className={classes.image}
                  />
                  <Typography className={classes.description}>
                    {r.description}
                  </Typography>
                </div>
                <div>
                  <Typography className={classes.author}>
                    {r.author}，
                  </Typography>
                  <Typography className={classes.title}>
                    <Link href={r.url} target="_blank" rel="noreferrer">
                      {r.title}
                    </Link>
                    ，主持人/製作人
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" className={classes.otherTitle}>
        採用我們服務的 Podcaster
      </Typography>
      <div className={classes.otherRow}>
        {others.map(({ id, url, image }) => (
          <a href={url} target="_blank" rel="noreferrer">
            <Img
              key={id}
              fluid={image.childImageSharp.fluid}
              className={cx(classes.image, classes.otherImage)}
            />
          </a>
        ))}
      </div>
      <Typography variant="h5" className={classes.otherTitle}>
        超過{' '}
        <Typography color="primary" component="span" variant="h5">
          1000+
        </Typography>{' '}
        的 Podcaster 與我們一同前進。
      </Typography>
    </Container>
  );
}

export default CreatorSection;
