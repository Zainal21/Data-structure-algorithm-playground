// FizzBuzz

function FizzBuzz(_params){
  for(let i = 0 ; i < _params; i++){
    if(i % 3 == 0 && i % 5 == 0){
      console.log("FizzBuzz")
    }else if(i % 3 === 0){
      console.log('Fizz')
    }else if(i % 5 === 0){
      console.log('Buzz')
    }
  }
}
FizzBuzz(100)