/**
 * Linear Sarch
 * 
 */

function LinearSearch(value, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value){return i}
  }
  return -1
}

console.log("['linearSearch']", LinearSearch('Riana', ['Zainal', 'Eka', 'Riana', 'Fidriyani']))