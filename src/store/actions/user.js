import { GET_USER_INFO } from "../actionTypes";
export default {
    getData: function (text) {
        return {
            type: GET_USER_INFO
        };
    }
};
