export interface ITag {
    _id: string
    name: string
    count: number
}

export interface TagsState {
    tags: ITag[]
    loading: boolean
    error: string | null
}

export enum TagsActionsTypes {
    FETCH_TAGS = 'FETCH_TAGS',
    FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS',
    FETCH_TAGS_ERROR = 'FETCH_TAGS_ERROR'
}

interface FetchTagsAction {
    type: TagsActionsTypes.FETCH_TAGS,
}

interface FetchTagsSuccessAction {
    type: TagsActionsTypes.FETCH_TAGS_SUCCESS;
    payload: ITag[]
}
interface FetchTagsErrorAction {
    type: TagsActionsTypes.FETCH_TAGS_ERROR;
    payload: string;
}

export type TagsActions = FetchTagsAction | FetchTagsSuccessAction | FetchTagsErrorAction