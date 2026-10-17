'use strict';

const array = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  7.5, 'ok', 0, NaN, 42n, null, undefined, Symbol('x'),
  {}, [1, 2], () => 1, new Date(),
];

const counts = {
  number: 0,
  string: 0,
  boolean: 0,
  bigint: 0,
  symbol: 0,
  undefined: 0,
  object: 0,
  function: 0,
};

for (const value of array) {
  counts[typeof value]++;
}

console.dir(counts);