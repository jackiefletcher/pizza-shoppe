describe("Pizza", function() {
  describe("numSlices", function() {
    it("determine number of slices in the pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = "large"
      testPizza.toppings = "cheese"
      expect(testPizza.numSlices()).to.equal(12)
    });
  });

});
