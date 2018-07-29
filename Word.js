const letter = require("./letter.js");

function Word(selectedWord){
    this.arrayLetters= []
    
    this.guessFunction = function(){
       displayString(this.arrayLetters)
    }
    this.callsGuess = function(char){
        callsString(this.arrayLetters)
    }
}

function displayString(al){
    let wordString =""
    for(let i = 0; i<al.length;i++){
        wordString= wordString + al[i].toString   
    }
    //console.log(wordString)
    return wordString;
}

//
function callsString(al){
    returnString=""
    for(let i = 0;i<al.length;i++){
        returnString.push(new letter(al[i]))
    }
}

module.exports = letter;