import classes from './signIn.module.scss'
import { Typography, Button, styled } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import ChatIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { FC, useState } from 'react';
import { LoginModal } from './components/LoginModal';
import { RegisterModal } from './components/RegisterModal';

const LoginSideTitle = styled(Typography)({
    fontSize: '32px',
    fontWeight: 700,
    marginBottom: '45px',
    marginTop: '20px'
})

const BigIcon = styled(TwitterIcon)({
    position: 'absolute',
    left: '50%',
    top: '53%',
    transform: 'translate(-50%, -50%)',
    width: '200%',
    height: '200%'
})


export const SignIn: FC = () => {

    const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>()

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn')
    }

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp')
    }

    const handleCloseModal = (): void => {
        setVisibleModal(undefined)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.blueSide}>
                <BigIcon color = 'primary'/>
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant='h6'>
                        <SearchIcon sx={{fontSize: 32, mr: '15px'}}/>
                        Читайте о том, что вам интересно.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant='h6'>
                            <PeopleIcon sx={{fontSize: 32, mr: '15px'}}/>
                            Узнайте, о чем говорят в мире.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}><Typography variant='h6'>
                        <ChatIcon sx={{fontSize: 32, mr: '15px'}}/>
                        Присоединяйтесь к общению.
                        </Typography>
                    </li>
                </ul>
            </div>
            <div className={classes.loginSide}>
                <div style={{width: 380}}>
                    <TwitterIcon sx={{fontSize: 50}} color='primary'/>
                    <LoginSideTitle variant="h4">Узнайте, что происходит в мире прямо сейчас</LoginSideTitle>
                    <Typography sx={{mb: '20px'}}><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <Button onClick = {handleClickOpenSignUp} sx={{mb: '20px'}} variant='contained' fullWidth >Зарегистрироваться</Button>
                    <Button onClick ={handleClickOpenSignIn} variant='outlined' fullWidth >Войти</Button>
                </div>
            </div>
    
            <LoginModal open={visibleModal === 'signIn'} onClose={handleCloseModal}/>

            <RegisterModal open={visibleModal === 'signUp'} onClose={handleCloseModal}/>
        </div>
    )
}
