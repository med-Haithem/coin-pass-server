import { User } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import config from "../../config";
const { ACCESS_TOKEN_EXPIRES_IN, JWT_ACCESS_TOKEN_SECRET } = config;

import {
  ErrorHandler,
  prisma,
  HTTP_STATUS_CODES,
  generateJWT,
} from "../../utils";

const doRegister = async ({ email, password, name }: any) => {
  try {
    const user = await prisma.user.create({
      data: {
        Email: email,
        Password: bcrypt.hashSync(password, 10),
        Name: name,
      },
    });
    // generate access token
    const payload = {
      email,
      name,
    };
    const token = await generateJWT({
      secretKey: JWT_ACCESS_TOKEN_SECRET,
      payload,
      signOption: {
        expiresIn: ACCESS_TOKEN_EXPIRES_IN,
      },
    });
    return {
      access_token: token,
      ...payload,
    };
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

const doLogin = async ({
  email,
  passedPassword,
  actualPassword,
  name,
}: any) => {
  const isValidPass = bcrypt.compareSync(passedPassword, actualPassword);
  if (!isValidPass)
    throw new ErrorHandler(
      "User with the specified email does not exist",
      HTTP_STATUS_CODES.BAD_REQUEST
    );

  // generate access token
  const payload = {
    email,
    name
  };

  const token = await generateJWT({
    secretKey: JWT_ACCESS_TOKEN_SECRET,
    payload,
    signOption: {
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    },
  });

  return {
    access_token: token,
    ...payload,
  };
};

const doCheckUserExist = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      Email: email,
    },
  });
  return user || null;
};

export default { doCheckUserExist, doLogin, doRegister };
