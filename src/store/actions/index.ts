import { bindActionCreators } from 'redux'
import store from '../store'
import actions from './user'
import { Pending } from '../actionTypes'
export const getUserinfo = (text:object) => {
  bindActionCreators(actions.getData, store.dispatch)(text)
}
