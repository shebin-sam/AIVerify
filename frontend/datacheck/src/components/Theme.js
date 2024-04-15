// components/Theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#112244', // Dark blue
    },
    secondary: {
      main: '#ffd700', // Gold
    },
    background: {
      default: '#000033', // Dark purple
    },
    text: {
      primary: '#ffffff', // White
    },
  },
});

export default theme;
