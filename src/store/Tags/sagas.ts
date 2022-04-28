import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchTags } from '../../api/tagsApi'
import { setTagsError, setTagsSuccess } from './actionCreators'
import { ITag, TagsActionsTypes } from './types'


export function* fetchTagsRequest(): Generator<unknown, void, ITag[]> {
    try {
        const data: ITag[]  = yield call(fetchTags)
        yield put(setTagsSuccess(data))
    } catch (error) {
        yield put(setTagsError('Ошибка при запросе тэгов'))
    }
}

export function* tagsSaga() {
    yield takeLatest(TagsActionsTypes.FETCH_TAGS, fetchTagsRequest)
}
