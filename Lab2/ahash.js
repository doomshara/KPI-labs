'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Julius Caesar': '+380445556677',
  'Nero': '+380445558899',
};

const findPhoneByName = (name) => phonebook[name];

console.dir(findPhoneByName('Nero'));

module.exports = { phonebook, findPhoneByName };