import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
ReactDOM.render(
  <ThemeProvider theme = {theme}>
    <Router>
     <Provider store = {store}>
       <App/>
     </Provider>
    </Router>
  </ThemeProvider>, 
  document.getElementById('root')
)
