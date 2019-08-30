import {fromJS} from 'immutable'
import {Pending, Success} from "../actionTypes";

const Ajax =(state= fromJS({
  text: ''
}), action) => {
   switch (action.type) {
     case Pending:
       state = state.updateIn(['text'], text => text = action.text || '加载中' )
       return state
     case Success:
       state = state.updateIn(['text'], text => text = action.text || '加载成功')
       return state
     default:
       return state
   }
}
export default Ajax

