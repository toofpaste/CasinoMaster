function randVal(){
  return Math.floor(Math.random() * 13);
};
function randSuit(){
  return Math.floor(Math.random() * 4);
};


function dealUser(value, suit, suitName, valueName, totalUser){
  var imagePath = ["spade", "diam", "heart", "club"];
  for(var tp = 0; tp < userTrack.length; tp++){
    if(userTrack[tp] === 12 && totalUser > 21){
      userTrack[tp] = 1;
      totalUser -= 10;
      $("#userVal").text("Value of: " + totalUser);
    };
  };
  pl++;
  userTrack.push(value);
  $("ul.user").append("<li id = 'cardA" + pl + "'><img src = 'img/" + imagePath[suit] + value + ".jpg'" + " of " + suitName[suit] + "</li>");
  $("#userVal").text("Value of: " + totalUser);
  $('#cardA' + pl).slideDown(1000);
};

function dealDeal(value, suit, suitName, valueName, totalDeal){

  var imagePath = ["spade", "diam", "heart", "club"];
  for(var tp = 0; tp < dealTrack.length; tp++){
    if(dealTrack[tp] === 12 && totalDeal > 21){
      dealTrack[tp] = 1;
      totalDeal -= 10;
      $("#dealVal").text("Value of: " + totalDeal);
    };
  };
  dl++;
  dealTrack.push(value);
  $("ul.deal").append("<li id = 'cardD" + dl + "'><img src = 'img/" + imagePath[suit] + value + ".jpg'" + " of " + suitName[suit] + "</li>");
  $("#dealVal").text("Value of: " + totalDeal);
  $('#cardD' + dl).slideDown(1000);
};
function addCard(rngVal){
  if(rngVal <= 8){
    return (rngVal + 2);
  }else if(rngVal > 8 && rngVal <= 11){
     return 10;
  }else if(rngVal === 12){
    return 11;
  };
};

function checkWin(totalUser, totalDeal, betTotal){
  $("#reset1").fadeIn(1000);
  if (totalUser >= 22){
    $("#bankBal").text("Balance: $" + playerBank)
     $('#name').text("   User: " + totalUser + "    BUST - - - - Dealer Wins");
     $('#bet').text("Bet Amount: $" + betTotal);
     $('#bet2').text(" Loss Amount: $" + (betTotal));
     $("#bank").text("Bank Balance: $" + playerBank);
     localStorage.setItem("bank", playerBank);
     if(playerBank <= 0){
       $("#btnCash").fadeIn(1000);
     };
   };
   if (totalUser === totalDeal){
     playerBank += betTotal[0];
     $("#bankBal").text("Balance: $" + playerBank)
     $('#name').text("Dealer: " + totalDeal + "  /User: " + totalUser + "    TIE TIE TIE TIE TIE");
     $('#bet').text("Bet Amount: $" + betTotal);
     $('#bet2').text(" Win Amount: $" + (betTotal));
     $("#bank").text("Bank Balance: $" + playerBank);
     localStorage.setItem("bank", playerBank);
   };
   if (totalUser > totalDeal && totalUser <= 21){

     playerBank += (betTotal[0]*2);
     $("#bankBal").text("Balance: $" + playerBank)
    $('#name').text("Dealer: " + totalDeal + "   /User: " + totalUser + "    USER WINS")
    $('#bet').text("Bet Amount: $" + betTotal);
    $('#bet2').text(" Win Amount: $" + (betTotal * 2));
    $("#bank").text("Bank Balance: $" + playerBank);
    localStorage.setItem("bank", playerBank);
   };
   if (totalDeal > totalUser && totalDeal <= 21){
     $("#bankBal").text("Balance: $" + playerBank)
    $('#name').text("Dealer: " + totalDeal + "   /User: " + totalUser + "    DEALER WINS HAHAHA");
    $('#bet').text("Bet Amount: $" + betTotal);
    $('#bet2').text(" Loss Amount: $" + (betTotal));
    $("#bank").text("Bank Balance: $" + playerBank);
    localStorage.setItem("bank", playerBank);
    if(playerBank <= 0){
      $("#btnCash").fadeIn(1000);
    };
   };
   if(totalDeal > 21 && totalUser <= 21){
     playerBank += (betTotal[0]*2);
     $("#bankBal").text("Balance: $" + playerBank)
     $('#name').text("Dealer: " + totalDeal + "   /User: " + totalUser + "    USER WINS:  DEALER BUST");
     $('#bet').text("Bet Amount: $" + betTotal);
     $('#bet2').text(" Win Amount: $" + (betTotal * 2));
     $("#bank").text("Bank Balance: $" + playerBank);
     localStorage.setItem("bank", playerBank);
   };
};
function start(){
  userTrack = [];
  dealTrack = [];
  $("#reset1").fadeOut(1000);
  var suitName = ["Spades" , "Hearts", "Diamonds", "Clubs"];
  var valueName = [2, 3, 4, 5, 6, 7 ,8 ,9, 10, "Jack", "Queen", "King", "Ace"];
  //               0  1  2  3  4  5  6  7  8     9        10      11      12
  var totalUser = 0;
  var totalDeal = 0;
  var rngVal = 0;
  var rngSuit = 0;
  var num = 0;
  var betTotal = [];

  $("#plus1").unbind("click").click(function(){
    $("button#dealC").fadeIn(1000);
    if(playerBank > 0){
    var clickedNum = 1;
    playerBank = bet(clickedNum, betTotal);
  };
  })


  $("#plus5").unbind("click").click(function(){
    $("button#dealC").fadeIn(1000);
    if(playerBank >= 5){
    var clickedNum = 5;
    playerBank = bet(clickedNum, betTotal);
  };
  })



  $("#plus10").unbind("click").click(function(){
    $("button#dealC").fadeIn(1000);
    if(playerBank >= 10){
    var clickedNum = 10;
    playerBank = bet(clickedNum, betTotal);
    };
  })



  $("#plus50").unbind("click").click(function(){
    $("button#dealC").fadeIn(1000);
    if(playerBank >= 50){
    var clickedNum = 50;
    playerBank = bet(clickedNum, betTotal);
  };
  })



  $("#plus100").unbind("click").click(function(){
    $("button#dealC").fadeIn(1000);
    if(playerBank >= 100){
    var clickedNum = 100;
    playerBank = bet(clickedNum, betTotal);
  };
  })


  $("button#dealC").unbind("click").click(function(){
    $("#plus1").fadeOut(1000);
    $("#plus5").fadeOut(1000);
    $("#plus10").fadeOut(1000);
    $("#plus50").fadeOut(1000);
    $("#plus100").fadeOut(1000);
    $("button#dealC").fadeOut(1000);
    $("button#hit").fadeIn(1000);
    $("button#stay").fadeIn(1000);
    if(playerBank > 0 && playerBank >= (betTotal * 2)){
    $("button#dblDown").fadeIn(1000);
  };
    var userAce = 0;
    var dealAce = 0;
      rngVal = randVal();
      totalUser += addCard(rngVal);
      rngSuit = randSuit();
      dealUser(rngVal, rngSuit, suitName, valueName, totalUser);
      rngVal = randVal();
      totalUser += addCard(rngVal);
      rngSuit = randSuit();
      dealUser(rngVal, rngSuit, suitName, valueName, totalUser);
      rngVal = randVal();
      totalDeal += addCard(rngVal);
      rngSuit = randSuit();
      dealDeal(rngVal, rngSuit, suitName, valueName, totalDeal);
    });
    $("button#hit").unbind("click").click(function(){
      $("#dblDown").fadeOut(1000);
      for(var tp = 0; tp < userTrack.length; tp++){
        if(userTrack[tp] === 12 && totalUser > 21){
          userAce++;
        };
      };
      if(totalUser <= 21 || userAce > 0){
      userAce = 0;
      rngVal = randVal();
      totalUser += addCard(rngVal);
      for(var tp = 0; tp < userTrack.length; tp++){
        if(userTrack[tp] === 12 && totalUser > 21){
          userTrack[tp] = 1;
          totalUser -= 10;
        };
      };
      for(var tp = 0; tp < dealTrack.length; tp++){
        if(dealTrack[tp] === 12 && totalDeal > 21){
          dealTrack[tp] = 1;
          totalDeal -= 10;
        };
      };
      rngSuit = randSuit();
      dealUser(rngVal, rngSuit, suitName, valueName, totalUser);
    }else $("ul.user").append("<li id = 'bustbust'> BUST BUST BUST BUST </li>");
    });
    $("button#stay").unbind("click").click(function(){
      for(var tp = 0; tp < userTrack.length; tp++){
        if(userTrack[tp] === 12 && totalUser > 21){
          dealAce++;
        };
      };
      $("#dblDown").fadeOut(1000);
      $("#stay").fadeOut(1000);
      $("#hit").fadeOut(1000);
    while(totalDeal <= 16){
      rngVal = randVal();
      totalDeal += addCard(rngVal);
      for(var tp = 0; tp < userTrack.length; tp++){
        if(userTrack[tp] === 12 && totalUser > 21){
          userTrack[tp] = 1;
          totalUser -= 10;
        };
      };
      for(var tp = 0; tp < dealTrack.length; tp++){
        if(dealTrack[tp] === 12 && totalDeal > 21){
          dealTrack[tp] = 1;
          totalDeal -= 10;
        };
      };

      rngSuit = randSuit();
      dealDeal(rngVal, rngSuit, suitName, valueName, totalDeal);
    };
    checkWin(totalUser, totalDeal, betTotal);
    });
    $("button#dblDown").unbind("click").click(function(){
      $("#dblDown").fadeOut(1000);
      $("#stay").fadeOut(1000);
      $("#hit").fadeOut(1000);
      var dblDbl = betTotal[0];
      playerBank = bet(dblDbl, betTotal);
      rngVal = randVal();

      totalUser += addCard(rngVal);
      for(var tp = 0; tp < userTrack.length; tp++){
        if(userTrack[tp] === 12 && totalUser > 21){
          userTrack[tp] = 1;
          totalUser -= 10;
        };
      };
      for(var tp = 0; tp < dealTrack.length; tp++){
        if(dealTrack[tp] === 12 && totalDeal > 21){
          dealTrack[tp] = 1;
          totalDeal -= 10;
        };
      };
      // for(var tp = 0; tp < userTrack.length; tp++){
      //   if(userTrack[tp] === 12 && totalUser > 21){
      //     totalUser -= 10;
      //     $("#userVal").text("Value of: " + totalUser);
      //   };
      // };
      rngSuit = randSuit();
      dealUser(rngVal, rngSuit, suitName, valueName, totalUser);
      while(totalDeal <= 16){
        rngVal = randVal();
        totalDeal += addCard(rngVal);
        rngSuit = randSuit();
        dealDeal(rngVal, rngSuit, suitName, valueName, totalDeal);
      };
      checkWin(totalUser, totalDeal, betTotal);
    });

};

function bet(clickedNum, betTotal){
playerBank -= clickedNum;
betTotal.push(clickedNum);
if(betTotal.length != 1){
betTotal[0] += betTotal.pop();
};
$("#bankBal").text("Balance: $" + playerBank)
$("#printBet").text("BET: $" + betTotal[0]);
return playerBank;
};
  var dl = 0;
  var playerBank = localStorage.getItem("bank");
  var pl = 0;
  var userTrack = [];
  var dealTrack = [];
$(function(){
  $("#resetBank").click(function(){
      localStorage.setItem("bank", 1000);
  });
  var countClick = 0;
  $("#imgButtons").hide();
  $("#bankBal").text("Balance: $" + playerBank)


      $("#reset1").unbind("click").click(function(){

        if(playerBank != 0){
        $("#imgButtons").fadeIn(1000);
        $("#plus1").fadeIn(1000);
        $("#plus5").fadeIn(1000);
        $("#plus10").fadeIn(1000);
        $("#plus50").fadeIn(1000);
        $("#plus100").fadeIn(1000);
        $("ul").empty();
        $("ul").empty();
        $("#bet").empty();
        $("#bet2").empty();
        $("#name").empty();
        $("#bank").empty();
        $("#hit").fadeOut(1000);
        $("#stay").fadeOut(1000);
        $("#dblDown").fadeOut(1000);
        $("#printBet").empty();
        $("#userVal").empty();
        $("#dealVal").empty();
        start();
        $("#btnCash").click(function(){
            localStorage.setItem("bank", playerBank);
        });
      }else {$("#loselose").fadeOut(1000);
              $("#loser").fadeIn(1000);}
      });


});
