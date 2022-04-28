import { TagsActions, TagsActionsTypes, TagsState } from "./types"

const initialState: TagsState = {
    tags: [],
    loading: false,
    error: null
}

export const tagsReducer = (state = initialState, action: TagsActions): TagsState => {
    switch (action.type) {
        case TagsActionsTypes.FETCH_TAGS:
            return {
                ...state,
                loading: true
            }
        case TagsActionsTypes.FETCH_TAGS_SUCCESS:
            return {
                ...state,
                tags: action.payload,
                loading: false
            }
        case TagsActionsTypes.FETCH_TAGS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}