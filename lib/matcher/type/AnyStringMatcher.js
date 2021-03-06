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
var AnyStringMatcher = (function (_super) {
    __extends(AnyStringMatcher, _super);
    function AnyStringMatcher() {
        return _super.call(this) || this;
    }
    AnyStringMatcher.prototype.match = function (value) {
        return _.isString(value);
    };
    AnyStringMatcher.prototype.toString = function () {
        return "anyString()";
    };
    return AnyStringMatcher;
}(Matcher_1.Matcher));
exports.AnyStringMatcher = AnyStringMatcher;
//# sourceMappingURL=AnyStringMatcher.js.map