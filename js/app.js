// wait for the DOM to finish loading
$(document).ready(function()  {
  // all code to manipulate the DOM


  var clickCount = 0;
  var playerX = "X";
  var playerY = "O";

  // var $boxes = [[$('#1'), $('#2'), $('#3')],
  //              [$('#4'), $('#5'), $('#6')],
  //              [$('#7'), $('#8'), $('#9')]];

  var $boxes = [];
  console.log($boxes);

  $('.box').click(function(event){
    if( !$(this).text() ){
      if (clickCount % 2 === 0 ){
        $(this).text(playerX);
          clickCount ++;
      }else if(clickCount % 2 !== 0){
          $(this).text(playerY);
          clickCount ++;
        }
    }
    if ( $('#1')||$('#2')||$('#3')||$('#4')||$('#5')||$('#6')||$('#7')||$('#8')||$('#9') ){
        $boxes.unshift(this);
        console.log($boxes);
    }

    var hLine1 = $('#1').text() === "X" && $('#2').text() === "X" && $('#3').text() === "X" || $('#1').text() === "O" && $('#2').text() === "O" && $('#3').text() === "O";
    var hLine2 = $('#4').text() === "X" && $('#5').text() === "X" && $('#6').text() === "X" || $('#4').text() === "O" && $('#5').text() === "O" && $('#6').text() === "O";
    var hLine3 = $('#7').text() === "X" && $('#8').text() === "X" && $('#9').text() === "X" || $('#7').text() === "O" && $('#8').text() === "O" && $('#9').text() === "O";
    var vLine1 = $('#1').text() === "X" && $('#4').text() === "X" && $('#7').text() === "X" || $('#1').text() === "O" && $('#4').text() === "O" && $('#7').text() === "O";
    var vLine2 = $('#2').text() === "X" && $('#5').text() === "X" && $('#8').text() === "X" || $('#2').text() === "O" && $('#5').text() === "O" && $('#8').text() === "O";
    var vLine3 = $('#3').text() === "X" && $('#6').text() === "X" && $('#9').text() === "X" || $('#3').text() === "O" && $('#6').text() === "O" && $('#9').text() === "O";
    var dLine1 = $('#1').text() === "X" && $('#5').text() === "X" && $('#9').text() === "X" || $('#1').text() === "O" && $('#5').text() === "O" && $('#9').text() === "O";
    var dLine2 = $('#3').text() === "X" && $('#5').text() === "X" && $('#7').text() === "X" || $('#3').text() === "O" && $('#5').text() === "O" && $('#7').text() === "O";

    if ( hLine1 || hLine2 || hLine3 || vLine1 || vLine2 || vLine3 || dLine1 || dLine2){
        alert("You Won!");
     }
  });
  // if(hLine1 || hLine2 || hLine3 || vLine1 || vLine2 || vLine3 || dLine1 || dLine2){
  //
  //   alert("winner");
  // }




  //hline1 || hLine2 || hLine3 || vLine1 || vLine2 || vLine3 || dLine1 || dLine2





  $('.btn').on("click", function (){
      $(".box").text("");
      $boxes = [];
  });




  // goes inside this function

});
//player X chooses a square. You want to record X.
//X cannot be chosen again
//player O chooses
