import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import authService from "./auth.service";
import { ErrorHandler, HTTP_STATUS_CODES } from "../../utils";

const { doCheckUserExist, doLogin, doRegister } = authService;

const login = async (httpRequest: Request) => {
  const { email, password } = httpRequest.body;
  try {
    const userData = await doCheckUserExist(email);
    if (!userData) {
      throw new ErrorHandler(
        "User does not exist!",
        HTTP_STATUS_CODES.BAD_REQUEST
      );
    }
    const loginData = {
      email,
      passedPassword: password,
      actualPassword: userData?.Password,
    };
    const loginResult = await doLogin(loginData);

    return {
      status: HTTP_STATUS_CODES.OK,
      body: {
        success: true,
        message: "Successfully logged in!",
        data: loginResult,
      },
    };
  } catch (err) {
    const errHandler = new ErrorHandler(
      "User already exist!",
      HTTP_STATUS_CODES.BAD_REQUEST
    );

    console.log(errHandler instanceof ErrorHandler);

    throw new ErrorHandler(
      "User does not  exist!",
      HTTP_STATUS_CODES.BAD_REQUEST
    );
  }
};

const register = async (httpRequest: Request) => {
  const { email, password, name } = httpRequest.body;
  try {
    const user = await doCheckUserExist(email);
    if (user) {
      throw new ErrorHandler(
        "User already exist!",
        HTTP_STATUS_CODES.BAD_REQUEST
      );
    }
    const registerResult = await doRegister({ email, password, name });
    return {
      status: HTTP_STATUS_CODES.OK,
      body: {
        success: true,
        message: "Registered successfully!",
        data: registerResult,
      },
    };
  } catch (err) {
    throw new ErrorHandler(
      "User already exist!",
      HTTP_STATUS_CODES.BAD_REQUEST
    );
  }
};

const userInfo = async (httpRequest: any) => {
  const { email } = httpRequest.user;

  try {
    const user = await doCheckUserExist(email);
    if (!user) {
      throw new ErrorHandler(
        "User doesn't exist",
        HTTP_STATUS_CODES.BAD_REQUEST
      );
    }
    const { Email, Name } = user;
    return {
      status: HTTP_STATUS_CODES.OK,
      body: {
        success: true,
        user: { Email, Name },
      },
    };
  } catch (err) {
    throw new ErrorHandler(
      "User already exist!",
      HTTP_STATUS_CODES.BAD_REQUEST
    );
  }
};

export default { login, register, userInfo };
