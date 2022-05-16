import { axios } from "../core/axios"
import { LoginFormProps } from "../pages/SignIn/components/LoginModal"

interface ResponseApi {
    status: 'string'
    data: any
}

export const signIn = async (postData: LoginFormProps): Promise<ResponseApi> => {
    const { data } = await axios.post('/auth/login', {username: postData.email, password: postData.password})
    return data
}

export const getMe = async (): Promise<ResponseApi> => {
    const { data } = await axios.get('/users/me')
    return data
}