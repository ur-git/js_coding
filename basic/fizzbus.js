// Fizz Buzz Problem involves that given an integer n, for every integer i <= n, the task is to print,

// ‘FizzBuzz’ if i is divisible by 3 and 5,
// ‘Fizz’ if i is divisible by 3,
// ‘Buzz’ if i is divisible by 5
// ‘i’ as a string, if none of the conditions are true.

// Input: n = 3
// Output: [1 2 Fizz]

// Input: n = 10
// Output: [1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz]

function fizzBuzz(number) {
  if (isNaN(number)) {
    this.alerts("enter valid number");
    return;
  }

  let arr = [];

  for (let i = 1; i <= number; i++) {
    let num =
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i;

    arr = [...arr, num];
  }

  return arr;
}

console.log(fizzBuzz(10));
