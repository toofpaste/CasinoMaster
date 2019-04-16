//Business Logic --------------------------------------------------------------

var secretNumber = Math.floor(Math.random() * 1000);
console.log("secretNumber", secretNumber);

function compareNumbers(guessedNumber, secretNumber) {
  if(guessedNumber === secretNumber) {
    $("#underOverOutput").text("Congratulations, you guessed the number!")
    // console.log("compareNumbers function", "Congratulations, you've WON!")
  } else if (guessedNumber > secretNumber){
    $("#underOverOutput").text("It's lower!");
    // console.log("Guess again, it's lower!")
  } else if(guessedNumber < secretNumber) {
    $("#underOverOutput").text("It's higher!");
    // console.log("Guess again, it's higher");
  }
  var difference = Math.abs(guessedNumber - secretNumber);
  console.log("difference", difference);
  if((guessedNumber === secretNumber)) {
    $("#output").addClass("success");
    $("#hotColdOutput").text("");
    // console.log("No text needed");
  } else if(difference < 5) {
    $("#output").addClass("within5");
    $("#hotColdOutput").text("You are within 5");
    // console.log("You are within 10");
  } else if(difference < 10) {
    $("#output").addClass("within10");
    $("#hotColdOutput").text("You are within 10");
    // console.log("You are within 10");
  } else if (difference < 25) {
    $("#output").addClass("within25");
    $("#hotColdOutput").text("You are within 25");
    // console.log("You are within 50");
  } else if (difference < 50) {
    $("#output").addClass("within50");
    $("#hotColdOutput").text("You are within 50");
    // console.log("You are within 50");within10
  } else if (difference < 100) {
    $("#output").addClass("within100");
    $("#hotColdOutput").text("You are within 100");
    // console.log("You are within 100");
  } else if (difference < 250) {
    $("#output").addClass("within250");
    $("#hotColdOutput").text("You are within 250");
    // console.log("You are within 250");
  } else if (difference < 500) {
    $("#output").addClass("within500");
    $("#hotColdOutput").text("You are within 500");
    // console.log("You're within 500");
  } else if (difference < 1000) {
    $("#output").addClass("notwithin500");
    $("#hotColdOutput").text("You're not even within 500!");
    // console.log("You're not even within 500!");
  }
}

//User Interface Logic ---------------------------------------------------------

$(document).ready(function() {
  // $("#userInput").submit(function(event){
  //   event.preventDefault();
  //   var levelInput = $("input:radio[name=level]:checked").val();
  //   console.log("levelInput", levelInput);
  //   secretNumber(levelInput);
  // });
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var guessedNumber = parseInt($("#guessedNumber").val());
    console.log("guessedNumber", guessedNumber);
    // var rangeNumber = parseInt($("input#rangeNumber").val());
    // console.log("rangeNumber", rangeNumber);
    compareNumbers(guessedNumber, secretNumber);
    $("#output").show();
    $("#guessedNumber").val("");
  })
});
