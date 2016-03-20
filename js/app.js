// wait for the DOM to finish loading
$(document).ready(function()  {
  // all code to manipulate the DOM


  var clickCount = 0;
  var playerX = 0;
  var playerY = 0;


  $('.box').click(function(event){
    if( !$(this).text() ){
      if (clickCount % 2 === 0 ){
        $(this).text("X");
          clickCount ++;
      }else if(clickCount % 2 !== 0){
          $(this).text("O");
          clickCount ++;
        }
    }
  });






  $('.btn').on("click", function (){
      $(".box").text("");
  });




  // goes inside this function

});
//player X chooses a square. You want to record X.
//X cannot be chosen again
//player O chooses

var arrBoxes = [[null, null, null],
                [null, null, null],
                [null, null, null]];
