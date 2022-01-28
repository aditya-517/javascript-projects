var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started=false;
var level =0;

 document.addEventListener('keydown',function(){
     if(!started){
        $("h1").text("Level "+level);
        nextSequence();
        started = true;
     }
 }); 

 $(".btn").click(function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);
    
    checkAnswer(userClickedPattern.length -1 );
})
 
function nextSequence(){
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);  

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
    level++;
    $("h1").text("Level "+level);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        if(userClickedPattern.length  == gamePattern.length){
            setTimeout(function(){
                nextSequence();            
            },1000);
        }
    }
    else{
        playSound('wrong');
        $('body').addClass('game-over');
        setTimeout(function(){
           $('body').removeClass('game-over');
        },100);

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }    
}

function startOver(){
    level = 0;
    gamePattern=[];
    started = false;
}

function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass('pressed');
    setTimeout(() => {$("#"+currentColour).removeClass('pressed'); },100 );
    

}