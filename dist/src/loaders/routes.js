"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getRoutes = void 0;
// Routes
var auth_module_1 = __importDefault(require("../features/auth/auth.module"));
var authRoute = auth_module_1["default"].authRoute;
var getRoutes = function (app) {
    app.use("/api/auth", authRoute);
};
exports.getRoutes = getRoutes;
//# sourceMappingURL=routes.js.map