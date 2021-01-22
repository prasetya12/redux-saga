import * as newsAction from '../action/newsAction'
import {put,takeEvery} from 'redux-saga/effects'
import * as apiNews from '../../api/news'

function* list(action){
    try{
        const {data} = yield apiNews.list(action)
        yield put({type:newsAction.NEWS_LIST_SUCCESS,data})
    }catch(e){
        yield put({type:newsAction.NEWS_LIST_FAILURE})
    }
}


export{
    list
}