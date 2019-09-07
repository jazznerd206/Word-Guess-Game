# Word-Guess-Game
Word guess game!! Written with javascript elements and based on words which are based on the lexicon of glassblowing!!


--PSEUDOCODE--

HTML bODY:
-on page: instructions, user guess, underscores for letters to be guessed, letters already guessed, guesses remaining

Variables:
-function var: computer chosen word (broken down into individual letters, user choice
-DOM:

Functions:
-ONKEYUP - confirm key is a letter
-array: computer chooses word from array, analyzes into individual letters, returns a corresponding number of underscores to DOM
-if letter chosen by user matches letter in word, return that letter into its corresponding placem, replacing the underscore -- subtract one from guesses remaining
-if letter does not match, letter to letters already guessed in DOM, subtract one from guesses remaining
-print content to DOM

Words available: glass, furnace, gloryhole, blowpipe, punty, jacks, tweezers, shears, bench, frit, highfire, blow, torch, 
