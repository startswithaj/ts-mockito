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
var Matcher_1 = require("./Matcher");
var BetweenMatcher = (function (_super) {
    __extends(BetweenMatcher, _super);
    function BetweenMatcher(min, max) {
        var _this = _super.call(this) || this;
        _this.min = min;
        _this.max = max;
        if (min > max) {
            throw new Error("between matcher error: min value can\'t be greater than max");
        }
        return _this;
    }
    BetweenMatcher.prototype.match = function (value) {
        return value >= this.min && value <= this.max;
    };
    BetweenMatcher.prototype.toString = function () {
        return "between(" + this.min + ", " + this.max + ")";
    };
    return BetweenMatcher;
}(Matcher_1.Matcher));
exports.BetweenMatcher = BetweenMatcher;
//# sourceMappingURL=BetweenMatcher.js.map