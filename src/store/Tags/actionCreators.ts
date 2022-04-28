import { TagsActionsTypes, TagsState } from "./types";

export const setTags = () => ({type: TagsActionsTypes.FETCH_TAGS})

export const setTagsSuccess = (payload: TagsState['tags']) => ({type: TagsActionsTypes.FETCH_TAGS_SUCCESS, payload})

export const setTagsError = (payload: TagsState['error']) => ({type: TagsActionsTypes.FETCH_TAGS_ERROR, payload})