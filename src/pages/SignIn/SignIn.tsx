import classes from './signIn.module.scss'
import { Typography, Button, styled, FormControl, FormGroup, TextField  } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import ChatIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ModalBlock from '../../components/ModalBlock/ModalBlock';
import { FC, useState } from 'react';

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
    height: '200%',
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
    
            <ModalBlock
                visible={visibleModal === 'signIn'}
                onClose={handleCloseModal} 
                title = 'Войти в аккаунт'>
                <FormControl
                    component='fieldset'
                    sx={{marginBottom: '16px'}}
                    fullWidth>
                    <FormGroup>
                        <TextField
                            sx={{mb: '18px'}}
                            label='E-mail'
                            type='email'
                            autoFocus
                            variant='filled'
                            fullWidth
                            InputLabelProps={{shrink: true}}/>
                        <TextField
                            sx={{mb: '18px'}}
                            label='Пароль'
                            type='password'
                            autoFocus
                            variant='filled'
                            fullWidth
                            InputLabelProps={{shrink: true}}/>
                        <Button
                            variant='contained'
                            color='primary'
                            fullWidth>
                                Войти
                        </Button>
                    </FormGroup>
                </FormControl>
            </ModalBlock>

            <ModalBlock
                visible={visibleModal === 'signUp'}
                onClose={handleCloseModal} 
                title = 'Создайте учетную запись'>
                <FormControl
                    component='fieldset'
                    sx={{marginBottom: '16px'}}
                    fullWidth>
                    <FormGroup>
                        <TextField
                            sx={{mb: '18px'}}
                            label='Имя'
                            type='name'
                            autoFocus
                            variant='filled'
                            fullWidth
                            InputLabelProps={{shrink: true}}/>
                        <TextField
                            sx={{mb: '18px'}}
                            label='E-mail'
                            type='email'
                            autoFocus
                            variant='filled'
                            fullWidth
                            InputLabelProps={{shrink: true}}/>
                        <TextField
                            sx={{mb: '18px'}}
                            label='Пароль'
                            type='password'
                            autoFocus
                            variant='filled'
                            fullWidth
                            InputLabelProps={{shrink: true}}/>
                        <Button
                            variant='contained'
                            color='primary'
                            fullWidth>
                                Войти
                        </Button>
                    </FormGroup>
                </FormControl>
            </ModalBlock>
        </div>
    )
}
