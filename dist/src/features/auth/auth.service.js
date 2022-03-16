"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var config_1 = __importDefault(require("../../config"));
var ACCESS_TOKEN_EXPIRES_IN = config_1["default"].ACCESS_TOKEN_EXPIRES_IN, JWT_ACCESS_TOKEN_SECRET = config_1["default"].JWT_ACCESS_TOKEN_SECRET;
var utils_1 = require("../../utils");
var doRegister = function (_a) {
    var email = _a.email, password = _a.password, name = _a.name;
    return __awaiter(void 0, void 0, void 0, function () {
        var user, payload, token, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, utils_1.prisma.user.create({
                            data: {
                                Email: email,
                                Password: bcryptjs_1["default"].hashSync(password, 10),
                                Name: name
                            }
                        })];
                case 1:
                    user = _b.sent();
                    payload = {
                        email: email
                    };
                    return [4 /*yield*/, (0, utils_1.generateJWT)({
                            secretKey: JWT_ACCESS_TOKEN_SECRET,
                            payload: payload,
                            signOption: {
                                expiresIn: ACCESS_TOKEN_EXPIRES_IN
                            }
                        })];
                case 2:
                    token = _b.sent();
                    return [2 /*return*/, __assign({ access_token: token }, payload)];
                case 3:
                    err_1 = _b.sent();
                    throw new utils_1.ErrorHandler("Server Error", utils_1.HTTP_STATUS_CODES.INTERNAL_SERVER);
                case 4: return [2 /*return*/];
            }
        });
    });
};
var doLogin = function (_a) {
    var email = _a.email, passedPassword = _a.passedPassword, actualPassword = _a.actualPassword;
    return __awaiter(void 0, void 0, void 0, function () {
        var isValidPass, payload, token;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    isValidPass = bcryptjs_1["default"].compareSync(passedPassword, actualPassword);
                    if (!isValidPass)
                        throw new utils_1.ErrorHandler("User with the specified email does not exists", utils_1.HTTP_STATUS_CODES.BAD_REQUEST);
                    payload = {
                        email: email
                    };
                    return [4 /*yield*/, (0, utils_1.generateJWT)({
                            secretKey: JWT_ACCESS_TOKEN_SECRET,
                            payload: payload,
                            signOption: {
                                expiresIn: ACCESS_TOKEN_EXPIRES_IN
                            }
                        })];
                case 1:
                    token = _b.sent();
                    return [2 /*return*/, __assign({ access_token: token }, payload)];
            }
        });
    });
};
var doCheckUserExist = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, utils_1.prisma.user.findUnique({
                    where: {
                        Email: email || "haithem"
                    }
                })];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user || null];
        }
    });
}); };
exports["default"] = { doCheckUserExist: doCheckUserExist, doLogin: doLogin, doRegister: doRegister };
//# sourceMappingURL=auth.service.js.map