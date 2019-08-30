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
import * as React from "react";
export default (function (Comment) {
    return (function (_super) {
        __extends(Wrapper, _super);
        function Wrapper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Wrapper.prototype.componentDidMount = function () {
            console.log(2);
        };
        Wrapper.prototype.render = function () {
            return React.createElement(Comment, { name: { age: '22' } });
        };
        return Wrapper;
    }(React.Component));
});
