var inquirer = require("inquirer");
// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
function Letter(_char, _bool){
    //   * A string value to store the underlying character for the letter
    this.char = _char;
    //   * A boolean value that stores whether that letter has been guessed yet
    this.bool = _bool;
    //   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.letter = function(){

    }
    //   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.guess = function(){

    }
}






