"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("../../middlewares");
var auth_controller_1 = __importDefault(require("./auth.controller"));
var authRouter = express_1["default"].Router();
authRouter.post("/login", (0, middlewares_1.expressCallback)(auth_controller_1["default"].login));
authRouter.post("/register", (0, middlewares_1.expressCallback)(auth_controller_1["default"].register));
exports["default"] = authRouter;
//# sourceMappingURL=auth.route.js.map