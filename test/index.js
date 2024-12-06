const { test, run, same } = require("../utils/test-runner");
const { default: parseMoney } = require("../dist/index.js");

test("Main", (done) => {
  same(parseMoney("€1.234,56"), {
    amount: 1234.56,
    currency: "EUR",
  });
  same(parseMoney("US$ 1.234,56"), {
    amount: 1234.56,
    currency: "USD",
  });
  same(parseMoney("$1.234,56"), {
    amount: 1234.56,
    currency: "USD",
  });
  same(parseMoney("1.234,56 US dollars"), {
    amount: 1234.56,
    currency: "USD",
  });
  same(parseMoney("£1,234.56"), {
    amount: 1234.56,
    currency: "GBP",
  });
  same(parseMoney("R$1.234,56"), {
    amount: 1234.56,
    currency: "BRL",
  });
  same(parseMoney("1 234,56 руб"), {
    amount: 1234.56,
    currency: "RUB",
  });
  same(parseMoney("1,234.56 ₪"), {
    amount: 1234.56,
    currency: "ILS",
  });
  same(parseMoney("123,456.78 lei"), {
    amount: 123456.78,
    currency: "RON",
  });
  same(parseMoney("lei123,45"), {
    amount: 123.45,
    currency: "RON",
  });
  same(parseMoney("some text before 123,45 lei and some text after"), {
    amount: 123.45,
    currency: "RON",
  });
  same(parseMoney("valoare de 495,61 Lei. Pentru mai multe informaţii vă rugă"), {
    amount: 495.61,
    currency: "RON",
  });
  same(parseMoney("valoare de 495,61 Lei. Ok, pentru mai multe informaţii..."),  {
    amount: 495.61,
    currency: "RON",
  });
  same(parseMoney("Test. Altceva, in valoare de 495,61 Lei. Ok, pentru mai multe informaţii..."), {
    amount: 495.61,
    currency: "RON",
  });
  done();
});

test("RON", (done) => {
  same(parseMoney("lei100"), {
    amount: 100,
    currency: "RON",
  });
  same(parseMoney("RON100"), {
    amount: 100,
    currency: "RON",
  });
  same(parseMoney("1004 lei noi"), {
    amount: 1004,
    currency: "RON",
  });
  same(parseMoney("lei 1,004"), {
    amount: 1004,
    currency: "RON",
  });
  same(parseMoney("1.004RON"), {
    amount: 1004,
    currency: "RON",
  });
  same(parseMoney("1,004.25 RON"), {
    amount: 1004.25,
    currency: "RON",
  });
  same(parseMoney("lei 1.004,25"), {
    amount: 1004.25,
    currency: "RON",
  });
  same(parseMoney("1.009.004,25 lei"), {
    amount: 1009004.25,
    currency: "RON",
  });
  same(parseMoney("1,009,004.25 lei"), {
    amount: 1009004.25,
    currency: "RON",
  });
  same(parseMoney("215,25 lei"), {
    amount: 215.25,
    currency: "RON",
  });
  same(parseMoney("215,256 lei"), {
    amount: 215256,
    currency: "RON",
  });
  same(parseMoney("215,2 lei"), {
    amount: 215.2,
    currency: "RON",
  });
  same(parseMoney("215, lei"), {
    amount: 215,
    currency: "RON",
  });
  same(parseMoney("109.25 lei"), {
    amount: 109.25,
    currency: "RON",
  });
  same(parseMoney("109.256 lei"), {
    amount: 109256,
    currency: "RON",
  });
  same(parseMoney("109.256.256 lei"), {
    amount: 109256256,
    currency: "RON",
  });
  same(parseMoney("109.256,25 lei"), {
    amount: 109256.25,
    currency: "RON",
  });
  same(parseMoney("109.2 lei"), {
    amount: 109.2,
    currency: "RON",
  });
  same(parseMoney("215. lei"), {
    amount: 215,
    currency: "RON",
  });
  done();
});

test("KWD", (done) => {
  same(parseMoney("100KD"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100 KD"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100K.D"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100K·D"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100 K.D"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100 K·D"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100.00KD"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100.00 KD"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100.00K.D"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100.00K·D"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100.00 K.D"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100.00 K·D"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100.000KD"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100.000 KD"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100.000K.D"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100.000K·D"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100.000 K.D"), {
    amount: 100,
    currency: "KWD",
  });
  same(parseMoney("100.000 K·D"), {
    amount: 100,
    currency: "KWD",
  });
  done();
});

test("USD", (done) => {
  same(parseMoney("100"), {
    amount: 100,
    currency: null,
  });
  same(parseMoney("$100"), {
    amount: 100,
    currency: "USD",
  });
  same(parseMoney("1004$"), {
    amount: 1004,
    currency: "USD",
  });
  same(parseMoney("$1,004"), {
    amount: 1004,
    currency: "USD",
  });
  same(parseMoney("$1.004"), {
    amount: 1004,
    currency: "USD",
  });
  same(parseMoney("$1,004.25"), {
    amount: 1004.25,
    currency: "USD",
  });
  same(parseMoney("$1.004,25"), {
    amount: 1004.25,
    currency: "USD",
  });
  same(parseMoney("$1.009.004,25"), {
    amount: 1009004.25,
    currency: "USD",
  });
  same(parseMoney("$1,009,004.25"), {
    amount: 1009004.25,
    currency: "USD",
  });
  same(parseMoney("$109.25"), {
    amount: 109.25,
    currency: "USD",
  });
  same(parseMoney("$215,25"), {
    amount: 215.25,
    currency: "USD",
  });
  same(parseMoney("$215,2"), {
    amount: 215.2,
    currency: "USD",
  });
  done();
});

test("Multiple", (done) => {
  same(parseMoney("lei100 text and here is another one a bit later $500"), {
    amount: 100,
    currency: "RON",
  });
  /** Has to be fixed */
  same(parseMoney("lei100 and $500"), {
    amount: 100500,
    currency: "RON",
  });
  done();
});

run();
