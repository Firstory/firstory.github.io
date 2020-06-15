import React from 'react';
import { Link, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import styles from '../components/Help/Help.module.css';
import ArticleContainer from '../components/ArticleContainer';
import sectionsTitle from '../templates/sections-title.json';

function Help({ data }) {
  const tags = data.allMarkdownRemark.group;
  return (
    <Layout>
      <Seo title="幫助中心" />
      <ArticleContainer>
        <Typography
          variant="h4"
          component="h1"
          style={{ marginBottom: '24px' }}
        >
          幫助中心
        </Typography>
        <ul className={styles.tagsRow}>
          {tags.map(({ fieldValue }) => {
            const sectionTitle = sectionsTitle[fieldValue] || fieldValue;
            return (
              <li>
                <Typography
                  component={Link}
                  className={styles.linkItem}
                  to={`/help/${fieldValue}/`}
                >
                  {sectionTitle}
                </Typography>
              </li>
            );
          })}
        </ul>
      </ArticleContainer>
    </Layout>
  );
}

export default Help;

export const pageQuery = graphql`
  query HelpMarkdown {
    allMarkdownRemark {
      group(field: frontmatter___section) {
        fieldValue
      }
    }
  }
`;
