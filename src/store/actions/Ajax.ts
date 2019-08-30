import {Pending, Success, Fail } from "../actionTypes";
export default {
  loading(text) {
    return {
      type: Pending,
      text
    }
  },
  success(text) {
    return {
      type: Success,
      text
    }
  },
  fail(text) {
    return {
      type: Fail,
      text
    }
  }

}
