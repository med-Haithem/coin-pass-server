import { Response, NextFunction } from "express";
import authService from "../features/auth/auth.service";
import { ErrorHandler, HTTP_STATUS_CODES, verifyJWT } from "../utils";

export const authGuard = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  let token = req.header("Authorization") || req.header("authorization");

  if (!token) {
    throw new ErrorHandler("Unathorized", HTTP_STATUS_CODES.UNOOTHORIZD);
  }

  token = req?.headers?.authorization?.replace("Bearer ", "");

  const payload = await verifyJWT(token);
  req.user = payload;
  // check if user is not blocked and exist
  await authService.doCheckUserExist(req.user.email);
  return next();
};
