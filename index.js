module.exports = function closeStringSpace(string) {
  if (typeof string !== 'string')
    throw new TypeError('closeStringSpace wants a string!');
  return string.replace(/\s/g, '');
};
