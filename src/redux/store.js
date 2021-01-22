import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import { END } from 'redux-saga'

import saga from './saga/saga'
import reducers from '../redux/reducers'

export const sagaMiddleware = createSagaMiddleware() 
export const store = createStore(reducers,composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(saga)
