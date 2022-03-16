"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ErrorHandler = exports.HTTP_STATUS_CODES = void 0;
var HTTP_STATUS_CODES;
(function (HTTP_STATUS_CODES) {
    HTTP_STATUS_CODES[HTTP_STATUS_CODES["OK"] = 200] = "OK";
    HTTP_STATUS_CODES[HTTP_STATUS_CODES["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTP_STATUS_CODES[HTTP_STATUS_CODES["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTP_STATUS_CODES[HTTP_STATUS_CODES["UNOOTHORIZD"] = 403] = "UNOOTHORIZD";
    HTTP_STATUS_CODES[HTTP_STATUS_CODES["INTERNAL_SERVER"] = 500] = "INTERNAL_SERVER";
})(HTTP_STATUS_CODES = exports.HTTP_STATUS_CODES || (exports.HTTP_STATUS_CODES = {}));
var ErrorHandler = /** @class */ (function (_super) {
    __extends(ErrorHandler, _super);
    function ErrorHandler(message, status) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, ErrorHandler.prototype);
        _this.status = status;
        return _this;
    }
    return ErrorHandler;
}(Error));
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=api-errors.js.map