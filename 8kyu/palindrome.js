/*
Problem
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

//My solution
function isPalindrome(x) {
    x = x.toLowerCase()
    let reversed = x.split('')
    reversed = reversed.reverse()
    reversed = reversed.join('')
    
    return (x === reversed)
  }