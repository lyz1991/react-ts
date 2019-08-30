import {setName} from "../actionTypes";
import {fromJS} from 'immutable'
const user =(state= fromJS({
  name: 'lyz',
  res: [{name: 'lyz'}, {name: 'cp'}]
}), action) => {
   switch (action.type) {
     case setName:
       state = state.updateIn(['res', 0], val => val = action.text)
       return state
     default:
       return state
   }
}
export default user
