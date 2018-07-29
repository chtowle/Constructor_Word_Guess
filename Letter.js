function Letter(userLetter,guessedYet){
    this.userLetter = userLetter
    this.guessedYet = guessedYet
    this.toString = function(){
        if(guessedYet){
            return userLetter
        }else
        {
            return "_"
        }
    }
    this.checker = function(char){
        if(char===underlyingChar){
            this.guessedYet=true
        }
    }
}