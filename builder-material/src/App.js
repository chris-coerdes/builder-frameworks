import logo from './logo.svg';
import './App.css';
import Builder from './components/builder-layout/builder';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

const builderTheme = createTheme({
  palette: {
      text: {
          hint: '#ff9b00',
          secondary: 'white'
      }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={builderTheme}>
        <Builder></Builder>
      </ThemeProvider>
    </div>
  );
}

export default App;
