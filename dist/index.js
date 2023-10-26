"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symbols = void 0;
exports.symbols = {
    AUD: ["A$", "AU$", "AUD"],
    BDT: ["৳", "TAKA", "BDT"],
    BGN: ["ЛВ", "BGN"],
    BRL: ["R$", "BRL"],
    CAD: ["C$", "CA$", "CAD"],
    CHF: ["FR.", "CHF"],
    CLP: ["CLP"],
    CNY: ["¥", "圓", "CNY"],
    CZK: ["KČ", "CZK"],
    DKK: ["DKK"],
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
    ISK: ["ISK"],
    JMD: ["J$", "JMD"],
    JOD: ["JD", "JOD"],
    JPY: ["円", "JPY"],
    KES: ["KSH", "KES"],
    KHR: ["៛", "KHR"],
    KRW: ["₩", "KRW"],
    KWD: ["KD", "K.D", "KWD"],
    LAK: ["₭", "LAK"],
    LBP: ["ل.ل", "L£", "LBP"],
    LKR: ["LKR"],
    MAD: ["د.م.", "MAD"],
    MDL: ["L", "MDL"],
    MKD: ["ДЕН", "MKD"],
    MMK: ["K", "MMK"],
    MOP: ["MOP$", "MOP"],
    MUR: ["MUR"],
    MVR: ["RF", "MVR"],
    MWK: ["MK", "MWK"],
    MXN: ["MX$", "MEX$", "MXN"],
    MYR: ["RM", "MYR"],
    NAD: ["N$", "NAD"],
    NGN: ["₦", "NGN"],
    NOK: ["NOK"],
    NPR: ["NPR"],
    NZD: ["NZ$", "NZD"],
    OMR: ["ر.ع.", "OMR"],
    PAB: ["B/", "PAB"],
    PEN: ["S/", "PEN"],
    PGK: ["PGK"],
    PHP: ["₱", "PHP"],
    PKR: ["PKR"],
    PLN: ["ZŁ", "PLN"],
    PYG: ["₲", "PYG"],
    QAR: ["ر.ق", "QAR"],
    RON: ["LEI", "RON"],
    RSD: ["ДИН.", "RSD"],
    RUB: ["₽", "РУБ", "RUB"],
    SAR: ["ر.س", "SAR"],
    SCR: ["SCR"],
    SEK: ["SEK"],
    SGD: ["S$", "SGD"],
    SLL: ["LE", "SLL"],
    SOS: ["SOS"],
    SSP: ["SSP"],
    STN: ["DB", "STN"],
    SYP: ["SYP"],
    SZL: ["SZL"],
    THB: ["฿", "THB"],
    TJS: ["SM", "TJS"],
    TMT: ["T", "TMT"],
    TND: ["د.ت", "TND"],
    TOP: ["T$", "TOP"],
    TRY: ["₺", "TRY"],
    TTD: ["TT$", "TTD"],
    TWD: ["NT$", "TWD"],
    TZS: ["TZS"],
    UAH: ["₴", "UAH"],
    UGX: ["UGX"],
    USD: ["$", "US$", "US DOLLARS", "USD"],
    UYU: ["UYU"],
    UZS: ["UZS"],
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
    ZWL: ["ZWL"],
};
var KWD = "KWD";
var escapeStringRegExp = function (string) {
    if (typeof string !== 'string') {
        throw new TypeError('Expected a string');
    }
    return string
        .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        .replace(/-/g, '\\x2d');
};
var parseMoney = function (text) {
    var output = null;
    var currenciesFound = [];
    Object.keys(exports.symbols).forEach(function (currency) {
        exports.symbols[currency].find(function (symbol) {
            var matchFound = text.match(new RegExp("".concat(escapeStringRegExp(symbol), "\\.?"), "i"));
            if (matchFound) {
                currenciesFound.push({ currency: currency, index: matchFound.index || 0, match: matchFound[0] });
            }
        });
    });
    var index = 0;
    var currency = null;
    if (currenciesFound.length >= 1) {
        currenciesFound = currenciesFound.sort(function (a, b) {
            return b.match.length - a.match.length;
        });
        currency = currenciesFound[0].currency;
        index = currenciesFound[0].index;
    }
    var start = Math.max(0, index - 40);
    var end = index + 40;
    var slice = text.substr(start, end);
    slice = slice.replace(/[^\d|^\.|^,|^-]/g, "");
    slice = slice.replace(/(?!^)-/g, "");
    slice = slice.replace(/(,|\.)*$/, "");
    while (slice.charAt(0) === "." || slice.charAt(0) === ",") {
        slice = slice.substr(1);
    }
    if (!slice.length)
        return null;
    var dotCount = slice.split(".").length - 1;
    var commaCount = slice.split(",").length - 1;
    var amount = 0;
    if (dotCount === 0 && commaCount === 0) {
    }
    else if (commaCount > 1 && dotCount <= 1) {
        slice = slice.split(",").join("");
    }
    else if (dotCount > 1 && commaCount <= 1) {
        slice = slice.split(".").join("");
        slice = slice.split(",").join(".");
    }
    else if (dotCount > 0 && commaCount > 0) {
        if (slice.indexOf(".") > slice.indexOf(",")) {
            slice = slice.split(",").join("");
        }
        else {
            slice = slice.split(".").join("");
            slice = slice.split(",").join(".");
        }
    }
    else if (dotCount === 1 && commaCount === 0) {
        var segments = slice.split(".");
        var second = segments[1];
        if (second.length === 3 && currency !== KWD) {
            slice = slice.replace(".", "");
        }
        else {
        }
    }
    else {
        var segments = slice.split(",");
        var second = segments[1];
        if (second.length === 3) {
            slice = slice.replace(",", "");
        }
        else {
            slice = slice.replace(",", ".");
        }
    }
    amount = parseFloat(slice);
    output = {
        amount: amount,
        currency: currency,
    };
    return output;
};
exports.default = parseMoney;
