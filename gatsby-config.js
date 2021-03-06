module.exports = {
  siteMetadata: {
    title: 'Firstory 最簡單的 Podcast 製作',
    author: 'Firstory',
    description:
      '最簡單的 Podcast 製作工具，讓世界聽到你的聲音。大家都在建立聲音品牌了，快點一起加入了吧！',
    siteUrl: 'https://firstory.me',
    image: '/image/preview.png',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-114999968-1',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Firstory',
        short_name: 'Firstory',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#fb355e',
        display: 'minimal-ui',
        icon: 'src/content/assets/icon.png',
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-top-layout`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Noto Sans TC'],
        },
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `monthly`,
              priority: 0.9,
            };
          }),
      },
    },
    {
      resolve: `gatsby-plugin-intercom`,
      options: {
        appId: 'pcpac0sa',
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        prefixDefault: false,
      },
    },
  ],
};
