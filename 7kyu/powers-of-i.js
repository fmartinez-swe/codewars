//Problem
/*
Description:

iii is the imaginary unit, it is defined by i²=−1i² = -1i²=−1, therefore it is a solution to x²+1=0x² + 1 = 0x²+1=0.
Your Task

Complete the function pofi that returns iii to the power of a given non-negative integer in its simplest form, as a string (answer may contain iii).
*/

//My solution

function pofi(n){
  const arr = ['1', 'i', '-1', '-i']
  if(n < 4){
    return arr[n]
  }else{
    do{
      n = n - 4
    }while(n >= 4)
      return arr[n]
  }
}

//Other solutions
function pofi(n){
  return ["1","i","-1","-i"][n%4];
}

function pofi(n){
  switch (n%4) {
    case 0: return '1'
    case 1: return 'i'
    case 2: return '-1'
    case 3: return '-i'
  }
}
