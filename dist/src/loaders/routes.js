"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getRoutes = void 0;
// Routes
var auth_module_1 = __importDefault(require("../features/auth/auth.module"));
var currency_converter_route_1 = __importDefault(require("../features/currency-converter/currency-converter.route"));
var authRoute = auth_module_1["default"].authRoute;
var getRoutes = function (app) {
    app.use("/api/auth", authRoute);
    app.use("/api/currency/", currency_converter_route_1["default"]);
};
exports.getRoutes = getRoutes;
//# sourceMappingURL=routes.js.map