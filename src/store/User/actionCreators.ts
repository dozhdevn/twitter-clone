import { LoginFormProps } from "../../pages/SignIn/components/LoginModal";
import { RegisterFormProps } from "../../pages/SignIn/components/RegisterModal";
import { FetchUserSignInAction, FetchUserSignUpAction, Status, User, UserActionsTypes } from "./types";

export const fetchUserSignIn = (payload : LoginFormProps): FetchUserSignInAction => ({type: UserActionsTypes.FETCH_USER_SIGN_IN, payload})

export const fetchUserSignUp = (payload : RegisterFormProps): FetchUserSignUpAction => ({type: UserActionsTypes.FETCH_USER_SIGN_UP, payload})

export const fetchUserSuccess = (payload: User) => ({type: UserActionsTypes.FETCH_USER_SUCCESS, payload})

export const fetchUserError = (payload: Status.ERROR) => ({type: UserActionsTypes.FETCH_USER_ERROR, payload})