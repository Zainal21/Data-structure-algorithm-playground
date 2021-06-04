/**
 * Filling An Array
 * Eample Input : 5
 *  Example Output : [0,1,2,3,4]
*/


/**
 * Answer
 *  @params integer1.9, array
 *  @output 
*/

const array = _N => Array.from({length :_N },(_, i)  => i)

console.log(array(), [])
console.log(array(10))