var uniqueRandomArray = require('unique-random-array');
var skiResorts = require('./ski-resorts.json');

module.exports = {
  all: skiResorts,
  random: uniqueRandomArray(skiResorts)
}
