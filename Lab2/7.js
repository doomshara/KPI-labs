'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const a = { name: 'Marcus' };
  let b = { name: 'Marcus' };
  a.name = 'Julius'; // можна: міняємо поле, не посилання
  b.name = 'Julius';
  b = { name: 'Nero' }; // можна: це let
  // a = {...} дало б TypeError: це const
  console.dir({ a, b });
};

fn();

module.exports = { fn };