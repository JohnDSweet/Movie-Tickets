function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

var result;
var ticketLogic = function(tix) {
  if (tix.age === "senior") {
    result = "3";
  } else if (tix.time === "matinee") {
    result = "4";
  } else if (tix.age === "child") {
    result = "5";
  } else {
    result = "7";
  }
}

$(document).ready(function() {
  $("#movieInput form").submit(function(event) {
    var movieInput = $("input:radio[name=movie]:checked").val();
    var timeInput = $("input:radio[name=time]:checked").val();
    var ageInput = $("input:radio[name=age]:checked").val();
    var newTicket = new Ticket(movieInput, timeInput, ageInput);

    ticketLogic(newTicket);

    $("#output").text("Your price is $" + result + ".");
    $(".output").fadeIn(1000);

    event.preventDefault();
  });
});
