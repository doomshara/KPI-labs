'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Julius Caesar', phone: '+380445556677' },
  { name: 'Nero', phone: '+380445558899' },
];

const findPhoneByName = (name) => {
  for (const rec of phonebook) {
    if (rec.name === name) return rec.phone;
  }
};

console.dir(findPhoneByName('Nero'));

module.exports = { phonebook, findPhoneByName };