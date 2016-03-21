// wait for the DOM to finish loading
$(document).ready(function()  {
  // all code to manipulate the DOM
  //variable used to keep track whos turn it is % who won
  var clickCount = 0;
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
        $(this).text("X");
          clickCount ++;    //add a count so player O can go
      }else if(clickCount % 2 !== 0){
          $(this).text("O");
          clickCount ++;
        }
    }
    //records what box is being clicked in a array
    if ( $('#1')||$('#2')||$('#3')||$('#4')||$('#5')||$('#6')||$('#7')||$('#8')||$('#9') ){
          $boxes.unshift(this);
          console.log($boxes);
    }

    //conditions to win
      var hLine1 = $('#1').text() === "X" && $('#2').text() === "X" && $('#3').text() === "X" || $('#1').text() === "O" && $('#2').text() === "O" && $('#3').text() === "O";
      var hLine2 = $('#4').text() === "X" && $('#5').text() === "X" && $('#6').text() === "X" || $('#4').text() === "O" && $('#5').text() === "O" && $('#6').text() === "O";
      var hLine3 = $('#7').text() === "X" && $('#8').text() === "X" && $('#9').text() === "X" || $('#7').text() === "O" && $('#8').text() === "O" && $('#9').text() === "O";
      var vLine1 = $('#1').text() === "X" && $('#4').text() === "X" && $('#7').text() === "X" || $('#1').text() === "O" && $('#4').text() === "O" && $('#7').text() === "O";
      var vLine2 = $('#2').text() === "X" && $('#5').text() === "X" && $('#8').text() === "X" || $('#2').text() === "O" && $('#5').text() === "O" && $('#8').text() === "O";
      var vLine3 = $('#3').text() === "X" && $('#6').text() === "X" && $('#9').text() === "X" || $('#3').text() === "O" && $('#6').text() === "O" && $('#9').text() === "O";
      var dLine1 = $('#1').text() === "X" && $('#5').text() === "X" && $('#9').text() === "X" || $('#1').text() === "O" && $('#5').text() === "O" && $('#9').text() === "O";
      var dLine2 = $('#3').text() === "X" && $('#5').text() === "X" && $('#7').text() === "X" || $('#3').text() === "O" && $('#5').text() === "O" && $('#7').text() === "O";

      // if theres a winner, check what count you're on. If even,
      // player O wins. Vice versa if false
      //if no winner, and count is to 9, then its a draw
      if ( hLine1 || hLine2 || hLine3 || vLine1 || vLine2 || vLine3 || dLine1 || dLine2){
          if (clickCount % 2 === 0){
            alert("PLAYER O WON!");
          }
          else {
            alert("PLAYER X WON!");
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
