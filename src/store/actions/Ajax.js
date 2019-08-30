import { Pending, Success, Fail } from "../actionTypes";
export default {
    loading: function (text) {
        return {
            type: Pending,
            text: text
        };
    },
    success: function (text) {
        return {
            type: Success,
            text: text
        };
    },
    fail: function (text) {
        return {
            type: Fail,
            text: text
        };
    }
};
