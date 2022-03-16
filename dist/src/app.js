"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var middlewares_1 = require("./middlewares");
var routes_1 = require("./loaders/routes");
var app = (0, express_1["default"])();
// enable cors
app.use((0, cors_1["default"])());
// parse json body
app.use(express_1["default"].json());
// handle bad json format
app.use(middlewares_1.validateJson);
// load routes
(0, routes_1.getRoutes)(app);
// catch all errors
app.use(middlewares_1.handleError);
exports["default"] = app;
//# sourceMappingURL=app.js.map