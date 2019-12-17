import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ArticleContainer from '../components/ArticleContainer';

function NotFoundPage({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <ArticleContainer>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </ArticleContainer>
    </Layout>
  );
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
