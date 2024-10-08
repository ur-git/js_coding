// Array.sort() - converts array elemets to string and sorted according to each characters unicode point value

// using js built-in method
function sortArray(arr) {
  const sortedArray = arr.sort();
  return sortedArray;
}

//wthout built-in method
// insertion sort is fastest for small array
// Best case: O(n) , If the list is already sorted, where n is the number of elements in the list.
// Average case: O(n 2 ) , If the list is randomly ordered
// Worst case: O(n 2 ) , If the list is in reverse order
function sortSimpleArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(
  sortSimpleArray([86.999385869, 67.2645807464, 12.5768967449, 55.978746363])
);
