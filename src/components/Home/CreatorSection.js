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
  },
  otherTitle: {
    textAlign: 'center',
    margin: theme.spacing(4, 0),
  },
  otherImage: {
    margin: theme.spacing(1),
  },
  otherRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
}));

function useCreatorData() {
  const imgData = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { glob: "home/creators/*" } }) {
        nodes {
          name
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
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
        url: '',
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
        url: '',
      },
    ];
    const others = [
      'unlock-the-earth',
      'sound-in-taipei',
      'two-girls',
      'kaosensei',
      'simone',
      'beallmouth',
    ].map(name => imgMap[name]);

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
                    fixed={r.image.childImageSharp.fixed}
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
                    <Link href={r.url}>{r.title}</Link>，主持人/製作人
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
        {others.map((image, i) => (
          <Img
            key={i}
            fixed={image.childImageSharp.fixed}
            className={cx(classes.image, classes.otherImage)}
          />
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
