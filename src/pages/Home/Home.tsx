import { CircularProgress, Container, Grid, InputAdornment, Paper, Typography } from '@mui/material'
import { FC, useEffect } from 'react'
import { SearchTextField } from '../../components/SearchTextField';
import { SideMenu } from '../../components/SideMenu'
import { Tweet } from '../../components/Tweet';
import SearchIcon from '@mui/icons-material/Search';
import { RightSide, TweetsWrapper, TweetsHeader } from './styledComponents';
import { AddTweetForm } from '../../components/AddTweetForm/AddTweetForm';
import { useDispatch } from 'react-redux';
import { setTweets } from '../../store/Tweets/actionCreators';
import { setTags } from '../../store/Tags/actionCreators';
import { useSelector } from 'react-redux';
import { selectTweets } from '../../store/Tweets/selectors';
import { Tags } from '../../components/Tags/Tags';
import { Route } from 'react-router-dom';
import { FullTweet } from './components/FullTweet';
import { BackButton } from '../../components/BackButton';


const Home: FC = (): React.ReactElement => {

    const { tweets, loading } = useSelector(selectTweets)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTweets())
        dispatch(setTags())
    }, [dispatch])

    return (
        <Container sx={{ height: '100vh' }} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item sm={2} md={3}>
                    <SideMenu />
                </Grid>
                    <Grid item sm={7} md={6}>
                        <TweetsWrapper variant="outlined" >
                            <TweetsHeader variant="outlined">
                                <Route path='/home/:any' component={BackButton}/>
                                <Route path='/home' exact><Typography variant="h6">Твиты</Typography></Route>
                                <Route path='/home/tweet'><Typography variant="h6">Твитнуть</Typography></Route>
                            </TweetsHeader>

                            <Route path={['/home', '/home/search']} exact>
                                <Paper sx={{ padding: '20px', borderBottom: '12px solid #E6ECF0' }}>
                                    <AddTweetForm />
                                </Paper>
                            </Route>

                            <Route path="/home" exact>
                                {
                                    loading ? 
                                    <div style={{ textAlign: "center", marginTop: '70px' }}>
                                        <CircularProgress />
                                    </div> :
                                    tweets.map(tweet =>
                                        <Tweet
                                            key={tweet._id}
                                            {...tweet}
                                        />
                                    )
                                }
                            </Route>

                            <Route path='/home/tweet/:id' component={FullTweet} exact />

                        </TweetsWrapper>
                    </Grid>
                <Grid item sm={3} md={3}>
                    <RightSide>
                        <SearchTextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="Поиск по Твиттеру"
                            fullWidth />

                        <Tags />
                    </RightSide>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Home