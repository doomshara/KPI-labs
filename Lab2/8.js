'use strict';

const createUser = (name, city) => ({ name, city });

console.dir(createUser('Marcus Aurelius', 'Roma'));

module.exports = { createUser };