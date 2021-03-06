"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MethodCallToStringConverter_1 = require("./utils/MethodCallToStringConverter");
var MethodStubVerificator = (function () {
    function MethodStubVerificator(methodToVerify) {
        this.methodToVerify = methodToVerify;
        this.methodCallToStringConverter = new MethodCallToStringConverter_1.MethodCallToStringConverter();
    }
    MethodStubVerificator.prototype.called = function () {
        this.atLeast(1);
    };
    MethodStubVerificator.prototype.never = function () {
        this.times(0);
    };
    MethodStubVerificator.prototype.once = function () {
        this.times(1);
    };
    MethodStubVerificator.prototype.twice = function () {
        this.times(2);
    };
    MethodStubVerificator.prototype.thrice = function () {
        this.times(3);
    };
    MethodStubVerificator.prototype.times = function (value) {
        var allMatchingActions = this.methodToVerify.mocker.getAllMatchingActions(this.methodToVerify.name, this.methodToVerify.matchers);
        if (value !== allMatchingActions.length) {
            var methodToVerifyAsString = this.methodCallToStringConverter.convert(this.methodToVerify);
            throw new Error("Expected \"" + methodToVerifyAsString + "to be called " + value + " time(s). But has been called " + allMatchingActions.length + " time(s).");
        }
    };
    MethodStubVerificator.prototype.atLeast = function (value) {
        var allMatchingActions = this.methodToVerify.mocker.getAllMatchingActions(this.methodToVerify.name, this.methodToVerify.matchers);
        if (value > allMatchingActions.length) {
            var methodToVerifyAsString = this.methodCallToStringConverter.convert(this.methodToVerify);
            throw new Error("Expected \"" + methodToVerifyAsString + "to be called at least " + value + " time(s). But has been called " + allMatchingActions.length + " time(s).");
        }
    };
    MethodStubVerificator.prototype.atMost = function (value) {
        var allMatchingActions = this.methodToVerify.mocker.getAllMatchingActions(this.methodToVerify.name, this.methodToVerify.matchers);
        if (value < allMatchingActions.length) {
            var methodToVerifyAsString = this.methodCallToStringConverter.convert(this.methodToVerify);
            throw new Error("Expected \"" + methodToVerifyAsString + "to be called at least " + value + " time(s). But has been called " + allMatchingActions.length + " time(s).");
        }
    };
    MethodStubVerificator.prototype.calledBefore = function (method) {
        var firstMethodAction = this.methodToVerify.mocker.getFirstMatchingAction(this.methodToVerify.name, this.methodToVerify.matchers);
        var secondMethodAction = method.mocker.getFirstMatchingAction(method.name, method.matchers);
        var mainMethodToVerifyAsString = this.methodCallToStringConverter.convert(this.methodToVerify);
        var secondMethodAsString = this.methodCallToStringConverter.convert(method);
        var errorBeginning = "Expected \"" + mainMethodToVerifyAsString + " to be called before " + secondMethodAsString;
        if (firstMethodAction && secondMethodAction) {
            if (!firstMethodAction.hasBeenCalledBefore(secondMethodAction)) {
                throw new Error(errorBeginning + "but has been called after.");
            }
        }
        else if (firstMethodAction && !secondMethodAction) {
            throw new Error(errorBeginning + "but " + secondMethodAsString + "has never been called.");
        }
        else if (!firstMethodAction && secondMethodAction) {
            throw new Error(errorBeginning + "but " + mainMethodToVerifyAsString + "has never been called.");
        }
        else {
            throw new Error(errorBeginning + "but none of them has been called.");
        }
    };
    MethodStubVerificator.prototype.calledAfter = function (method) {
        var firstMethodAction = this.methodToVerify.mocker.getFirstMatchingAction(this.methodToVerify.name, this.methodToVerify.matchers);
        var secondMethodAction = method.mocker.getFirstMatchingAction(method.name, method.matchers);
        var mainMethodToVerifyAsString = this.methodCallToStringConverter.convert(this.methodToVerify);
        var secondMethodAsString = this.methodCallToStringConverter.convert(method);
        var errorBeginning = "Expected \"" + mainMethodToVerifyAsString + "to be called after " + secondMethodAsString;
        if (firstMethodAction && secondMethodAction) {
            if (firstMethodAction.hasBeenCalledBefore(secondMethodAction)) {
                throw new Error(errorBeginning + "but has been called before.");
            }
        }
        else if (firstMethodAction && !secondMethodAction) {
            throw new Error(errorBeginning + "but " + secondMethodAsString + "has never been called.");
        }
        else if (!firstMethodAction && secondMethodAction) {
            throw new Error(errorBeginning + "but " + mainMethodToVerifyAsString + "has never been called.");
        }
        else {
            throw new Error(errorBeginning + "but none of them has been called.");
        }
    };
    return MethodStubVerificator;
}());
exports.MethodStubVerificator = MethodStubVerificator;
//# sourceMappingURL=MethodStubVerificator.js.map