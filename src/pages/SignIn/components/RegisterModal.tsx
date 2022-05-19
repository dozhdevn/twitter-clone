import { Button, FormControl, FormGroup, TextField } from '@mui/material'
import React from 'react'
import ModalBlock from '../../../components/ModalBlock'
import * as yup from "yup";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import { fetchUserSignUp } from '../../../store/User/actionCreators';

interface RegisterModalProps {
    open: boolean
    onClose: () => void
}

export interface RegisterFormProps {
    email: string
    username: string
    fullname: string
    password: string
    password2: string
}

const RegisterFormSchema = yup.object({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    username: yup.string().required('Введите логин'),
    fullname: yup.string().required('Введите свое имя'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required('Введите пароль'),
    password2: yup.string().oneOf([yup.ref('password')], 'Пароли не сопадают')
}).required()

export const RegisterModal: React.FC<RegisterModalProps> = ({ open, onClose }) => {

    const dispatch = useDispatch()

    const { control, handleSubmit, reset, formState: { errors } } = useForm<RegisterFormProps>({
        resolver: yupResolver(RegisterFormSchema)
    })

    const onSubmit = (data: RegisterFormProps) => {
        dispatch(fetchUserSignUp(data))
        reset({
            email: '',
            username: '',
            fullname: '',
            password: '',
            password2: ''
          })
    }

    return (
        <ModalBlock
            visible={open}
            onClose={onClose}
            title='Создайте учетную запись'>
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
                                    helperText={errors.email?.message} />)}
                        />
                        <Controller
                            control={control}
                            name='username'
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    sx={{ mb: '18px' }}
                                    label='Логин'
                                    type='text'
                                    variant='filled'
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    error={!!errors.username}
                                    helperText={errors.username?.message} />)}
                        />
                        <Controller
                            control={control}
                            name='fullname'
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    sx={{ mb: '18px' }}
                                    label='Ваше имя'
                                    type='text'
                                    variant='filled'
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    error={!!errors.fullname}
                                    helperText={errors.fullname?.message} />)}
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
                                    helperText={errors.password?.message} />)}
                        />
                        <Controller
                            control={control}
                            name='password2'
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    sx={{ mb: '18px' }}
                                    label='Повторите пароль'
                                    type='password'
                                    variant='filled'
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    error={!!errors.password2}
                                    helperText={errors.password2?.message} />)}
                        />

                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            fullWidth>
                            Зарегистрироваться
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </ModalBlock>
    )
}
