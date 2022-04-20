import { Container, Grid, InputBase, Paper, Typography} from '@mui/material'
import { styled } from '@mui/system'
import { FC } from 'react'
import { SideMenu } from '../../components/SideMenu/SideMenu'
import { Tweet } from '../../components/Tweet/Tweet';


const Home: FC = () => {

    const SearchTextFiled = styled(InputBase)({
        '& input': {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: 45,
            padding: 0,
        }

    })

    const TweetsWrapper = styled(Paper)({
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0'
    })

    const TweetsHeader = styled(Paper)({
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800
        }

    })

    return (
        <Container sx ={{height: '100vh'}} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item xs = {3}>
                    <SideMenu/>
                </Grid>
                <Grid item xs = {6}>
                    <TweetsWrapper variant="outlined" >
                        <TweetsHeader  variant="outlined">
                            <Typography variant="h6">Главная</Typography>
                        </TweetsHeader>

                        {
                            [...Array(20)].map(tweet => 
                                <Tweet
                                text="Петиция чтобы в каждой пачке сухариков всегда лежал один большой в три слоя обсыпанный химическими специями царь-сухарик."
                                user={{
                                  fullName: 'Glafira Zhur',
                                  userName: 'GlafiraZhur',
                                  avatarUrl:
                                    'https://images.unsplash.com/photo-1528914457842-1af67b57139d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                                }}/>
                                )
                        }
                    </TweetsWrapper>
                </Grid>
                <Grid item xs = {3}>
                    <SearchTextFiled  placeholder="Поиск по Твиттеру" fullWidth/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home