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

const palette = {
  primary: {
    main: colors.tomato,
  },
  secondary: {
    main: colors.softBlue,
  },
};

const typography = {
  h4: {
    fontWeight: 'bold',
  },
  h5: {
    fontWeight: 'bold',
  },
  h6: {
    fontWeight: 'bold',
  },
};

const lightTheme = createMuiTheme({
  palette: {
    ...palette,
    background: { default: '#fff' },
  },
  typography,
  overrides,
});

const darkTheme = createMuiTheme({
  palette: {
    ...palette,
    type: 'dark',
  },
  typography,
  overrides,
});

export { lightTheme, darkTheme };
