function isPrimeNumber(number) {
  //1. check if input is number and and greater than 1
  if (!isNaN(number) && number > 1) {
    //set default flag
    let isPrime = true;

    //2. loop upto sqrt of number and check if it is divisible
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
      }
    }

    return isPrime;
  } else {
    return "Enter a valid number";
  }
}

console.log(isPrimeNumber(4));
