

var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"] 

var wins = 0;
var losses = 0;
var guessesLeft = 10;

var passedGuesses = "";


document.onkeyup = function (event) {
    var userGuess = event.key;

    passedGuesses  += event.key + " ";

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerGuess) {
        wins = wins + 1;
        guessesLeft = 10;
    }
    else if (userGuess !== computerGuess) {
        guessesLeft = guessesLeft - 1;    
    }
    if (guessesLeft === 0) {
        losses = losses - 1;
        guessesLeft = 10;
        passedGuesses = "";
    }

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("passedGuesses").innerHTML = passedGuesses;
}


