import { fromJS } from 'immutable';
import { Pending, Success } from "../actionTypes";
var Ajax = function (state, action) {
    if (state === void 0) { state = fromJS({
        text: ''
    }); }
    switch (action.type) {
        case Pending:
            state = state.updateIn(['text'], function (text) { return text = action.text || '加载中'; });
            return state;
        case Success:
            state = state.updateIn(['text'], function (text) { return text = action.text || '加载成功'; });
            return state;
        default:
            return state;
    }
};
export default Ajax;
