"use strict";
exports.__esModule = true;
exports.validatorCallback = void 0;
var utils_1 = require("../utils");
var validatorCallback = function (validator) { return function (req, res, next) {
    var httpRequest = {
        body: req.body,
        query: req.query,
        params: req.params
    };
    var error = validator(httpRequest).error;
    if (error)
        throw new utils_1.ErrorHandler(error.message, utils_1.HTTP_STATUS_CODES.BAD_REQUEST);
    return next();
}; };
exports.validatorCallback = validatorCallback;
//# sourceMappingURL=validator-callback.js.map