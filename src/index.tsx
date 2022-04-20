import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme';

ReactDOM.render(
  <ThemeProvider theme = {theme}>
    <App/>
  </ThemeProvider>, 
  document.getElementById('root')
)
