import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ArticleContainer from '../components/ArticleContainer';
import components from './components';
import sectionsTitle from './sections-title.json';

function BlogPostTemplate({ data, pageContext, location }) {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { title, section, description } = post.frontmatter;
  const sectionTitle = sectionsTitle[section] || null;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={title} description={description || post.excerpt} />
      <ArticleContainer
        breadcrumbs={
          section
            ? [
                { title: '幫助中心', link: '/help' },
                { title: sectionTitle, link: `/help/${section}` },
                { title },
              ]
            : []
        }
        title={title}
      >
        <MDXProvider components={components}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
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
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        section
        description
      }
    }
  }
`;
