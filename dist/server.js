"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var http_1 = __importDefault(require("http"));
var app_1 = __importDefault(require("./src/app"));
var PORT = process.env.PORT || 3175;
var httpServer = http_1["default"].createServer(app_1["default"]);
httpServer.listen(PORT, function () {
    return console.log("The server is running on port ".concat(PORT));
});
//# sourceMappingURL=server.js.map