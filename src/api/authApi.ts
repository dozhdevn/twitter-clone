import { axios } from "../core/axios"
import { LoginFormProps } from "../pages/SignIn/components/LoginModal"
import { RegisterFormProps } from "../pages/SignIn/components/RegisterModal"

interface ResponseApi {
    status: 'string'
    data: any
}

export const signIn = async (postData: LoginFormProps): Promise<ResponseApi> => {
    const { data } = await axios.post('/auth/login', {
        username: postData.email,
        password: postData.password
    })
    return data
}

export const signUp = async (postData: RegisterFormProps): Promise<ResponseApi> => {
    const { data } = await axios.post('/auth/register', {
        email: postData.email,
        username: postData.username,
        fullname: postData.fullname,
        password: postData.password,
        password2: postData.password2 
    })

    return data
}

export const getMe = async (): Promise<ResponseApi> => {
    const { data } = await axios.get('/users/me')
    return data
}