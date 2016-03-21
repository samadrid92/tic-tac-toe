// wait for the DOM to finish loading
$(document).ready(function()  {
  // all code to manipulate the DOM
  //variable used to keep track whos turn it is % who won
  var clickCount = 0;
  var player1 = "1";
  var player0 = "0";
  //A array jus to keep track of moves
  var $boxes = [];
  //lets me know whats being clicked
  console.log($boxes);                 //lets me know whats being clicked

  //event listener. Runs every time I click a box
  //if box is empty, run. If not, dont run.
  //if blank, first person goes and marks "X"
  $('.box').click(function(event){
    if( !$(this).text() ){
      if (clickCount % 2 === 0 ){
        $(this).text("1");
        $(this).addClass("1");
          clickCount ++;    //add a count so player O can go
      }else if(clickCount % 2 !== 0){
          $(this).text("0");
          $(this).addClass("0");
          clickCount ++;
        }
    }
    //records what box is being clicked in a array
    if ( $('#1')||$('#2')||$('#3')||$('#4')||$('#5')||$('#6')||$('#7')||$('#8')||$('#9') ){
          $boxes.unshift(this);
          console.log($boxes);
    }

    //conditions to win
      var hLine1 = $('#1').text() === "1" && $('#2').text() === "1" && $('#3').text() === "1" || $('#1').text() === "0" && $('#2').text() === "0" && $('#3').text() === "0";
      var hLine2 = $('#4').text() === "1" && $('#5').text() === "1" && $('#6').text() === "1" || $('#4').text() === "0" && $('#5').text() === "0" && $('#6').text() === "0";
      var hLine3 = $('#7').text() === "1" && $('#8').text() === "1" && $('#9').text() === "1" || $('#7').text() === "0" && $('#8').text() === "0" && $('#9').text() === "0";
      var vLine1 = $('#1').text() === "1" && $('#4').text() === "1" && $('#7').text() === "1" || $('#1').text() === "0" && $('#4').text() === "0" && $('#7').text() === "0";
      var vLine2 = $('#2').text() === "1" && $('#5').text() === "1" && $('#8').text() === "1" || $('#2').text() === "0" && $('#5').text() === "0" && $('#8').text() === "0";
      var vLine3 = $('#3').text() === "1" && $('#6').text() === "1" && $('#9').text() === "1" || $('#3').text() === "0" && $('#6').text() === "0" && $('#9').text() === "0";
      var dLine1 = $('#1').text() === "1" && $('#5').text() === "1" && $('#9').text() === "1" || $('#1').text() === "0" && $('#5').text() === "0" && $('#9').text() === "0";
      var dLine2 = $('#3').text() === "1" && $('#5').text() === "1" && $('#7').text() === "1" || $('#3').text() === "0" && $('#5').text() === "0" && $('#7').text() === "0";

      // if theres a winner, check what count you're on. If even,
      // player O wins. Vice versa if false
      //if no winner, and count is to 9, then its a draw
      if ( hLine1 || hLine2 || hLine3 || vLine1 || vLine2 || vLine3 || dLine1 || dLine2){
          if (clickCount % 2 === 0){
            alert("PLAYER 0 WON!");
          }
          else {
            alert("PLAYER 1 WON!");
          }
      }
      else if ( clickCount === 9){
          alert("Draw!");
      }

  });
  //reset button. When clicked, make each box blank.
  //make clickCount = 0 so turns wont get out of whack
  $('.btn').on("click", function (){
      $(".box").text("");
      $boxes = [];
      clickCount = 0;
  });

  // goes inside this function

});
