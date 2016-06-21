$(document).ready(function() {
  $("#blankform form").submit(function(event) {
    event.preventDefault();

    var countTo = parseInt($("input#countTo").val());
    var multiple = parseInt($("input#multiple").val());
    // debugger;
    if ( countTo <= 0 || multiple <= 0 || countTo === NaN || multiple === NaN ) {
      alert("Please enter a positive number!");
    } else if (countTo < multiple){
      alert("Your first value must be larger than your second value!");
    } else {
      for (var i = multiple; i <= countTo; i += multiple ) {
        $("#output ul").append("<li>" + i + "</li>");
      };
    };
  });
});
