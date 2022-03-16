"use strict";
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
var auth_service_1 = __importDefault(require("./auth.service"));
var utils_1 = require("../../utils");
var doCheckUserExist = auth_service_1["default"].doCheckUserExist, doLogin = auth_service_1["default"].doLogin, doRegister = auth_service_1["default"].doRegister;
var login = function (httpRequest) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, userData, loginData, loginResult, err_1, errHandler;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = httpRequest.body, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, doCheckUserExist(email)];
            case 2:
                userData = _b.sent();
                if (!userData) {
                    throw new utils_1.ErrorHandler("User does not exist!", utils_1.HTTP_STATUS_CODES.BAD_REQUEST);
                }
                loginData = {
                    email: email,
                    passedPassword: password,
                    actualPassword: userData === null || userData === void 0 ? void 0 : userData.Password
                };
                return [4 /*yield*/, doLogin(loginData)];
            case 3:
                loginResult = _b.sent();
                return [2 /*return*/, {
                        status: utils_1.HTTP_STATUS_CODES.OK,
                        body: {
                            success: true,
                            message: "Successfully logged in!",
                            data: loginResult
                        }
                    }];
            case 4:
                err_1 = _b.sent();
                errHandler = new utils_1.ErrorHandler("User already exist!", utils_1.HTTP_STATUS_CODES.BAD_REQUEST);
                console.log(errHandler instanceof utils_1.ErrorHandler);
                throw new utils_1.ErrorHandler("User does not  exist!", utils_1.HTTP_STATUS_CODES.BAD_REQUEST);
            case 5: return [2 /*return*/];
        }
    });
}); };
var register = function (httpRequest) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, registerResult, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = httpRequest.body, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, doCheckUserExist(email)];
            case 2:
                user = _b.sent();
                if (user) {
                    throw new utils_1.ErrorHandler("User already exist!", utils_1.HTTP_STATUS_CODES.BAD_REQUEST);
                }
                return [4 /*yield*/, doRegister({ email: email, password: password })];
            case 3:
                registerResult = _b.sent();
                return [2 /*return*/, {
                        status: utils_1.HTTP_STATUS_CODES.OK,
                        body: {
                            success: true,
                            message: "Registered successfully!",
                            data: registerResult
                        }
                    }];
            case 4:
                err_2 = _b.sent();
                throw new utils_1.ErrorHandler("User already exist!", utils_1.HTTP_STATUS_CODES.BAD_REQUEST);
            case 5: return [2 /*return*/];
        }
    });
}); };
var userInfo = function (httpRequest) { return __awaiter(void 0, void 0, void 0, function () {
    var email, user, Email, Name, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = httpRequest.user.email;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, doCheckUserExist(email)];
            case 2:
                user = _a.sent();
                if (!user) {
                    throw new utils_1.ErrorHandler("User doesn't exist", utils_1.HTTP_STATUS_CODES.BAD_REQUEST);
                }
                Email = user.Email, Name = user.Name;
                return [2 /*return*/, {
                        status: utils_1.HTTP_STATUS_CODES.OK,
                        body: {
                            success: true,
                            user: { Email: Email, Name: Name }
                        }
                    }];
            case 3:
                err_3 = _a.sent();
                throw new utils_1.ErrorHandler("User already exist!", utils_1.HTTP_STATUS_CODES.BAD_REQUEST);
            case 4: return [2 /*return*/];
        }
    });
}); };
exports["default"] = { login: login, register: register, userInfo: userInfo };
//# sourceMappingURL=auth.controller.js.map