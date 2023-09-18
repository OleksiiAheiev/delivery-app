import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5697f8 ',
      light: '#ffffff',
      dark: '#000000',
      contrastText: '#0b0b1c',
    },
    // secondary: {
    //   light: '#ffffff',
    //   main: '#EBEBEB',
    //   dark: '#EBEBEB',
    //   contrastText: '#272925',
    // },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
