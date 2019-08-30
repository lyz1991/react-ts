import { call, put, takeLatest } from 'redux-saga/effects'
import {getUserInfo} from '../../Api/index'
import * as actionTypes from '../actionTypes'
function* fetchData(action) {
   try {
      yield put({type: actionTypes.Pending})
      console.log('saga pending')
      const data = yield call(getUserInfo, action.text);
      yield put({type: actionTypes.Success});
   } catch (error) {
      yield put({type: actionTypes.Fail, error});
   }
}
export function* watchChangeLocale() {
  yield takeLatest(actionTypes.GET_USER_INFO, fetchData);
}
