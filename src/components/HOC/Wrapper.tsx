import * as React from "react";

export default (Comment:any) => {
  return class Wrapper extends React.Component {
    componentDidMount(){
      console.log(2)
    }
    render() {
      return <Comment name={{age: '22'}}/>
    }
  }
}
