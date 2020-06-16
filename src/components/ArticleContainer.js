import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import MuiLink from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(12),
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
  },
}));

function ArticleContainer({ title, breadcrumbs = [], children }) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs.map((b, i) =>
            i === breadcrumbs.length - 1 ? (
              <Typography color="textPrimary">{b.title}</Typography>
            ) : (
              <MuiLink component={Link} color="inherit" to={b.link}>
                {b.title}
              </MuiLink>
            ),
          )}
        </Breadcrumbs>
      )}
      <Typography variant="h3" component="h1" className={classes.title}>
        {title}
      </Typography>
      <article>{children}</article>
    </Container>
  );
}

export default ArticleContainer;
