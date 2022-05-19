import { LoginFormProps } from "../../pages/SignIn/components/LoginModal";
import { RegisterFormProps } from "../../pages/SignIn/components/RegisterModal";

export interface User {
    _id?: string;
    email: string;
    fullname: string;
    username: string;
    password: string;
    confirmHash: string;
    confirmed?: boolean;
    location?: string;
    about?: string;
    website?: string;
}

export enum Status {
    LOADING = "LOADING",
    ERROR = "ERROR",
    SUCCESS = "SUCCESS"

}

export interface UserState {
    data: User | undefined
    status: Status | null
}

export enum UserActionsTypes {
    FETCH_USER_SIGN_IN = "FETCH_USER_SIGN_IN",
    FETCH_USER_SIGN_UP = "FETCH_USER_SIGN_UP",
    SET_USER = "SET_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR"
}

export interface FetchUserSignInAction {
    type: UserActionsTypes.FETCH_USER_SIGN_IN
    payload: LoginFormProps
}

export interface FetchUserSignUpAction {
    type: UserActionsTypes.FETCH_USER_SIGN_UP
    payload: RegisterFormProps
}

export interface SetUserAction {
    type: UserActionsTypes.SET_USER
    payload: User
}

interface FetchUserSuccessAction {
    type: UserActionsTypes.FETCH_USER_SUCCESS
    payload: User
}

interface FetchUserErrorAction {
    type: UserActionsTypes.FETCH_USER_ERROR
    payload: Status.ERROR
}

export type UserActions =
    FetchUserSignInAction |
    FetchUserSignUpAction |
    FetchUserSuccessAction |
    FetchUserErrorAction |
    SetUserAction