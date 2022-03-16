import axios from "axios";
import config from "../../config";
import { ErrorHandler, HTTP_STATUS_CODES } from "../../utils";
import { ConverterResponse } from "./definitions";

const { CURRENCY_CONVERTER_BASE_API, FIXER_API_ACCESS } = config;

const convertCurrency = async (from: string, to: string, amount: number) => {
    console.log("CURRENCY_CONVERTER_BASE_API",CURRENCY_CONVERTER_BASE_API, from , to , amount)
  try {
    const result = await axios.get(
      CURRENCY_CONVERTER_BASE_API +
        "latest" +
        "?access_key=" +
        FIXER_API_ACCESS +
        "&base=" +
        from +
        "&symbols=" +
        `${from},${to}`
    );
    const { rates, success, date }: ConverterResponse = result.data;
    const convertedAmount = rates[to] * amount;
    return {
      success,
      convertedAmount: convertedAmount,
      date,
    };
  } catch (err) {
    console.log("err",err)
    throw new ErrorHandler(
      "Problem has occured",
      HTTP_STATUS_CODES.INTERNAL_SERVER
    );
  }
};

export default { convertCurrency };
