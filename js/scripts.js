var Pizza = {
  size: "",
  toppings: "",
  numSlices: function() {
    if (this.toppings === "cheese") {
      if (this.size === "small") {
        return 8
      } else if (this.size === "medium") {
        return 10
      } else if (this.size === "large") {
        return 12
      }
    } else if (this.toppings === "pepperoni") {
      if (this.size === "small") {
        return 6
      } else if (this.size === "medium") {
        return 8
      } else if (this.size === "large") {
        return 10
      }
    }
  }
};

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault()

    var newSize = $("input#pizza-size").val();
    var newToppings = $("input#")

  });
});
