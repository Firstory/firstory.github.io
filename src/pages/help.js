import React from 'react';
import { Link, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ArticleContainer from '../components/ArticleContainer';
import sectionsTitle from '../templates/sections-title.json';

const useStyles = makeStyles(theme => ({
  item: {
    marginBottom: theme.spacing(1),
  },
  link: {
    color: theme.palette.text.primary,
  },
}));

function Help({ data }) {
  const classes = useStyles();
  const tags = data.allMdx.group;

  return (
    <Layout>
      <Seo title="幫助中心" />
      <ArticleContainer title="幫助中心">
        <ul>
          {tags.map(({ fieldValue }) => {
            const sectionTitle = sectionsTitle[fieldValue] || fieldValue;
            return (
              <li key={sectionTitle} className={classes.item}>
                <Typography
                  component={Link}
                  to={`/help/${fieldValue}/`}
                  className={classes.link}
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
    allMdx {
      group(field: frontmatter___section) {
        fieldValue
      }
    }
  }
`;
