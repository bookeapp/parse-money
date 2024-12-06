import { Money, Currency } from "./types";

export const Symbols: { [currency: string]: string[] } = {
  AED: ["د.إ", "DH", "AED"],
  AFN: ["؋", "AFN"],
  ALL: ["L", "ALL"],
  AMD: ["֏", "AMD"],
  ANG: ["Ƒ", "ANG"],
  AOA: ["KZ", "AOA"],
  ARS: ["AR$", "ARS"],
  AUD: ["A$", "AU$", "AUD"],
  AWG: ["AFL", "AWG"],
  AZN: ["₼", "AZN"],
  BAM: ["KM", "BAM"],
  BBD: ["BDS$", "BBD"],
  BDT: ["৳", "TAKA", "BDT"],
  BGN: ["ЛВ", "BGN"],
  BHD: ["ب.د", "BD", "BHD"],
  BIF: ["FBU", "BIF"],
  BMD: ["BD$", "BMD"],
  BND: ["BND"],
  BOB: ["BOB"],
  BRL: ["R$", "BRL"],
  BSD: ["B$", "BSD"],
  BTN: ["NU", "BTN"],
  BWP: ["P", "BWP"],
  BYN: ["BR", "BYN"],
  BZD: ["BZ$", "BZD"],
  CAD: ["C$", "CA$", "CAD"],
  CDF: ["FC", "CDF"],
  CHF: ["FR", "CHF"],
  CLP: ["CLP$", "CLP"],
  CNY: ["¥", "圓", "CNY"],
  COP: ["COL$", "COP"],
  CRC: ["₡", "CRC"],
  CUP: ["$MN", "CUP"],
  CVE: ["ESC", "CVE"],
  CZK: ["KČ", "CZK"],
  DJF: ["FDJ", "DJF"],
  DKK: ["DKK"],
  DOP: ["RD$", "DOP"],
  DZD: ["د.ج", "DA", "DZD"],
  EGP: ["E£", "EGP"],
  ERN: ["NFK", "ERN"],
  ETB: ["ETB"],
  EUR: ["€", "EURO", "EUR"],
  FJD: ["FJ$", "FJD"],
  FKP: ["FK£", "FKP"],
  GBP: ["£", "GBP"],
  GEL: ["₾", "GEL"],
  GGP: ["GGP"],
  GHS: ["GH₵", "GHS"],
  GIP: ["GIP"],
  GMD: ["D", "GMD"],
  GNF: ["FG", "GNF"],
  GTQ: ["Q", "GTQ"],
  GYD: ["GY$", "GYD"],
  HKD: ["HK$", "HKD"],
  HNL: ["HNL"],
  HUF: ["FT", "HUF"],
  IDR: ["IDR"],
  ILS: ["₪", "NIS", "ILS"],
  IMP: ["IMP"],
  INR: ["₹", "RS", "RP", "INR"],
  IQD: ["ع.د", "IQD"],
  IRR: ["﷼", "IRR"],
  ISK: ["ISK"],
  JEP: ["JEP"],
  JMD: ["J$", "JMD"],
  JOD: ["د.ا", "JD", "JOD"],
  JPY: ["円", "JPY"],
  KES: ["KSH", "KES"],
  KGS: ["СОМ", "KGS"],
  KHR: ["៛", "KHR"],
  KMF: ["CF", "KMF"],
  KPW: ["KPW"],
  KRW: ["₩", "KRW"],
  KWD: ["د.ك", "KD", "KWD"],
  KYD: ["CI$", "KYD"],
  KZT: ["₸", "KZT"],
  LAK: ["₭", "LAK"],
  LBP: ["ل.ل", "L£", "LBP"],
  LKR: ["LKR"],
  LRD: ["L$", "LRD"],
  LSL: ["LSL"],
  LYD: ["ل.د", "LYD"],
  MAD: ["د.م", "MAD"],
  MDL: ["MDL"],
  MGA: ["AR", "MGA"],
  MKD: ["ДЕН", "MKD"],
  MMK: ["K", "MMK"],
  MNT: ["₮", "MNT"],
  MOP: ["MOP$", "MOP"],
  MRU: ["UM", "MRU"],
  MUR: ["MUR"],
  MVR: ["RF", "MVR"],
  MWK: ["MK", "MWK"],
  MXN: ["MX$", "MXN"],
  MYR: ["RM", "MYR"],
  MZN: ["MT", "MZN"],
  NAD: ["N$", "NAD"],
  NGN: ["₦", "NGN"],
  NIO: ["NIO"],
  NOK: ["NOK"],
  NPR: ["NPR"],
  NZD: ["NZ$", "NZD"],
  OMR: ["ر.ع", "R.O", "OMR"],
  PEN: ["S/", "PEN"],
  PGK: ["PGK"],
  PHP: ["₱", "PHP"],
  PKR: ["PKR"],
  PLN: ["ZŁ", "PLN"],
  PYG: ["₲", "PYG"],
  QAR: ["ر.ق", "QR", "QAR"],
  RON: ["LEI", "RON"],
  RSD: ["ДИН", "RSD"],
  RUB: ["₽", "РУБ", "RUB"],
  RWF: ["FRW", "RWF"],
  SAR: ["ر.س", "SR", "SAR"],
  SBD: ["SI$", "SBD"],
  SCR: ["SCR"],
  SDG: ["ج.س", "SDG"],
  SEK: ["KR", "SEK"],
  SGD: ["S$", "SGD"],
  SHP: ["SHP"],
  SLL: ["LE", "SLL"],
  SOS: ["SOS"],
  SRD: ["SR$", "SRD"],
  SSP: ["SSP"],
  STN: ["DB", "STN"],
  SYP: ["£S", "SYP"],
  SZL: ["SZL"],
  THB: ["฿", "THB"],
  TJS: ["SM", "TJS"],
  TMT: ["M", "TMT"],
  TND: ["د.ت", "DT", "TND"],
  TOP: ["T$", "TOP"],
  TRY: ["₺", "TRY"],
  TTD: ["TT$", "TTD"],
  TWD: ["NT$", "TWD"],
  TZS: ["SH", "TZS"],
  UAH: ["₴", "UAH"],
  UGX: ["USH", "UGX"],
  USD: ["$", "US$", "US DOLLARS", "USD"],
  UYU: ["$U", "UYU"],
  UZS: ["СУМ", "UZS"],
  VES: ["BS", "VES"],
  VND: ["₫", "VND"],
  VUV: ["VT", "VUV"],
  WST: ["WS$", "WST"],
  XAF: ["FCFA", "XAF"],
  XCD: ["EC$", "XCD"],
  XOF: ["CFA", "XOF"],
  XPF: ["₣", "XPF"],
  YER: ["YRL", "YRLS", "YER"],
  ZAR: ["R", "ZAR"],
  ZMW: ["ZK", "ZMW"],
  ZWG: ["ZIG", "ZWG"]
};

const escapeStringRegExp = (string: string) => {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	// Escape characters with special meaning either inside or outside character sets.
	// Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
	return string
		.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
		.replace(/-/g, '\\x2d');
};

const parseMoney = (text: string) => {
  let output: Money | null = null;

  // scan for currency
  let currenciesFound: { currency: Currency; index: number, match: string }[] = [];
  (Object.keys(Symbols) as Currency[]).forEach((currency) => {
    Symbols[currency].find((symbol) => {
      const matchFound = text.match(new RegExp(`${escapeStringRegExp(symbol)}\\.?`, "i"));
      if (matchFound) {
        // found symbol
        currenciesFound.push({ currency, index: matchFound.index || 0, match: matchFound[0] });
      }
    });
  });

  let index = 0;
  let currency: Currency | null = null;
  if (currenciesFound.length >= 1) {
    currenciesFound = currenciesFound.sort((a, b) => {
      return b.match.length - a.match.length;
    });
    currency = currenciesFound[0].currency;
    index = currenciesFound[0].index;
  }

  //search numbers near the currency
  const start = Math.max(0, index - 40);
  const end = index + 40;
  let slice = text.substr(start, end);

  //remove text
  slice = slice.replace(/[^\d|^\.|^,|^-]/g, "");
  slice = slice.replace(/(?!^)-/g, "");
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
    if (second.length === 3 && currency !== Symbols.KWD[Symbols.KWD.length - 1]) {
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
