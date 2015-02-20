var Pizza = {
  size: "",
  toppings: "",
  numSlices: function() {
    if (this.toppings === "cheese") {
      if (this.size === 8) {
        return 8
      } else if (this.size === 11) {
        return 10
      } else if (this.size === 16) {
        return 12
      }
    } else if (this.toppings === "pepperoni") {
      if (this.size === 8) {
        return 6
      } else if (this.size === 11) {
        return 8
      } else if (this.size === 16) {
        return 10
      }
    }
  }
};

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault()

    var newSize = $("input#pizza-size").val();
    var newToppings = $("input#pizza-toppings").val();

  });
});
