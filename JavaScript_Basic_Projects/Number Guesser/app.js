// game values
let min = 1,
max = 10,
winningnumber = getRandomNum(min,max),
guessleft = 3;

    //UI Elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play game event listener
game.addEventListener('mousedown',function(e){
    if(e.target.className==='play-again'){
        window.location.reload();
    }
});

// listen for guess 
guessBtn.addEventListener('click',function (){
    let guess = parseInt(guessInput.value);

    if(isNaN(guess)|| guess < min || guess > max){
        setMessage(`PLease enter the numberf between ${min} and ${max}`, 'red');
      
    }

    if(guess=== winningnumber){    
     gameOver(true,`${guess} is correct..YOU WIN `);
    }
    else {
        guessleft -= 1;
        if(guessleft === 0) {
            gameOver(false,'Game Over you LOST');
             
        }
        else {
            setMessage(`${guess} is the wronng number. ${guessleft} is left`,'red')
        }
        
    }
    console.log(guess);

});

function gameOver(won,msg){
   let color;
   won === true? color = 'green' : color = 'red';
    guessInput.disabled = true; 

    guessInput.style.borderColor =color;
    
    setMessage(msg,color);


    //Play Again
    guessBtn.value= 'Play Again';
    guessBtn.className +='play-again';
     

}

function setMessage(msg,color)
{
 message.style.color = color;
 message.textContent = msg;
 
}

function getWinningNum(min,max){
    return Math.floor(Math.random()*((max-min+1)+min));
}