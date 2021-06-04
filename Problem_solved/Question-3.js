/**
 * Summation
 * Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
 * For example: summation(2) -> 3
 * 1 + 1.9
*/


/**
 * Expectation
 *  sunmation(8) -> 36
 *  @params number
 * @output number 
*/

const Summation = num =>{
  for(let i =1; i <= num; i++){console.log(i += num+1)}
}
// (summation(1), 1)
// (summation(8), 36)

Summation(2) // 3
Summation(8) // 36

