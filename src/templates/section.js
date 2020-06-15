import React from 'react';
import { Link, graphql } from 'gatsby';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ArticleContainer from '../components/ArticleContainer';
import styles from '../components/Help/Help.module.css';
import { rhythm } from '../utils/typography';
import sectionsTitle from './sections-title.json';

function BlogPostTemplate({ data, pageContext, location }) {
  const { section } = pageContext;
  const { edges } = data.allMarkdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const sectionTitle = sectionsTitle[section] || section;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={`幫助中心 > ${sectionTitle}`} />
      <ArticleContainer>
        <article>
          <header>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <MuiLink component={Link} color="inherit" href="/help">
                幫助中心
              </MuiLink>
              <Typography color="textPrimary">{sectionTitle}</Typography>
            </Breadcrumbs>
            <Typography
              variant="h4"
              component="h1"
              style={{
                marginTop: rhythm(1),
                marginBottom: '24px',
              }}
            >
              {sectionsTitle[section] || section}
            </Typography>
          </header>
          <ul>
            {edges.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <li
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Typography
                    component={Link}
                    className={styles.linkItem}
                    to={node.fields.slug}
                  >
                    {title}
                  </Typography>
                </li>
              );
            })}
          </ul>
        </article>
      </ArticleContainer>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query SectionQuery($section: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___order], order: ASC }
      filter: { frontmatter: { section: { eq: $section } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            section
          }
        }
      }
    }
  }
`;
