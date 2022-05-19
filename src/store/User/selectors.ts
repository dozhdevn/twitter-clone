import { RootState } from "../store";
  
export const selectUser = (state: RootState ) => state.user

export const selectUserStatus = (state: RootState ) => state.user.status

export const selectIsAuth = (state: RootState ): boolean => !!state.user.data