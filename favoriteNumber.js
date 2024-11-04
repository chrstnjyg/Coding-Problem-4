function favnumber(){
    let favNumber = 18;
    let userGuess;
    while (userGuess !== favNumber) {
        userGuess = parseInt(prompt("Guess the favorite number:"));
    
        if (userGuess < favNumber) {
            alert("Too low!");
        } else if (userGuess > favNumber) {
            alert("Too high!");
        } else if (userGuess === favNumber) {
            alert("Correct number!");
        } else {
            alert("Please enter a number.");
        }    
    }
}