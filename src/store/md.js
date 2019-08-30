export default (function (_a) {
    var dispatch = _a.dispatch, getState = _a.getState;
    return function (next) { return function (action) {
        return next(action);
    }; };
});
