"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MethodCallToStringConverter = (function () {
    function MethodCallToStringConverter() {
    }
    MethodCallToStringConverter.prototype.convert = function (method) {
        var stringifiedMatchers = method.matchers.map(function (matcher) { return matcher.toString(); }).join(", ");
        return method.name + "(" + stringifiedMatchers + ")\" ";
    };
    return MethodCallToStringConverter;
}());
exports.MethodCallToStringConverter = MethodCallToStringConverter;
//# sourceMappingURL=MethodCallToStringConverter.js.map