import { Request, Response } from "express";
import url from "url";
import currencyConverterService from "./currency-converter.service";
import { ErrorHandler, HTTP_STATUS_CODES } from "../../utils";

const { convertCurrency } = currencyConverterService;

const getConvertedCurrency = async (httpRequest: Request) => {
  const { from, to, amount } = httpRequest.body;
  if (!from || !to || amount == null) {
    throw new ErrorHandler(
      "please verify the request",
      HTTP_STATUS_CODES.BAD_REQUEST
    );
  }

  try {
    const data = await convertCurrency(from, to, amount);
    return {
      status: HTTP_STATUS_CODES.OK,
      body: {
        ...data,
      },
    };
  } catch (err) {
    throw new ErrorHandler(
      "Error occured",
      HTTP_STATUS_CODES.BAD_REQUEST
    );
  }
};

export default { getConvertedCurrency };
