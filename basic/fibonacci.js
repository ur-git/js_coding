// fibonacci series : 1, 1, 2, 3, 5, 8....
function fibonacci(number) {
  if (isNaN(number)) {
    console.log("Enter a valid number");
    return;
  }
  let arr = [1];
  let s1 = 0,
    s2 = 1;

  for (let i = 1; i < number; i++) {
    let result = s1 + s2;
    arr = [...arr, result];
    s1 = s2;
    s2 = result;
  }

  return arr;
}

console.log(fibonacci(10));
