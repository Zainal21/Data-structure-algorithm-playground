/**
 * Positive Sum 
 * You get an array of numbers, return the sum of all of the positives ones.
 * Example [1,-4,7,12] => 1 + 7 + 12 = 20
 *  Note: if there is nothing to sum, the sum is default to 0.
*/

/**
 * Expectation : 1,2,3,4,5 . all will be sum (Cara Barbar)
 *               1,-2, 3,4,5. -2 not sum
 *  @params array number
 * @returns integer         
*/

function PositiveSum(array_num){
  let total = 0;
  for(let i = 0; i < array_num.length; i++){
    if(array_num[i] > 0){
      total += array_num[i]
    }
  }
  return total
}
console.log("======= Cara Tata Krama ============");
console.log(PositiveSum([1,2,3,4,5]));
console.log(PositiveSum([1,-2,3,4,5]));
console.log(PositiveSum([]));
console.log(PositiveSum([-1,-2,-3,-4,-5]));
console.log(PositiveSum([-1,2,3,4,-5]));


/**
 * Expectation : 1,2,3,4,5 . all will be sum (Cara tata krama)
 *               1,-2, 3,4,5. -2 not sum
 *  @params array number
 * @returns integer         
*/

const sumPositive = (arr) => {
  arr.reduce((sum, number) => {
    number > 0 ? sum + number : sum  
  },0)
} 
console.log("======= Cara Tata Krama ============");
console.log(PositiveSum([1,2,3,4,5]));
console.log(PositiveSum([1,-2,3,4,5]));
console.log(PositiveSum([]));
console.log(PositiveSum([-1,-2,-3,-4,-5]));
console.log(PositiveSum([-1,2,3,4,-5]));
