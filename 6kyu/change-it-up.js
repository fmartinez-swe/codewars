/*
Description:

Create a function that takes a string as a parameter and does the following, in this order:

    Replaces every letter with the letter following it in the alphabet (see note below)
    Makes any vowels capital
    Makes any consonants lower case

Note:

    the alphabet should wrap around, so Z becomes A
    in this kata, y isn't considered as a vowel.

So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

// My solution
function changer(str) { 
    let arr = []
    let char = ""
    let newStr = str.split('')
    for(let i = 0; i < newStr.length; i++){
      if( (newStr[i].charCodeAt() >= 97 && newStr[i].charCodeAt() < 122) ||
          (newStr[i].charCodeAt() >= 65 && newStr[i].charCodeAt() < 90) ) {
        
        arr.push(String.fromCharCode(newStr[i].charCodeAt() + 1))
      }
      else if(newStr[i].charCodeAt() === 122){
        arr.push(String.fromCharCode(newStr[i].charCodeAt() - 25))  
      }
      else if(newStr[i].charCodeAt() === 90){
        arr.push(String.fromCharCode(newStr[i].charCodeAt() - 25))
      }
      else{
        arr.push(newStr[i])
      }
    }
    
    for(let j = 0; j < arr.length; j++){
  
      if(arr[j] === 'a' || arr[j] === 'e' || arr[j] === 'i' || arr[j] === 'o' || arr[j] === 'u'){
        char += arr[j].toUpperCase()
      }
      else if(arr[j] === 'A' || arr[j] === 'E' || arr[j] === 'I' || arr[j] === 'O' || arr[j] === 'U'){
        char += arr[j]
      }
      else if(arr[j] === arr[j].toUpperCase()){
        char += arr[j].toLowerCase()
      }
      else{
        char += arr[j]
      }
    }
    return char
  }

  //Other solutions
  function changer(str) { 
    var a='AbcdEfghIjklmnOpqrstUvwxyz';
    var s='zabcdefghijklmnopqrstuvwxy';
    var ans='';
    str=str.toLowerCase();
    for (var i=0; i<str.length; ++i)
      if (str[i]>='a' && str[i]<='z')
        ans+=a[s.indexOf(str[i])];
      else
        ans+=str[i];
    return ans;
  }