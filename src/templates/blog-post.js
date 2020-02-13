import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ArticleContainer from '../components/ArticleContainer';
import styles from '../components/Help/Help.module.css';
import { rhythm } from '../utils/typography';
import sectionsTitle from './sections-title.json';

function BlogPostTemplate({ data, pageContext, location }) {
  const { slug } = pageContext;
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
              <ol className={styles.breadcrumbs}>
                <li>
                  <Link to="/help/">幫助中心</Link>
                </li>
                <li>
                  <Link to={`/help/${section}/`}>{sectionTitle}</Link>
                </li>
                <li>
                  <Link to={`/help/${section}/${slug}/`}>{title}</Link>
                </li>
              </ol>
            ) : null}
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: '24px',
              }}
            >
              {title}
            </h1>
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
