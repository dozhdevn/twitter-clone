import { SignIn } from './pages/SignIn/SignIn';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';

function App() {
  return (
	  <div className="App">
      <Switch>
        <Route path='/signIn'>
          <SignIn/>
        </Route>
        <Route path='/'component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
