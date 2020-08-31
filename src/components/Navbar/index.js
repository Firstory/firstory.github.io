import React from 'react';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './Logo';
import LanguagePicker from './LanguagePicker';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'white',
    boxShadow: 'none',
  },
  logo: {
    width: 36,
    height: 36,
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    display: 'flex',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  toolbarButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menuIcon: {
    marginLeft: theme.spacing(1),
  },
  hideOnLarge: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list: {
    width: 250,
  },
}));

const items = [
  {
    props: {
      component: 'a',
      href: 'https://intercom.help/firstory',
      target: '_blank',
      rel: 'noopener',
    },
    text: 'nav.help',
  },
  {
    props: {
      component: Link,
      to: '/pricing',
    },
    text: 'nav.pricing',
  },
  {
    props: {
      component: 'a',
      href: 'https://open.firstory.me',
      target: '_blank',
      rel: 'noopener',
      variant: 'contained',
      color: 'primary',
    },
    text: 'nav.browseShow',
  },
  {
    props: {
      component: 'a',
      href: 'https://studio.firstory.me',
      target: '_blank',
      rel: 'noopener',
      variant: 'contained',
      color: 'primary',
    },
    text: 'nav.startForFree',
  },
];

function Navbar({ pathname }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <AppBar position="sticky" color="default" className={classes.appBar}>
      <Toolbar>
        <Link to="/" className={classes.title}>
          <Logo className={classes.logo} />
          <Typography variant="h6">Firstory</Typography>
        </Link>
        {items.map(item => (
          <Button
            key={item.text}
            {...item.props}
            className={classes.toolbarButton}
          >
            <FormattedMessage id={item.text} />
          </Button>
        ))}
        {/*
        <LanguagePicker pathname={pathname} />
        */}
        <IconButton
          edge="start"
          className={cx(classes.menuIcon, classes.hideOnLarge)}
          color="inherit"
          aria-label="menu"
          onClick={handleOpen}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={handleClose}>
          <List className={classes.list}>
            {items.map(item => (
              <ListItem button key={item.text} {...item.props}>
                <FormattedMessage id={item.text}>
                  {text => <ListItemText primary={text} />}
                </FormattedMessage>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
