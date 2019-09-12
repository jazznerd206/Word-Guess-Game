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
var lettersguessed = new Array();

var directionstext = document.getElementById("directionstext");
var chosenwordtext = document.getElementById("chosenwordtext");
var currentguesstext = document.getElementById("userguesstext");
var previousguessestext = document.getElementById("previousguessestext");
var guesseslefttext = document.getElementById("guesseslefttext");
var numberofwinstext = document.getElementById("numberofwinstext");
var numberoflossestext = document.getElementById("numberoflossestext");


    //computer chooses word
var chosenword = wordarray[Math.floor(Math.random() * wordarray.length)];
    console.log(chosenword);
    //word gets logged in console, make this a comment when finished
var hangmanArray = new Array(chosenword.length);
    //create underscore array to hold blanks
var guessesleft = chosenword.length + 5;
    guesseslefttext.textContent = guessesleft;
    //keeps track of guesses

//set up hangman array, using chosen word to set number of underscores
for(var i = 0; i < chosenword.length; i++)  {
    hangmanArray[i] = "_";
    chosenwordtext.textContent = hangmanArray;
}

document.onkeyup = function(event) {

    var userguess = event.key;

    //makes sure only 1 key was pressed
    if (userguess.length !== 1) {
        alert("You must choose only 1 letter...");
    //makes sure key was a letter
    } else if (!userguess.match(/^[a-z]+$/i)) {
        alert("You must choose a letter...");
    //makes sure each pick is a unique value
    } else if (lettersguessed.indexOf(userguess) !== -1) {
        alert("You must pick a letter that you haven't picked yet...");
    } else {
        var letterinword = false;
        var j = 0;

    while (letterinword == false && j < chosenword.length) {
        if (userguess == chosenword[j]) {
            letterinword = true; {
                console.log(letterinword);
                previousguessestext.textContent = lettersguessed;
            }
        }
        j++;
    }
        if (letterinword) {
            for(var w = 0; w < chosenword.length; w++) {
                if (userguess == chosenword[w]) {
                    hangmanArray[w] = userguess; {
                    console.log(hangmanArray);
                    }
                }
            }
        }

    lettersguessed.push(userguess);
    guessesleft--;
    guesseslefttext.textContent = guessesleft
    chosenwordtext.textContent = hangmanArray;
    previousguessestext.textContent = lettersguessed;
    currentguesstext.textContent = userguess;
    }

    if (guessesleft > 0 && hangmanArray.indexOf("_") === -1) {
        alert("You've won! The word was: " + chosenword);
        wins++;
        numberofwinstext.textcontent = wins;
    }
    else if (guessesleft === 0 && hangmanArray.indexOf(("_") >= 0)) {
        alert("You've been blown away!! The word was: " + chosenword);
        losses++;
        numberoflossestext.textContent = losses;
    }
}