import * as React from 'react'
import { connect } from 'react-redux'
import Children from 'components/child'
import Wrapper from '../components/HOC/Wrapper'
import User from '../store/actions/user'
import { RouteComponentProps } from 'react-router-dom';
@Wrapper
class Text extends React.Component {
  render() {
    return <p>name</p>
  }
}
interface props extends RouteComponentProps{
  user: any,
  ajax: any,
  getUserInfo: Function
}
const mapStateToProps = (state) => {
  return {
    user: state.user.toJS(),
    ajax: state.ajax.toJS()
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (params) => {
      return  dispatch(User.getData(params))
    }
  }
}
class Index extends React.Component<props, {}> {
  constructor(props: any) {
    super(props)
    this.state = {
      name: '刘云钊'
    }
  }
  UNSAFE_componentWillMount() {
    this.props.getUserInfo()
  }
  jump () {
    this.props.history.push('/profile')
  }
  render() {
    console.log('prop',this.props)
    return (
      <div>
        <p>{this.props.ajax.text}</p>
        <button onClick={this.jump}>跳转</button>
        <Children/>
        <p>22</p>

      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)
