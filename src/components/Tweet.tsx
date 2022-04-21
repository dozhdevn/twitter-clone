import { Avatar, IconButton, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { FC } from 'react'
import CommentIcon from '@mui/icons-material/Comment';
import RepostIcon from '@mui/icons-material/Repeat';
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import ReplyIcon from '@mui/icons-material/Reply';
import { grey } from '@mui/material/colors';

interface UserI {
    fullname: string,
    username: string,
    avatarUrl: string
}

interface TweetProps {
    text: string,
    user: UserI
}

export const Tweet: FC<TweetProps> = ({ text, user }) => {

    const TweetWrapper = styled(Paper)({
        display: 'flex',
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        cursor: 'pointer',
        paddingTop: '15px',
        paddingLeft: '20px',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        }
    })

    const TweetFooter = styled('div')({
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        maxWidth: 450
    })

    const TweetAvatar = styled(Avatar)(({ theme }) => ({
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: '15px'
    }))

    const TweetUserName = styled('span')({
        color: grey[500]
    })

    return (
        <TweetWrapper variant="outlined">
            <TweetAvatar
                alt="Avatar"
                src={user.avatarUrl} />

            <div>
                <Typography>
                    <b>{user.fullname}</b>
                    <TweetUserName>@{user.username}</TweetUserName>
                    <TweetUserName>·</TweetUserName>
                    <TweetUserName>1 ч</TweetUserName>
                </Typography>

                <Typography variant='body1' gutterBottom>
                    {text}
                </Typography>

                <TweetFooter>
                    <div>
                        <IconButton>
                            <CommentIcon sx={{ fontSize: '20px' }} />
                        </IconButton>
                        <span>1</span>
                    </div>

                    <div>
                        <IconButton>
                            <RepostIcon sx={{ fontSize: '20px' }} />
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <LikeIcon sx={{ fontSize: '20px' }} />
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <ReplyIcon sx={{ fontSize: '20px' }} />
                        </IconButton>
                    </div>
                </TweetFooter>
            </div>
        </TweetWrapper>
    )
}
