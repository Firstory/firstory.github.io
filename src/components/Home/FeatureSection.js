import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FeatureRow from './FeatureRow';

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

  const features = React.useMemo(() => {
    return [
      {
        subtitle: '為你的 Podcast 找一個家',
        title: 'Podcast Hosting 服務',
        description: `我們的 Podcast Hosting 幫你最快上架到各大平台，
並且用最完整的數據分析節目成效。`,
        color: '#259271',
        backgroundColor: '#e9faf5',
        image: imgMap.hosting,
      },
      {
        subtitle: '找到你的第一批聽眾',
        title: 'Podcast 社群推廣服務',
        description: `透過 Instagram、Telegram 等社群平台，
我們幫助你最快找到第一批有興趣的聽眾。`,
        color: '#dfa71b',
        backgroundColor: '#fff4d8',
        image: imgMap.community,
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
      },
      {
        subtitle: '最懂 Podcaster 的錄音空間',
        title: 'Podcast 錄音空間租用',
        description: `我們與 LAZI 團隊聯手打造的錄音室 LAZI Cube，
提供頂級 RODE 器材，給追求好品質的你。`,
        color: '#524434',
        backgroundColor: '#fff6eb',
        image: imgMap.studio,
      },
    ];
  }, [imgMap]);

  console.log(features);

  return features;
}

function FeatureSection() {
  const features = useFeatureData();

  return features.map((f, i) => (
    <FeatureRow key={f.title} {...f} reverse={i % 2 === 1} />
  ));
}

export default FeatureSection;
