'use strict';

const methods = (iface) => {
  const result = [];
  for (const key of Object.keys(iface)) {
    const value = iface[key];
    if (typeof value === 'function') result.push([key, value.length]);
  }
  return result;
};

module.exports = { methods };