// This will run the game. (node main.js)

// Remember, to pretty-print objects when console.logging them in node:
//`JSON.stringify(obj, null, 2)`

var inquirer = require ("inquirer")

// make fun colors
var colors = require('colors')
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

var colors = require('colors');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

// outputs red text
console.log("this is an error".error);

// outputs yellow text
console.log("this is a warning".warn);


// this is where the hangman game goes

//1st step a word - pick a word.. user guesses letter - conversert word into spaces where each word correcspondes to a letter. each word is an object
// one constructor word and other letters


// create the game here
// ability to select a word
// make a guess
// make guess needs to verify if they are correct
// ask to play again
// did the win or lose?
// variables to keep track of those

