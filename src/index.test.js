var expect = require('chai').expect;
var skiResorts = require('./index');

describe('ski-resorts', function(){
  describe('all', function(){
    it('should be an array of strings', function(){
      expect(skiResorts.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item){
          return typeof item === 'string';
        });
      }
    });

    it('should contain Mount Baker Ski Area', function(){
      expect(skiResorts.all).to.include('Mount Baker Ski Area');
    });
  });

  describe('random', function() {
    it('should return a random item from the skiResorts.all', function() {
      var randomItem = skiResorts.random();
      expect(skiResorts.all).to.include(randomItem);
    });
  });
});
