import {list} from '../reducers/newsReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    news:list
})