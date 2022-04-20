import { Avatar, Grid, IconButton, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { FC } from 'react'
import CommentIcon from '@mui/icons-material/Comment';
import RepostIcon from '@mui/icons-material/Repeat';
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import ReplyIcon from '@mui/icons-material/Reply';
import { grey } from '@mui/material/colors';

interface userI {
    fullName: string,
    userName: string,
    avatarUrl: string
}

interface TweetProps {
    text: string,
    user: userI
}

export const Tweet: FC<TweetProps> = ({text, user}) => {

    const TweetWrapper = styled(Paper)({
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        }
    })

    const TweetFooter = styled('div')({
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        width: 450,

    })

    const TweetAvatar = styled(Avatar)(({ theme }) => ({
        width: theme.spacing(5),
        height: theme.spacing(5),
    }))

    const TweetUserName = styled('span')({
        color: grey[500]
    })

    return (
        <TweetWrapper variant="outlined">
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <TweetAvatar
                        alt="Avatar"
                        src={user.avatarUrl} />
                </Grid>

                <Grid item xs={11}>
                    <Typography>
                        <b>{user.fullName}</b>
                        <TweetUserName>@{user.userName}</TweetUserName>
                        <TweetUserName>·</TweetUserName>
                        <TweetUserName>1 ч</TweetUserName>
                    </Typography>

                    <Typography variant='body1'>
                        {text}
                    </Typography>

                    <TweetFooter>
                        <div>
                            <IconButton>
                                <CommentIcon sx={{fontSize: '20px'}}/>
                            </IconButton>
                            <span>1</span>
                        </div>

                        <IconButton>
                            <RepostIcon sx={{fontSize: '20px'}}/>
                        </IconButton>

                        <IconButton>
                            <LikeIcon sx={{fontSize: '20px'}}/>
                        </IconButton>

                        <IconButton>
                            <ReplyIcon sx={{fontSize: '20px'}}/>
                        </IconButton>
                    </TweetFooter>
                </Grid>
            </Grid>
        </TweetWrapper>
    )
}
