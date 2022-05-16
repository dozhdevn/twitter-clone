import { LoginFormProps } from "../../pages/SignIn/components/LoginModal";

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
    FETCH_USER = "FETCH_USER",
    SET_USER = "SET_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR"
}

export interface FetchUserAction {
    type: UserActionsTypes.FETCH_USER
    payload: LoginFormProps
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

export type UserActions = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction | SetUserAction