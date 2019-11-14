import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArticleContainer from '../components/ArticleContainer';
import { rhythm } from '../utils/typography';

function Help({ data }) {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Help" />
      <ArticleContainer>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
            </article>
          );
        })}
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
