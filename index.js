var randomNumber = 0;
var gamePattern = [];
var ClickedButtonNumber = 0;
var userClickedPattern = [];
var levelNumber = 0;
var started = false;
$(".btn1").hide();
$(".howToPlay").hide();
$("#start").mouseenter(function () {
  $ ("#start").addClass("startEffect");
});
$("#start").mouseleave(function () {
  $ ("#start").removeClass("startEffect");
});
$("#how").mouseenter(function () {
  $ ("#how").addClass("startEffect");
});
$("#how").mouseleave(function () {
  $ ("#how").removeClass("startEffect");
});

$("#how").click(function() {
  $(".howToPlay").fadeToggle();
  });

function randomNumbers() {
    randomNumber = Math.floor((Math.random() * 4)+1);
    gamePattern.push(randomNumber);
    return(randomNumber);
}

function buttonEffect(x) {
    var audio = new Audio("./audios/" + x + ".mp3");
    audio.play();
    $ ("#button" + x).addClass("effect");
    setTimeout (function() {$ ("#button" + x).removeClass("effect");}, 100);
}

function levelChange() {
  
  ClickedButtonNumber = 0; 
  userClickedPattern = [];
  levelNumber++;

  setTimeout(function(){ 
    $("h1").text("Level " + levelNumber);
    var audio = new Audio("./audios/start.mp3");
    audio.play();
  }, 1000);
    
  setTimeout(function(){
    buttonEffect (randomNumbers());
  }, 1500);  
}

function error() {
  
  $("h1").text("GAME OVER");
  var audio = new Audio("./audios/child-says-no.mp3");
  audio.play();
  
  $(".btn1").fadeOut();
  $("body").addClass("errorEffect");
  $("#start").text("Replay");
  $("#start").slideDown("slow");
  $("#how").fadeIn("slow");

  randomNumber = 0;
  gamePattern = [];
  ClickedButtonNumber = 0;
  userClickedPattern = [];
  levelNumber = 0;
  started = false;
}

function checkAnswer (x) {
  if (userClickedPattern[x] === gamePattern[x]){;
    if(gamePattern.length === userClickedPattern.length){
      levelChange();
    }
  }
  else{
    error();
  }
}

$("#start").click(function() {
  if (!started) {
  $ ("body").removeClass("errorEffect");
  
  $(".howToPlay").hide();
  
  setTimeout(function(){ 
    $("#start").fadeOut("slow");
    $("#how").fadeOut("slow");
  }, 1000);
  
    setTimeout(function(){ 
    $(".btn1").fadeIn();
    levelChange();
    started = true;
  }, 1500);
  
  
  }
})



$("#button1").click(function () {
  ClickedButtonNumber = 1;
  buttonEffect(ClickedButtonNumber);
  userClickedPattern.push(ClickedButtonNumber);
  checkAnswer(userClickedPattern.length - 1);
});
  
$("#button2").click(function () {
  ClickedButtonNumber = 2;
  buttonEffect(ClickedButtonNumber);
  userClickedPattern.push(ClickedButtonNumber);
  checkAnswer(userClickedPattern.length - 1);
});
  
$("#button3").click(function () {
  ClickedButtonNumber = 3;
  buttonEffect(ClickedButtonNumber);
  userClickedPattern.push(ClickedButtonNumber);
  checkAnswer(userClickedPattern.length - 1);
});
  
$("#button4").click(function () {
  ClickedButtonNumber = 4;
  buttonEffect(ClickedButtonNumber);
  userClickedPattern.push(ClickedButtonNumber);
  checkAnswer(userClickedPattern.length - 1);
}); 
