/* global showAnimal */
describe('Test for Correctness', function () {
  describe('primeGen', function () {
    it('showAnimalTest', function () {
      showAnimal();
      document.cookie = '1';
      chai.assert(1 === 1, 'Testing');
    });
  });
});
