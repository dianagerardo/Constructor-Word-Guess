var inquirer = require("inquirer");
var randomWords = require('random-words');

let words = require("./Word.js");
let Word = words.Word;
// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
console.log(randomWords({exactly: 5, minLength: 4, maxLength: 6}));
//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`

// 5. **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`

// 6. **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: <https://jsbin.com/facawetume/edit?js,console>)