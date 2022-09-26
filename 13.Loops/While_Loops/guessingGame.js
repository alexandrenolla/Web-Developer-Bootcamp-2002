//Collecting the input(string type) and converting into a number type.
let max = parseInt(prompt('Welcome! Enter the maximum number:'));
//Validating if that input is a numeric value greater than 0. 
while (isNaN(max) === true || max === 0) {
    max = parseInt(prompt('Not a valid number, try again.'));
}

//Selecting a random number based upon the input given.
const result = Math.floor(Math.random() * max) + 1;

//Collecting the input(string type) and converting into a number type.
let guess = parseInt(prompt('Enter your first guess:'));
//Validating if that input is a numeric value greather than 0; 
//0 and NaN are Falsy Values:
while (!guess) {
    guess = parseInt(prompt('Not a valid number, try again.'));
}

// Creating the counter.
let attempts = 1;
//Converting the guesses into integers and checking condition.
while(parseInt(guess) !== result) 
{   
    if(guess < result) 
    {
        guess = prompt('Too low. Guess again');
        //Checking for exiting game functionality 
        if(guess === 'q') 
        {
            break;
        }
        //Incrementing counter after each guess.
        attempts++;
    } 
    else if(guess > result) 
    {
        guess = prompt('Too high. Try again');
        //Checking for exiting game functionality
        if(guess === 'q') 
        {
            break;
        }
        //Incrementing counter after each guess.
        attempts++;
    }
    else {
        //If it is NaN after parsing, prompt this:
        guess = prompt('Invalid number. Try again')
    }
}

if(guess === 'q') {
    alert(`You quit after ${attempts} guesses. LOSER!`)
} else {
    alert(`You Win! It took you ${attempts} guesses.`);
}


