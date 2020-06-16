import React from 'react';
import { Link, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ArticleContainer from '../components/ArticleContainer';
import sectionsTitle from './sections-title.json';

const useStyles = makeStyles(theme => ({
  item: {
    marginBottom: theme.spacing(1),
  },
  link: {
    color: theme.palette.text.primary,
  },
}));

function SectionTemplate({ data, pageContext, location }) {
  const classes = useStyles();
  const { section } = pageContext;
  const { edges } = data.allMdx;
  const siteTitle = data.site.siteMetadata.title;
  const sectionTitle = sectionsTitle[section] || section;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={`幫助中心 > ${sectionTitle}`} />
      <ArticleContainer
        breadcrumbs={[
          { title: '幫助中心', link: '/help' },
          { title: sectionTitle },
        ]}
        title={sectionTitle}
      >
        <ul>
          {edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <li key={title} className={classes.item}>
                <Typography
                  component={Link}
                  to={node.fields.slug}
                  className={classes.link}
                >
                  {title}
                </Typography>
              </li>
            );
          })}
        </ul>
      </ArticleContainer>
    </Layout>
  );
}

export default SectionTemplate;

export const pageQuery = graphql`
  query SectionQuery($section: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
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
