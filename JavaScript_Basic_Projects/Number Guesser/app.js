// game values
let min = 1,max = 10,winningnumber = 2,guessleft = 3;

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

// listen for guess 
guessBtn.addEventListener('click',function (){
    let guess = parseInt(guessInput.value);

    if(isNaN(guess)|| guess < min || guess > max)
    {
        setMessage(`PLease enter the numberf between ${min} and ${max}`, 'red');
      
    }

    if(guess=== winningnumber)
    {
        guessInput.disabled = true; 
        guessInput.style.borderColor ='green';
        setMessage("You are the winner..! ",'green');
     
    }
    else{
        setMessage(`Your guess is wrong..the right answer is ${winningnumber}`,'red'); 
    }
    console.log(guess);

});


function setMessage(msg,color)
{
 message.style.color = color;
 message.textContent = msg;
 
}