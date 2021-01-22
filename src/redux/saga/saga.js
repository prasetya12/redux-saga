import * as newsAction from '../action/newsAction'

import * as newsSaga from './news'
import {takeEvery, all} from 'redux-saga/effects'

function* saga(){
    yield all([
        takeEvery(newsAction.NEWS_LIST_REQUEST,newsSaga.list)
    ])
}

export default saga;