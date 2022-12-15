//Problem
/*
Kata Task

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

    humanYears >= 1
    humanYears are whole numbers only

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that


*/

//My solution
var humanYearsCatYearsDogYears = function(humanYears) {
  let arr = []
  let firstYear = 15
  let secondYear = 9
  let moreThanTwoCat = (humanYears - 2) * 4
  let moreThanTwoDog = (humanYears - 2) * 5
  arr.push(humanYears)
  if(humanYears <= 1){
    arr.push(humanYears * firstYear)
    arr.push(humanYears * firstYear)
  }else if(humanYears <= 2){
    arr.push(firstYear + secondYear)
    arr.push(firstYear + secondYear)

  }else if(humanYears >= 3){
    arr.push(firstYear + secondYear + moreThanTwoCat)
    arr.push(firstYear + secondYear + moreThanTwoDog)
  }
  return arr;
}

//Other solutions
const humanYearsCatYearsDogYears = humanYears => [
  humanYears,
  ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
  ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
];

function humanYearsCatYearsDogYears(humanYears) {
  switch (humanYears) {
    case 1:
      return [1, 15, 15]
    case 2:
      return [2, 24, 24];
    default:
      return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
  }

}
