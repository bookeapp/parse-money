const TESTS = []

exports.test = (name, test) => {
  TESTS.push({ name, test })
}

exports.run = () => {
  let i = 0, toRun, next;

  const done = err => {
    TESTS.slice(i).map(skippedTest => {
      console.log('-', skippedTest.name)
    })
    console[err ? 'error' : 'log']('\nTests ' +
      (err ? 'failed!\n' + err.stack : 'succeeded!'))
  }

  ;(next = err => {
    if (toRun) {
      console[err ? 'error' : 'log'](err ? '✘' : '✔', toRun.name)
    }
    if (err || !(toRun = TESTS[i++])) {
      return done(err)
    }
    try {
      toRun.test.call(toRun.test, next)
    } catch (err) {
      next(err)
    }
  })();
};

exports.assert = (condition, message) => {
  if (!condition) throw new Error(message)
};

exports.same = (first, second, message) => {
  const keysA = Object.keys(first);
  const keysB = Object.keys(second);

  if (keysA.length !== keysB.length || keysA.some((key) => first[key] !== second[key])) {
    throw new Error([
      message,
      `result: ${JSON.stringify(first)}`,
      `expect: ${JSON.stringify(second)}`,
    ].join(`/n`))
  }
};