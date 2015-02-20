var Pizza = {
  size: 0,
  toppings: "",
  numSlices: function() {
    if (this.toppings === "cheese") {
      var answer = (3.14 * (this.size/2) * (this.size/2))/16
      return Math.round(answer);
    } else if (this.toppings === "pepperoni") {
      var answer = ((3.14 * (this.size/2) * (this.size/2))/14)
      return Math.round(answer);
    }
  }
};

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault()

    var newSize = parseInt($("input#pizza-size").val());
    var newToppings = $("select#pizza-toppings option:selected").val();
    var newPizza = Object.create(Pizza);
    newPizza.size = newSize;
    newPizza.toppings = newToppings;

    $(".slices").text(newPizza.numSlices());
    $(".result").show();

    $("input#pizza-size").val("");
    
  });
});
