const inquirer = require('inquirer');
const Word = require("./Word.js")

let wordsList = ["green", "eggs", "ham"];

let numberOfGuesses = 9;

let guessCount = 0;

let word = "";

let wantToPlay = true;

let notGuessed = false;

let wordArray;

while (wantToPlay) {
    // pick a word from the word list and set guessCount to zero
    selectedWord = pickWord(wordsList);
    guessCount = 0;

   wordA = new Word;

    // keeps asking for guess until guess count is reached or correct guess
    while ((numberOfGuesses < guessCount) && (notGuessed)) {
        // prompt user for letter input
        inquirer.prompt([{
            name: "guessLetter",
            message: " Guess a Letter!",
            type: 'input',
        }]).then(function (answer) {
            console.log(answer.guessLetter)
            console.log(word)
            word = pickWord(wordsList);
        })
    }
}

// picks a random word from wordsList
function pickWord(words) {
    return words[Math.floor(Math.random() * words.length)]
}