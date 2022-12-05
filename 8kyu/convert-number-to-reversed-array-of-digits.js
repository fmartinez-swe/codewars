//Problem
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):

35231 => [1,3,2,5,3]
0 => [0]

//My solution
function digitize(n) {
  let arr = []
  let numString = n.toString()
  for(let i = 0; i < numString.length; i ++){
    arr.push(+numString[i])
  }
  let reversed = arr.reverse()
  return reversed
}

//Other solutions
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}
