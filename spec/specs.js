describe("Pizza", function() {
  describe("numSlices", function() {
    it("determine number of slices in the cheese pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 16
      testPizza.toppings = "cheese"
      expect(testPizza.numSlices()).to.equal(13)
    });
    it("determine number of slices in the pepperoni pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 11
      testPizza.toppings = "pepperoni"
      expect(testPizza.numSlices()).to.equal(7)
    });
  });

});
