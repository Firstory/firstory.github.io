import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  softBlue: '#4e86ef',
  tomato: '#fb355e',
};

const overrides = {
  MuiButton: {
    root: {
      borderRadius: 999,
      textTransform: 'none',
    },
  },
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.tomato,
    },
    secondary: {
      main: colors.softBlue,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    h4: {
      fontWeight: 'bold',
    },
    h5: {
      fontWeight: 'bold',
    },
    h6: {
      fontWeight: 'bold',
    },
  },
  overrides,
});

export default theme;
