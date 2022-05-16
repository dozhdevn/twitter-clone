import { SignIn } from './pages/SignIn/SignIn';
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from './pages/Home/Home';
import React from 'react';
import { getMe } from './api/authApi';
import { fetchUserSuccess } from './store/User/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './store/User/selectors';


function App() {

  const history = useHistory()
  const dispatch = useDispatch()
  const {data} = useSelector(selectUser)

  const checkAuth = async () => {
    try {
      const { data } = await getMe()
      console.log(data)
      dispatch(fetchUserSuccess(data))
      history.replace('/home')
    } catch (error) {
    }
  }

  React.useEffect(() => {
    checkAuth()
  },[])

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
