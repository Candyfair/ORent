import { createTheme } from '@mui/material/styles';

// MaterialUI - theme definition
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00cbd8',
    },
    secondary: {
      main: '#e95252',
    },
  },
  custom: {
    shadow: {
      primary: '2px 12px 30px rgba(88, 88, 88, 0.13)',
    },
  },
});

export default darkTheme;
