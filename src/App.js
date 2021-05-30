import './App.css';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import HomePage from './components/homepage/HomePage';
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 500,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
