var gamePattern = [];
var userClicked = [];
var started = false;
var level = 0;
var btnColor = ["green", "red", "yellow", "blue"];

function playSound(name) {
  setTimeout(() => {
    var audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
  }, 100);
}

function restart() {
  level = 0;
  gamePattern = [];
  userClicked = [];
}

function buttonAnimation(color) {
  $(`#${color}`).fadeOut(200).fadeIn(200);
}

function nextSequence() {
  userClicked = [];
  level++;
  $("#level-title").html("Level " + level);
  var randNo = Math.floor( Math.random() * btnColor.length );
  var patternColor = btnColor[randNo];
  buttonAnimation(patternColor);
  playSound(patternColor);
  gamePattern.push(patternColor);
}

function checkAnswer(num) {
  if (gamePattern[num] === userClicked[num]) {
    if (gamePattern.length === userClicked.length) {
      nextSequence();
    }
  } else {
    $("#level-title").html("Game over <br> <br> Press any key to restart");
    console.log("Not equal");
    playSound("wrong");
    started = false;
    $('.btn').off('click');
    restart();
  }
}

$(document).ready(function () {
  $(this).keydown(function () {
    if (!started) {
      setTimeout(() => {
        nextSequence();
      }, 100);
      started = true;
    }

    $(".btn").click(function () {
      $(this).addClass("pressed");
      setTimeout(() => {
        $(this).removeClass("pressed");
      }, 200);

      var clickedColor = this.id;
      userClicked.push(clickedColor);
      playSound(clickedColor);
      checkAnswer(userClicked.length - 1);
    });
  });
  
});