import { setName } from "../actionTypes";
import { fromJS } from 'immutable';
var user = function (state, action) {
    if (state === void 0) { state = fromJS({
        name: 'lyz',
        res: [{ name: 'lyz' }, { name: 'cp' }]
    }); }
    switch (action.type) {
        case setName:
            state = state.updateIn(['res', 0], function (val) { return val = action.text; });
            return state;
        default:
            return state;
    }
};
export default user;
