import { Status, UserActions, UserActionsTypes, UserState } from "./types"

const initialState: UserState = {
    data: undefined,
    status: null
}

export const userReducer = (state = initialState, action: UserActions): UserState => {
    switch(action.type) {
        case UserActionsTypes.FETCH_USER:
            return {
                ...state,
                status: Status.LOADING
            }
        case UserActionsTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                status: Status.SUCCESS
            }
        case UserActionsTypes.FETCH_USER_ERROR:
            return {
                ...state,
                data: undefined,
                status: Status.ERROR
            }
        default: 
        return state
    }
}