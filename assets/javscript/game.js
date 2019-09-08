var wordarray = [
    "glass",
    "heat",
    "molten",
    "furnace",
    "gloryhole",
    "blowpipe",
    "punty",
    "jacks",
    "tweezers",
    "shears",
    "frit",
    "highfire",
    "torch",
]

var wins = 0;
var losses = 0;
var lastword = "";
var lettersguessed = new Array;

var directionstext = document.getElementById("directionstext");
var chosenwordtext = document.getElementById("chosenwordtext");
var guessagintext = document.getElementById("guessagaintext");
var currentguesstext = document.getElementById("userguesstext");
var previousguessestext = document.getElementById("previousguessestext");
var guesseslefttext = document.getElementById("guesseslefttext");
var numberofwinstext = document.getElementById("numberofwinstext");
var numberoflossestext = document.getElementById("numberoflossestext");


//computer chooses word
var chosenword = wordarray[Math.floor(Math.random() * wordarray.length)];
    //word gets logged in console, make this a comment when finisheds
var hangmanArray = new Array(chosenword.length);
var guessesleft = chosenword.length * 2;
guesseslefttext.textContent = "You have " + guessesleft + " guesses remaining!!";
console.log(chosenword);

//setting up the array for the underscores of the answer word to be filled in
var hangmanArray = [];
for(var i = 0; i < chosenword.length; i++) {
    hangmanArray[i] = "_";
    chosenwordtext.textContent = "The word is: " + hangmanArray;
}

var lettersremaining = hangmanArray.length;

//while (lettersremaining > 0) {
  //  alert("Guess Again!!");
//}

//beginning of user input, listen for key
document.onkeyup = function() {
    var userguess = event.key;
    //confirm that user only entered 1 key and it was a letter
    if (userguess = userguess.length === 1 && userguess.match(/[a-z]/i));
        console.log(userguess);    
}
