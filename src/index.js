var uniqueRandomArray = require('unique-random-array');
var skiResorts = require('./ski-resorts.json');
var getRandomItem = uniqueRandomArray(skiResorts);

module.exports = {
  all: skiResorts,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 1; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
