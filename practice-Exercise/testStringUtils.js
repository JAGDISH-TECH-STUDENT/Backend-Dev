const stringUtils = require('./stringUtils');

const sample = "hello world";

console.log("Capitalized:", stringUtils.capitalize(sample));
console.log("Reversed:", stringUtils.reverse(sample));
console.log("Vowel Count:", stringUtils.countVowels(sample));
