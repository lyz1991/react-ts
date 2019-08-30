import * as React from 'react'
import { connect } from 'react-redux'
interface props {
  user: []
}
const mapStateToProps = (state) => {
  return {
    user: state.user.toJS()
  }
}
function Profile() {
  console.log('re-render profile')
  return (
    <div>
      22
    </div>
  )
}
export default connect(mapStateToProps)(Profile)

