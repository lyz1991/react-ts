import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchChangeLocale } from "./model/saga";
import Mid from './md';
import user from './reducer/user';
import ajax from './reducer/global';
var sagaMiddleware = createSagaMiddleware();
var Store = combineReducers({
    user: user,
    ajax: ajax
});
var appstore = createStore(Store, compose(applyMiddleware(sagaMiddleware, Mid)));
sagaMiddleware.run(watchChangeLocale);
export default appstore;
