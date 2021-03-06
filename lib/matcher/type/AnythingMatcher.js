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
var AnythingMatcher = (function (_super) {
    __extends(AnythingMatcher, _super);
    function AnythingMatcher() {
        return _super.call(this) || this;
    }
    AnythingMatcher.prototype.match = function (value) {
        return true;
    };
    AnythingMatcher.prototype.toString = function () {
        return "anything()";
    };
    return AnythingMatcher;
}(Matcher_1.Matcher));
exports.AnythingMatcher = AnythingMatcher;
//# sourceMappingURL=AnythingMatcher.js.map