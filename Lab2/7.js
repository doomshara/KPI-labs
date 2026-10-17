'use strict';

const fn = () => {
  const a = { name: 'Marcus' };
  let b = { name: 'Marcus' };
  a.name = 'Julius'; 
  b.name = 'Julius';
  b = { name: 'Nero' };
  console.dir({ a, b });
};

fn();

module.exports = { fn };