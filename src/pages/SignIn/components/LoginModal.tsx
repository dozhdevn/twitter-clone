import { Button, FormControl, FormGroup, TextField } from '@mui/material'
import React from 'react'
import ModalBlock from '../../../components/ModalBlock'

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Notification } from '../../../components/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../../store/User/actionCreators';
import { selectUser } from '../../../store/User/selectors';

interface LoginModalProps {
    open: boolean
    onClose: () => void
}

export interface LoginFormProps {
    email: string
    password: string
}

const LoginFormSchema = yup.object({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6, 'Минимальная длина пороля 6 символов').required(),
}).required();

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }): React.ReactElement => {

    const dispatch = useDispatch()
    const { status } = useSelector(selectUser)

    const [openNotification, setOpenNotification] = React.useState<"success" | "error">()

    const handleCloseNotification = () => {
        setOpenNotification(undefined)
    }

    const { control, handleSubmit, reset, formState: { errors } } = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
    });

    const onSubmit = async (data: LoginFormProps) => {
        dispatch(fetchUser(data))
        reset({
            email: '',
            password: ''
        })
    }

    React.useEffect(() => {
        if (status === 'SUCCESS') {
            setOpenNotification('success')
            onClose()
        } else if ('ERROR') {
            setOpenNotification('error')
        }
    }, [status])


    return (
        <>
            <ModalBlock
                visible={open}
                onClose={onClose}
                title='Войти в аккаунт'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl
                        component='fieldset'
                        sx={{ marginBottom: '16px' }}
                        fullWidth>
                        <FormGroup>
                            <Controller
                                control={control}
                                name='email'
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}

                                        sx={{ mb: '18px' }}
                                        label='E-mail'
                                        type='email'
                                        autoFocus
                                        variant='filled'
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                    />)}
                            />
                            <Controller
                                control={control}
                                name='password'
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        sx={{ mb: '18px' }}
                                        label='Пароль'
                                        type='password'
                                        variant='filled'
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        error={!!errors.password}
                                        helperText={errors.password?.message}
                                    />)}
                            />
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                fullWidth>
                                Войти
                            </Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </ModalBlock>
            {
                status === 'SUCCESS' ?
                    <Notification
                        visible={openNotification === 'success'}
                        onClose={handleCloseNotification}
                        severity='success'
                        description='Авторизация прошла успешна' /> : null
            }
            {
                status === 'ERROR' ?
                    <Notification
                        visible={openNotification === 'error'}
                        onClose={handleCloseNotification}
                        severity='error'
                        description='Неверный логин и пароль' /> : null
            }
        </>
    )
}
