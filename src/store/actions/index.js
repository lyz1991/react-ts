import { bindActionCreators } from 'redux';
import store from '../store';
import actions from './user';
export var getUserinfo = function (text) {
    bindActionCreators(actions.getData, store.dispatch)(text);
};
