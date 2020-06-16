import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  heading: {
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
  },
  paragraph: {
    marginBottom: theme.spacing(4),
  },
  blockquote: {
    borderLeft: '4px solid grey',
    padding: theme.spacing(1),
  },
  list: {
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  item: {
    marginBottom: theme.spacing(2),
  },
}));

function Paragraph(props) {
  const classes = useStyles();
  return <Typography {...props} className={classes.paragraph} />;
}

function Heading(props) {
  const classes = useStyles();
  return <Typography {...props} className={classes.heading} />;
}

function H1(props) {
  return <Heading {...props} component="h1" variant="h3" />;
}

function H2(props) {
  return <Heading {...props} component="h2" variant="h4" />;
}

function H3(props) {
  return <Heading {...props} component="h3" variant="h5" />;
}

function H4(props) {
  return <Heading {...props} component="h4" variant="h5" />;
}

function H5(props) {
  return <Heading {...props} component="h5" variant="h6" />;
}

function H6(props) {
  return <Heading {...props} component="h6" variant="h6" />;
}

function Blockquote(props) {
  const classes = useStyles();
  return <Paper className={classes.blockquote} {...props} />;
}

function Ul(props) {
  const classes = useStyles();
  return <Typography component="ul" className={classes.list} {...props} />;
}

function Ol(props) {
  const classes = useStyles();
  return <Typography component="ol" className={classes.list} {...props} />;
}

function Li(props) {
  const classes = useStyles();
  return <Typography component="li" className={classes.item} {...props} />;
}

function Table(props) {
  return <MuiTable {...props} />;
}

function Tr(props) {
  return <TableRow {...props} />;
}

function Td({ align, ...props }) {
  return <TableCell align={align || undefined} {...props} />;
}

function TBody(props) {
  return <TableBody {...props} />;
}

function Th({ align, ...props }) {
  return <TableCell align={align || undefined} {...props} />;
}

function THead(props) {
  return <TableHead {...props} />;
}

function Input(props) {
  const { type } = props;
  if (type === 'checkbox') {
    return <Checkbox {...props} disabled={false} readOnly={true} />;
  }
  return <input {...props} />;
}

function Wrapper(props) {
  return <div {...props} className="markdown-body" />;
}

const components = {
  p: Paragraph,
  a: Link,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  blockquote: Blockquote,
  ul: Ul,
  ol: Ol,
  li: Li,
  table: Table,
  tr: Tr,
  td: Td,
  tbody: TBody,
  th: Th,
  thead: THead,
  hr: Divider,
  input: Input,
  wrapper: Wrapper,
};

export default components;
