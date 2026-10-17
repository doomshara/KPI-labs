'use strict';

const array = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  7.5, 'ok', 0, NaN, 42n, null, undefined, Symbol('x'),
  {}, [1, 2], () => 1, new Date(),
];

const counts = {};

for (const value of array) {
  const key = typeof value;
  counts[key] = (counts[key] || 0) + 1;
}

console.dir(counts);