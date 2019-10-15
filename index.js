var inquirer = require("inquirer");
var randomWords = require('random-words');

let words = require("./Word.js");
let Word = words.Word;
// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
var randomWord = randomWords({exactly: 1, minLength: 4, maxLength: 6})
let newWord= new Word(randomWord);
console.log(newWord)
newWord.word();
//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses
let count = 0;
let playerArray = [];
var askPlayer = function () {

    if (count < 5) {
        // runs inquirer and asks the user a series of questions whose replies are
        // stored within the variable answers inside of the .then statement
        inquirer.prompt([
            {
                name: "guess",
                message: "Guess a letter!"
            }
              
        ]).then(function (answers) {
            // initializes the variable newProgrammer to be a programmer object which will take
            // in all of the user's answers to the questions above
            let newGuess = answers.guess
            // printInfo method is run to show that the newProgrammer object was successfully created and filled
            
            playerArray.push(newGuess);
            // add one to count to increment our recursive loop by one
            count++;
            // run the askquestion function again so as to either end the loop or ask the questions again
            askPlayer();
            console.log(playerArray);
            console.log("---------------------------------------")
        });
        // else statement which prints "all questions asked" to the console
        // when the code has been run five times
    }
    else {
        console.log("You ran out of guesses!");
    }
};

// call askPlayer to run our code
askPlayer();

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`

// 5. **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`

// 6. **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: <https://jsbin.com/facawetume/edit?js,console>)