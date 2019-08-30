import * as React from 'react';
import { connect } from 'react-redux';
var mapStateToProps = function (state) {
    return {
        user: state.user.toJS()
    };
};
function Profile() {
    console.log('re-render profile');
    return (React.createElement("div", null, "22"));
}
export default connect(mapStateToProps)(Profile);
