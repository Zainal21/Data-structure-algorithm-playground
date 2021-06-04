/**
 * Fibonaci
 * @params array number
 * @returns integer         
*/
let value = 1;
let current_value = 2

function Fibonaci(paramas_length){
  for(let i = 0; i < paramas_length; i++){
    let output = value + current_value
    value = current_value;
    current_value = output
    console.log(current_value)
  }
}
Fibonaci(10)
console.log('=====')
Fibonaci(11)
console.log('=====')
Fibonaci(12)