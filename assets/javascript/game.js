

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 10;

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice)



   // When the user presses a key, it will run the following function...
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        wins++;
        alert("Youre a winner");
    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++;
        alert("come on really try again")
    }
  
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
}		
