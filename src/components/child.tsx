import * as React from 'react'
import Wrapper from './HOC/Wrapper'
function Profile(props) {
  return (
    <div>
      {props.name.age}
    </div>
  )
}
const Child = Wrapper(Profile)
export default Child
