import React from 'react';
import { Link, graphql } from 'gatsby';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ArticleContainer from '../components/ArticleContainer';
import { rhythm } from '../utils/typography';
import sectionsTitle from './sections-title.json';

function BlogPostTemplate({ data, pageContext, location }) {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { title, section, description } = post.frontmatter;
  const sectionTitle = sectionsTitle[section] || null;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={title} description={description || post.excerpt} />
      <ArticleContainer>
        <article>
          <header>
            {section ? (
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                <MuiLink component={Link} color="inherit" href="/help">
                  幫助中心
                </MuiLink>
                <MuiLink
                  component={Link}
                  color="inherit"
                  href={`/help/${section}`}
                >
                  {sectionTitle}
                </MuiLink>
                <Typography color="textPrimary">{title}</Typography>
              </Breadcrumbs>
            ) : null}
            <Typography
              variant="h4"
              component="h1"
              style={{
                marginTop: rhythm(1),
                marginBottom: '24px',
              }}
            >
              {title}
            </Typography>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </ArticleContainer>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        section
        description
      }
    }
  }
`;
