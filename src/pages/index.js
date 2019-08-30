var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { connect } from 'react-redux';
import Children from 'components/child';
import Wrapper from '../components/HOC/Wrapper';
import User from '../store/actions/user';
var Text = (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Text.prototype.render = function () {
        return React.createElement("p", null, "name");
    };
    Text = __decorate([
        Wrapper
    ], Text);
    return Text;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        user: state.user.toJS(),
        ajax: state.ajax.toJS()
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        getUserInfo: function (params) {
            return dispatch(User.getData(params));
        }
    };
};
var Index = (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            name: '刘云钊'
        };
        return _this;
    }
    Index.prototype.UNSAFE_componentWillMount = function () {
        this.props.getUserInfo();
    };
    Index.prototype.jump = function () {
        this.props.history.push('/profile');
    };
    Index.prototype.render = function () {
        console.log('prop', this.props);
        return (React.createElement("div", null,
            React.createElement("p", null, this.props.ajax.text),
            React.createElement("button", { onClick: this.jump }, "\u8DF3\u8F6C"),
            React.createElement(Children, null),
            React.createElement("p", null, "22")));
    };
    return Index;
}(React.Component));
export default connect(mapStateToProps, mapDispatchToProps)(Index);
