import React from 'react';
import { Link, graphql } from 'gatsby';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import styles from '../components/Help/Help.module.css';
import ArticleContainer from '../components/ArticleContainer';
import { rhythm } from '../utils/typography';

function Help({ data }) {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Seo title="Help" />
      <ArticleContainer>
        <h1 className={styles.title}>幫助中心</h1>
        <div className={styles.articleRow}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <article key={node.fields.slug} className={styles.item}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link className={styles.link} to={node.fields.slug}>
                      {title}{' '}
                      <NavigateNextRoundedIcon style={{ fontSize: '36px' }} />
                    </Link>
                  </h3>
                </header>
              </article>
            );
          })}
        </div>
      </ArticleContainer>
    </Layout>
  );
}

export default Help;

export const pageQuery = graphql`
  query HelpMarkdown {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//help//" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
