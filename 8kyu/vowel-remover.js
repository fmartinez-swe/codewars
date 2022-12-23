/*
Problem

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

    don't worry about uppercase vowels
    y is not considered a vowel for this kata

*/

//My solution
function shortcut (string) {
    let arr = string.split('')
    arr = arr.filter(letter => letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u')
    let noVowels = arr.join('')
    return noVowels;
  }