Your task is to sum the differences between consecutive pairs in the array in descending order.


Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

//My Solution
function sumOfDifferences(arr) {
  let sorted = arr.sort((a, b) => (b-a))

  let tally = 0
  for(let i = 0; i < sorted.length - 1; i++){
   tally = (sorted[i] - sorted[i+1]) + tally
  }
 return tally
}

//Other solutions
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
