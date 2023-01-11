/*
Description:

Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

Example (s, sep --> Output)

"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1"

*/


//My solution
function freqSeq(str, sep) {
    let arr = []
    let count = 0
    let newStr = str.split('')
    for(let i = 0; i < newStr.length; i++){
      count = 0
      for(let j = 0; j < newStr.length; j++){
        if(newStr[i] === newStr[j]){
          count++
        }
      }
      arr.push(count)
    }
    str = arr.join(sep)
    return str
  }

  //Other solutions
  function freqSeq(str, sep) {
    return str.split('').map((v, i, arr) => arr.filter(vi => vi === v).length).join(sep);
  }