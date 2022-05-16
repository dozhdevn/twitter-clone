import { LoginFormProps } from "../../pages/SignIn/components/LoginModal";
import { Status, User, UserActionsTypes } from "./types";

export const fetchUser = (payload : LoginFormProps) => ({type: UserActionsTypes.FETCH_USER, payload})

export const fetchUserSuccess = (payload: User) => ({type: UserActionsTypes.FETCH_USER_SUCCESS, payload})

export const fetchUserError = (payload: Status.ERROR) => ({type: UserActionsTypes.FETCH_USER_ERROR, payload})