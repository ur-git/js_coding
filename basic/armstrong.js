// get last digit as remainder when % by 10
// get remaining digits as dividend when / 10

function isArmstrong(number) {
  if (isNaN(number)) {
    console.log("Enter valid number");
    return;
  }
  let numberOfDigits = number.toString().length;
  let temp = number;
  let sum = 0;

  while (temp > 0) {
    let lastDigit = temp % 10;
    sum += Math.pow(lastDigit, numberOfDigits);
    temp = Math.floor(temp / 10);
  }

  if (sum === number) {
    return "this is armstrong";
  }

  return false;
}

console.log(isArmstrong(153));
