import { SignIn } from './pages/SignIn/SignIn';
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from './pages/Home/Home';
import React from 'react';
import { getMe } from './api/authApi';
import { fetchUserSuccess } from './store/User/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectUserStatus, selectUser } from './store/User/selectors';


function App() {

    const history = useHistory()
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    const status = useSelector(selectUserStatus)

    console.log(status, isAuth)

    const checkAuth = async () => {
        try {
            const { data } = await getMe()
            dispatch(fetchUserSuccess(data))
            // history.replace('/home')
        } catch (error) {
        }
    }

    React.useEffect(() => {
        // if(!status) {
        //     history.push('/signin')
        // }
        checkAuth()
    }, [])

    React.useEffect(() => {
        if (isAuth) {
            history.push('/home')
        }
    }, [isAuth])


    return (
        <div className="App">
            <Switch>
                <Route path='/signIn' component={SignIn} />
                <Route path='/' component={Home} />
            </Switch>
        </div>
    );
}

export default App;
