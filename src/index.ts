import { Money, Currency } from "./types";

export const symbols: {
  [currency: string]: string[];
} = {
  AUD: ["A$", "AU$", "AUD"],
  BDT: ["৳", "TAKA", "BDT"],
  BGN: ["ЛВ", "BGN"],
  BRL: ["R$", "BRL"],
  CAD: ["C$", "CA$", "CAD"],
  CHF: ["FR.", "CHF"],
  CLP: ["$", "CLP"],
  CNY: ["¥", "CNY"],
  CZK: ["KČ", "CZK"],
  DKK: ["KR.", "DKK"],
  EUR: ["€", "EURO", "EUR"],
  FJD: ["FJ$", "FJD"],
  GBP: ["£", "GBP"],
  GEL: ["₾", "GEL"],
  GHS: ["GH₵", "GHS"],
  GMD: ["D", "GMD"],
  GTQ: ["Q", "GTQ"],
  GYD: ["GY$", "GYD"],
  HKD: ["HK$", "HKD"],
  HRK: ["KN", "HRK"],
  HTG: ["G", "HTG"],
  HUF: ["FT", "HUF"],
  ILS: ["₪", "ILS"],
  INR: ["₹", "RS", "RP", "INR"],
  ISK: ["KR", "ISK"],
  JMD: ["J$", "JMD"],
  JOD: ["JD", "JOD"],
  JPY: ["¥", "円", "JPY"],
  KES: ["KSH", "KES"],
  KHR: ["៛", "KHR"],
  KRW: ["₩", "KRW"],
  KWD: ["KD", "KWD"],
  LAK: ["₭", "LAK"],
  LBP: ["ل.ل", "L£", "LBP"],
  LKR: ["₨", "LKR"],
  MAD: ["د.م.", "MAD"],
  MDL: ["L", "MDL"],
  MKD: ["ДЕН", "MKD"],
  MMK: ["K", "MMK"],
  MOP: ["MOP$", "MOP"],
  MUR: ["₨", "MUR"],
  MVR: ["RF", "MVR"],
  MWK: ["MK", "MWK"],
  MXN: ["MX$", "MEX$", "MXN"],
  MYR: ["RM", "MYR"],
  NAD: ["N$", "NAD"],
  NGN: ["₦", "NGN"],
  NOK: ["KR", "NOK"],
  NPR: ["₨", "NPR"],
  NZD: ["NZ$", "NZD"],
  OMR: ["ر.ع.", "OMR"],
  PAB: ["B/", "PAB"],
  PEN: ["S/", "PEN"],
  PGK: ["K", "PGK"],
  PHP: ["₱", "PHP"],
  PKR: ["₨", "PKR"],
  PLN: ["ZŁ", "PLN"],
  PYG: ["₲", "PYG"],
  QAR: ["ر.ق", "QAR"],
  RON: ["LEI", "RON"],
  RSD: ["ДИН.", "RSD"],
  RUB: ["₽", "РУБ", "RUB"],
  SAR: ["ر.س", "SAR"],
  SCR: ["₨", "SCR"],
  SEK: ["KR", "SEK"],
  SGD: ["S$", "SGD"],
  SLL: ["LE", "SLL"],
  SOS: ["SH", "SOS"],
  SSP: ["£", "SSP"],
  STN: ["DB", "STN"],
  SYP: ["£", "SYP"],
  SZL: ["L", "SZL"],
  THB: ["฿", "THB"],
  TJS: ["SM", "TJS"],
  TMT: ["T", "TMT"],
  TND: ["د.ت", "TND"],
  TOP: ["T$", "TOP"],
  TRY: ["₺", "TRY"],
  TTD: ["TT$", "TTD"],
  TWD: ["NT$", "TWD"],
  TZS: ["SH", "TZS"],
  UAH: ["₴", "UAH"],
  UGX: ["SH", "UGX"],
  USD: ["$", "US$", "US DOLLARS", "USD"],
  UYU: ["$", "UYU"],
  UZS: ["ЛВ", "UZS"],
  VEF: ["BS", "VEF"],
  VND: ["₫", "VND"],
  VUV: ["VT", "VUV"],
  WST: ["WS$", "WST"],
  XAF: ["FCFA", "XAF"],
  XCD: ["EC$", "XCD"],
  XOF: ["CFA", "XOF"],
  YER: ["﷼", "YER"],
  ZAR: ["R", "ZAR"],
  ZMW: ["ZK", "ZMW"],
  ZWL: ["$", "ZWL"],
};

const parseMoney = (text: string) => {
  let output: Money | null = null;

  //scan for currency
  const currenciesFound: { currency: Currency; index: number }[] = [];
  (Object.keys(symbols) as Currency[]).forEach((currency) => {
    symbols[currency].find((symbol) => {
      const matchFound = !!text.match(new RegExp(`${symbol}\.?`, "i"));
      if (matchFound) {
        //found symbol
        currenciesFound.push({ currency, index });
      }
    });
  });

  let index = 0;
  let currency: Currency | null = null;
  if (currenciesFound.length >= 1) {
    currency = currenciesFound[0].currency;
    index = currenciesFound[0].index;
  }

  //search numbers near the currency
  const start = Math.max(0, index - 40);
  const end = index + 40;
  let slice = text.substr(start, end);

  //remove text
  slice = slice.replace(/[^\d|^\.|^,]/g, "");
  //remove any trailing dots and commas
  slice = slice.replace(/(,|\.)*$/, "");
  //remove any dot and comma from the front
  while (slice.charAt(0) === "." || slice.charAt(0) === ",") {
    slice = slice.substr(1);
  }

  if (!slice.length) return null;

  let dotCount = slice.split(".").length - 1;
  let commaCount = slice.split(",").length - 1;

  let amount = 0;
  if (dotCount === 0 && commaCount === 0) {
    //integer
  } else if (commaCount > 1 && dotCount <= 1) {
    //comma are delimiters
    //dot is decimal separator
    slice = slice.split(",").join("");
  } else if (dotCount > 1 && commaCount <= 1) {
    //comma are delimiters
    //dot is decimal separator
    slice = slice.split(".").join("");
    slice = slice.split(",").join(".");
  } else if (dotCount > 0 && commaCount > 0) {
    //check position
    if (slice.indexOf(".") > slice.indexOf(",")) {
      //215,254.23
      slice = slice.split(",").join("");
    } else {
      //215.2123,23
      slice = slice.split(".").join("");
      slice = slice.split(",").join(".");
    }
  } else if (dotCount === 1 && commaCount === 0) {
    //check groups
    //215.21 is 215.21
    //215.212 is 215222
    //215.1 is 215.1
    const segments = slice.split(".");
    const second = segments[1];
    if (second.length === 3) {
      //group separator
      slice = slice.replace(".", "");
    } else {
      //decimal separator
    }
  } else {
    // (commaCount === 1 && dotCount === 0)

    //check groups
    //215,21 is 215.21
    //215,212 is 215222
    //215,1 is 215.1
    const segments = slice.split(",");
    const second = segments[1];
    if (second.length === 3) {
      //group separator
      slice = slice.replace(",", "");
    } else {
      //decimal separator
      slice = slice.replace(",", ".");
    }
  }

  amount = parseFloat(slice);

  output = {
    amount,
    currency,
  };

  return output;
};

export default parseMoney;
