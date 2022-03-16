"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var currency_converter_controller_1 = __importDefault(require("./currency-converter.controller"));
var currency_converter_route_1 = __importDefault(require("./currency-converter.route"));
var currency_converter_service_1 = __importDefault(require("./currency-converter.service"));
exports["default"] = {
    currencyConverterServiceController: currency_converter_controller_1["default"],
    currencyConverterService: currency_converter_service_1["default"],
    currencyConverterRoute: currency_converter_route_1["default"]
};
//# sourceMappingURL=conrrency-converter.module.js.map