"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Matcher_1 = require("./Matcher");
var AnyFunctionMatcher = (function (_super) {
    __extends(AnyFunctionMatcher, _super);
    function AnyFunctionMatcher() {
        return _super.call(this) || this;
    }
    AnyFunctionMatcher.prototype.match = function (value) {
        return _.isFunction(value);
    };
    AnyFunctionMatcher.prototype.toString = function () {
        return "anyFunction()";
    };
    return AnyFunctionMatcher;
}(Matcher_1.Matcher));
exports.AnyFunctionMatcher = AnyFunctionMatcher;
//# sourceMappingURL=AnyFunctionMatcher.js.map