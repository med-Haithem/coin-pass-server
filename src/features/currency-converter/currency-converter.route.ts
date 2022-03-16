import currencyConverterController from "./currency-converter.controller";
import express from "express";
import {
  authGuard,
  expressCallback,
  validatorCallback,
} from "../../middlewares";

const currencyConverterRouter = express.Router();

currencyConverterRouter.post(
  "/convert",
  authGuard,
  expressCallback(currencyConverterController.getConvertedCurrency)
);

export default currencyConverterRouter;
