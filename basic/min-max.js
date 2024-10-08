//with built-in js methods
function findMinMax(arr) {
    const maxnumber = Math.max(...arr);
    const minNumber = Math.min(...arr);
    return `min ${minNumber}, max ${maxnumber}`;
  }
  
  //without Built-in js method
  function findMinMax(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  
    return `min ${min}, max ${max}`
  }
  
  console.log(findMinMax([10, 20, 11, 35, 12, 40, 13, 65, 14, 78, 16]));
  