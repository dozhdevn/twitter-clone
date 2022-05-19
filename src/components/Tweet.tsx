import { Avatar, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { FC } from 'react'

import CommentIcon from '@mui/icons-material/Comment';
import RepostIcon from '@mui/icons-material/Repeat';
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import ReplyIcon from '@mui/icons-material/Reply';

import { grey } from '@mui/material/colors';
import { Link, useHistory } from 'react-router-dom';
import { formateDate } from '../utils/formatDate';

import LongMenu from './LongMenu';

interface UserI {
    fullname: string,
    username: string,
    avatarUrl: string
}

interface TweetProps {
    text: string,
    _id: string,
    createdAt: string,
    user: UserI
}

export const Tweet: FC<TweetProps> = ({ text, user, _id, createdAt }): React.ReactElement => {

    const TweetWrapper = styled('a')({
        display: 'flex',
        alignItems: 'flex-start',
        borderTop: '0',
        borderLeft: '0',
        borderBottom: `1px solid ${grey[300]}`,
        borderRight: '0',
        borderRadius: 0,
        cursor: 'pointer',
        paddingTop: '15px',
        paddingLeft: '20px',
        color: 'inherit',
        textDecoration: 'none',
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

    const TweetHeader = styled('div')({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        "b": {
            marginRight: '8px'
        }
    })

    const TweetAvatar = styled(Avatar)(({ theme }) => ({
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: '15px'
    }))

    const TweetUserName = styled('span')({
        color: grey[500]
    })

    const history = useHistory();

    const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        history.push(`/home/tweet/${_id}`);
    };


    return (
        <TweetWrapper onClick={handleClickTweet} href={`/home/tweet/${_id}`}>
            <TweetAvatar
                alt="Avatar"
                src={user.avatarUrl} />

            <div style={{ flex: 1 }}>
                <TweetHeader>
                    <div>
                        <b>{user.fullname}</b>
                        <TweetUserName>@{user.username}</TweetUserName>
                        <TweetUserName>·</TweetUserName>
                        <TweetUserName>{formateDate(createdAt)}</TweetUserName>
                    </div>
                    
                   <LongMenu/>

                </TweetHeader>

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
