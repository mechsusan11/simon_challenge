var level = 0;
var keypressed = 1;
var buttonColor = ["green","red","yellow","blue"];
var gamePattern = [];
var userClicked = [];

function nextSequence(){
    var randNo = Math.floor( Math.random() * buttonColor.length );
    var selectedColor = buttonColor[randNo];
    level++;
    keypressed++;
    $('#level-title').html(`level ` + level);
    gamePattern.push(selectedColor);
    console.log(gamePattern);
    $(`#${selectedColor}`).addClass('pressed');
    var autoSound = new Audio (`sounds/${selectedColor}.mp3`);
    autoSound.play();
    setTimeout(() => {
        $(`#${selectedColor}`).removeClass('pressed');
    }, 500);
}

$(document).ready(function(){
    $(this).keyup(function(){
        if(keypressed===1){
        nextSequence();
        }
    })
    $('.btn').click(function(){
        if(keypressed>1){
        var clickedColor = this.id;
        userClicked.push(clickedColor);
        console.log(userClicked);
        nextSequence();
        }
    })
})