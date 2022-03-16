import axios from "axios";
import config from "../../config";
import { ErrorHandler, HTTP_STATUS_CODES } from "../../utils";
import { ConverterResponse } from "./definitions";

const { CURRENCY_CONVERTER_BASE_API, FIXER_API_ACCESS } = config;

const convertCurrency = async (from: string, to: string, amount: number) => {
  try {
    const result = await axios.get(
      CURRENCY_CONVERTER_BASE_API +
        "latest" +
        "?access_key=" +
        FIXER_API_ACCESS +
        "&symbols=" +
        `${from},${to}`
    );
    // Free Api = base Currency = EUR
    const { rates, success, date }: ConverterResponse = result.data;
    let convertedAmount = amount;
    if (from === "EUR") {
      convertedAmount = rates[to] * convertedAmount;
    } else {
      //need to reverse to since the api is limited to have only the base of EUR
      convertedAmount = (1 / rates[from]) * convertedAmount;
    }
    return {
      success,
      convertedAmount: convertedAmount,
      date,
    };
  } catch (err) {
    throw new ErrorHandler(
      "Problem has occured",
      HTTP_STATUS_CODES.INTERNAL_SERVER
    );
  }
};

export default { convertCurrency };
