import React from 'react';
import { Link, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ArticleContainer from '../components/ArticleContainer';
import sectionsTitle from '../templates/sections-title.json';

const useStyles = makeStyles(theme => ({
  list: {
    paddingLeft: theme.spacing(4),
    listStyle: 'disc',
  },
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
        {tags.map(({ fieldValue, edges }) => {
          const sectionTitle = sectionsTitle[fieldValue] || fieldValue;
          return (
            <section key={sectionTitle} className={classes.item}>
              <ExpansionPanel variant="outlined">
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel-content"
                >
                  <Typography variant="h6" component="h2">
                    {sectionTitle}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <ul className={classes.list}>
                    {edges.map(({ node }) => (
                      <li key={node.fields.slug} className={classes.item}>
                        <Typography
                          component={Link}
                          to={node.fields.slug}
                          className={classes.link}
                        >
                          {node.frontmatter.title}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </section>
          );
        })}
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
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`;
