export type Money = {
  amount: number;
  currency: Currency | null;
};

export type Currency = 
    "AUD" | "AED" | "ARS" | "BDT" | "BGN" | "BRL" | "CAD" | "CHF" | "CLP" | "CNY" 
  | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "FJD" | "GBP" | "GEL" | "GHS" | "GMD"
  | "GTQ" | "GYD" | "HKD" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "ISK"
  | "JMD" | "JOD" | "JPY" | "KES" | "KHR" | "KRW" | "KWD" | "LAK" | "LBP" | "LKR"
  | "MAD" | "MDL" | "MKD" | "MMK" | "MOP" | "MUR" | "MVR" | "MWK" | "MXN" | "MYR"
  | "NAD" | "NGN" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP"
  | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "SAR" | "SCR" | "SEK"
  | "SGD" | "SLL" | "SOS" | "SSP" | "STN" | "SYP" | "SZL" | "THB" | "TJS" | "TMT"
  | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "UYU"
  | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XOF" | "YER" | "ZAR"
  | "ZMW" | "ZWL";
