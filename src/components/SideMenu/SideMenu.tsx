import { FC } from 'react'
import { Button, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/system'
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';

export const SideMenu: FC = () => {

    const SideMenuList = styled('ul')({
        padding: 0,
        margin: 0,
        listStyle: 'none',
        width: 230
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

    

    const typographyStyle = {fontSize: 20, fontWeight: 700, marginLeft: "15px"}

    return (
        <SideMenuList>

            <SideMenuListItem>
                <div>
                    <IconButton sx={{margin: '10px 0'}} color='primary'>
                        <TwitterIcon sx={{fontSize: 36}} />
                    </IconButton>
                </div>
            </SideMenuListItem>

            <SideMenuListItem>
                <div>
                    <SearchIcon sx={{fontSize: 32}}/>
                    <Typography sx={typographyStyle} variant='h6'>Поиск</Typography>
                </div>
            </SideMenuListItem>

            <SideMenuListItem>
                <div>
                    <NotificationsIcon sx={{fontSize: 32}} />
                    <Typography sx={typographyStyle} variant='h6'>Уведомления</Typography>
                </div>
            </SideMenuListItem>

            <SideMenuListItem>
                <div>
                    <MessageIcon sx={{fontSize: 32}}/>
                    <Typography sx={typographyStyle} variant='h6'>Сообщения</Typography>
                </div>
            </SideMenuListItem>

            <SideMenuListItem>
                <div>
                    <BookmarkIcon sx={{fontSize: 32}}/>
                    <Typography sx={typographyStyle} variant='h6'>Закладки</Typography>
                </div>
            </SideMenuListItem>

            <SideMenuListItem>
                <div>
                    <ListAltIcon sx={{fontSize: 32}}/>
                    <Typography sx={typographyStyle} variant='h6'>Список</Typography>
                </div>
            </SideMenuListItem>

            <SideMenuListItem>
                <div>
                    <PersonIcon sx={{fontSize: 32}}/>
                    <Typography sx={typographyStyle} variant='h6'>Профиль</Typography>
                </div>
            </SideMenuListItem>

            <SideMenuListItem>
                <SideMenuTweetButton
                fullWidth 
                variant='contained'>
                    Твитнуть
                </SideMenuTweetButton>
            </SideMenuListItem>
        </SideMenuList>
    )
}

