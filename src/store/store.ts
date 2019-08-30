import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { watchChangeLocale } from "./model/saga";
import Mid from './md'
import user from './reducer/user'
import ajax from './reducer/global'
const sagaMiddleware = createSagaMiddleware()
const Store = combineReducers({
  user,
  ajax
})
let appstore = createStore(Store, compose(applyMiddleware(sagaMiddleware, Mid)))
sagaMiddleware.run(watchChangeLocale)
export default appstore
