/** 
 * Binary Seacrg
 * input -sorted arrau
 */

 function BinarySearch(value, arr){
   let start = 0;
   let end = arr.length -1
   while(start <= end){
     const middle = Math.floor((start + end) / 2)
     const element = arr[middle]

     if(element > value){
       end = middle - 1
     }else if(element < value){
       start = middle + 1
     }else{
       return middle
     }
   }
   return -1
 }

 console.log("['Binary']", BinarySearch('D', ['A','Z' ,'D', 'E', 'B', 'C']))