'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

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