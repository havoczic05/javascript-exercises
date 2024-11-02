const removeFromArray = function(array, ...args) {
  return array.filter(function (val) {
    return !args.includes(val);
  })
};

// Do not edit below this line
module.exports = removeFromArray;
