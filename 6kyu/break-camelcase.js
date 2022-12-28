/*
Challenge:
Description:

Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

//My solution
function solution(string) {
    let newString = ""
    let arr = string.split('')
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === arr[i].toLowerCase()){
        newString += arr[i]
      }else if(arr[i] === arr[i].toUpperCase()){
        newString += ' ' + arr[i]
      }
    }
    return newString
  }