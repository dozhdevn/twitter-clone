import { CircularProgress, Container, Divider, Grid, InputAdornment, List, ListItemText, Paper, Typography} from '@mui/material'
import { FC, useEffect } from 'react'
import { SearchTextField } from '../../components/SearchTextField';
import { SideMenu } from '../../components/SideMenu'
import { Tweet } from '../../components/Tweet';
import SearchIcon from '@mui/icons-material/Search';
import { TweetsWrapper, TweetsHeader, RightSide, RightSideBlock, RightSideBlockHeader, RightSideBlockItem } from './styledComponents';
import { AddTweetForm } from '../../components/AddTweetForm/AddTweetForm';
import { useDispatch } from 'react-redux';
import { setTweets } from '../../store/Tweets/actionCreators';
import { useSelector } from 'react-redux';
import { selectTweets } from '../../store/Tweets/selectors';


const Home: FC = () => {

    const {tweets, error, loading} = useSelector(selectTweets)
    const dispatch = useDispatch()

    console.log(tweets)

    useEffect( () => {
        dispatch(setTweets())
    }, [])

    return (
        <Container sx ={{height: '100vh'}} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item sm={2} md={3}>
                    <SideMenu/>
                </Grid>
                <Grid item sm={7} md={6}>
                    <TweetsWrapper variant="outlined" >
                        <TweetsHeader  variant="outlined">
                            <Typography variant="h6">Главная</Typography>
                        </TweetsHeader>

                        <Paper sx={{padding: '20px', borderBottom: '12px solid #E6ECF0'}}>
                            <AddTweetForm/>                     
                        </Paper>

                        {loading ? <div style={{textAlign: "center", marginTop: '70px'}}>
                                <CircularProgress/>
                        </div> :
                            tweets.map(tweet => 
                                <Tweet key = {tweet._id}
                                text={tweet.text}
                                user={tweet.user}/>
                                )
                        }
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
                        fullWidth/>

                        <RightSideBlock>
                        <RightSideBlockHeader variant="outlined">
                            <b>Актуальные темы</b>
                        </RightSideBlockHeader>

                        <List>
                            <RightSideBlockItem>
                                <ListItemText 
                                primary="Санкт-Петербург"
                                secondary={
                                    <Typography component="span" variant="body2" color="textSecondary">
                                      Твитов: 3 331
                                    </Typography>
                                  }/> 
                            </RightSideBlockItem>
                                  <Divider component = "li"/>

                            <RightSideBlockItem>
                                <ListItemText 
                                primary="#короновирус"
                                secondary={
                                    <Typography component="span" variant="body2" color="textSecondary">
                                      Твитов: 163 222
                                    </Typography>
                                  }/> 
                            </RightSideBlockItem>
                                  <Divider component = "li"/>

                            <RightSideBlockItem>
                                <ListItemText 
                                primary="Беларусь"
                                secondary={
                                    <Typography component="span" variant="body2" color="textSecondary">
                                      Твитов: 13 354
                                    </Typography>
                                  }/> 
                            </RightSideBlockItem>
                                  <Divider component="li"/>
                        </List>
                        </RightSideBlock>
                    </RightSide>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home