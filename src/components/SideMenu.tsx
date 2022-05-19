import { FC, useState } from 'react'
import { Button, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/system'
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import ModalBlock from './ModalBlock';
import { UserSideProfile } from './UserSideProfile'
import { AddTweetForm } from './AddTweetForm/AddTweetForm';
import { Link } from 'react-router-dom';

export const SideMenu: FC = (): React.ReactElement => {

    const SideMenuList = styled('ul')({
        position: 'sticky',
        top: 0,
        padding: 0,
        margin: 0,
        listStyle: 'none',
        maxWidth: 230
    })

    const SideMenuListItem = styled('li')(({ theme }) => ({
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main
                },
                '& svg path': {
                    fill: theme.palette.primary.main
                }
            }
        },
        '& div': {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 15,
            transition: 'background-color 0.1s ease-in-out',
        },

    }));

    const SideMenuTweetButton = styled(Button)(({ theme }) => ({
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2),
    }));

    const typographyStyle = { fontSize: 20, fontWeight: 700, marginLeft: "15px", display: { xs: 'none', sm: 'none', md: 'block' } }

    const [visibleAddTweet, setVisibleAddTweet] = useState<boolean>(false)

    const handleClickOpenAddTweet = (): void => {
        setVisibleAddTweet(true)
    }

    const handleClickCloseAddTweet = (): void => {
        setVisibleAddTweet(false)
    }

    return (
        <>
            <SideMenuList>

                <SideMenuListItem>
                    <Link to='/home'>
                        <IconButton sx={{ margin: '10px 0' }} color='primary'>
                            <TwitterIcon sx={{ fontSize: 36 }} />
                        </IconButton>
                    </Link>
                </SideMenuListItem>

                <SideMenuListItem>
                    <div>
                        <SearchIcon sx={{ fontSize: 32 }} />
                        <Typography sx={typographyStyle} variant='h6'>Поиск</Typography>
                    </div>
                </SideMenuListItem>

                <SideMenuListItem>
                    <div>
                        <NotificationsIcon sx={{ fontSize: 32 }} />
                        <Typography sx={typographyStyle} variant='h6'>Уведомления</Typography>
                    </div>
                </SideMenuListItem>

                <SideMenuListItem>
                    <div>
                        <MessageIcon sx={{ fontSize: 32 }} />
                        <Typography sx={typographyStyle} variant='h6'>Сообщения</Typography>
                    </div>
                </SideMenuListItem>

                <SideMenuListItem>
                    <div>
                        <BookmarkIcon sx={{ fontSize: 32 }} />
                        <Typography sx={typographyStyle} variant='h6'>Закладки</Typography>
                    </div>
                </SideMenuListItem>

                <SideMenuListItem>
                    <div>
                        <ListAltIcon sx={{ fontSize: 32 }} />
                        <Typography sx={typographyStyle} variant='h6'>Список</Typography>
                    </div>
                </SideMenuListItem>

                <SideMenuListItem>
                    <div>
                        <PersonIcon sx={{ fontSize: 32 }} />
                        <Typography sx={typographyStyle} variant='h6'>Профиль</Typography>
                    </div>
                </SideMenuListItem>

                <SideMenuListItem>
                    <SideMenuTweetButton onClick={handleClickOpenAddTweet}
                        sx={{ display: { xs: 'none', sm: 'none', md: 'inline-flex' } }}
                        fullWidth
                        variant='contained'>
                        Твитнуть
                    </SideMenuTweetButton>

                    <SideMenuTweetButton onClick={handleClickOpenAddTweet}
                        sx={{ display: { xs: 'inline-flex', sm: 'inline-flex', md: 'none' } }}
                        variant='contained'>
                        <CreateIcon />
                    </SideMenuTweetButton>
                    <ModalBlock visible={visibleAddTweet} onClose={handleClickCloseAddTweet}>
                        <AddTweetForm maxRows={15} />
                    </ModalBlock>
                </SideMenuListItem>
            </SideMenuList>

            <UserSideProfile />
        </>
    )
}

