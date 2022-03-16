"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var currency_converter_controller_1 = __importDefault(require("./currency-converter.controller"));
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("../../middlewares");
var currencyConverterRouter = express_1["default"].Router();
currencyConverterRouter.post("/convert", middlewares_1.authGuard, (0, middlewares_1.expressCallback)(currency_converter_controller_1["default"].getConvertedCurrency));
exports["default"] = currencyConverterRouter;
//# sourceMappingURL=currency-converter.route.js.map