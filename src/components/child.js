import * as React from 'react';
import Wrapper from './HOC/Wrapper';
function Profile(props) {
    return (React.createElement("div", null, props.name.age));
}
var Child = Wrapper(Profile);
export default Child;
