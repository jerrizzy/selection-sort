function selectionSort(arr) {
  // type your code here
  const sortedArray = arr.sort((a, b) => a - b)
  return sortedArray;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Writing the problem in my own words:
// sort an array by starting from the
// lowest value to the highest

// Please add your pseudocode to this file
// initialize an empty array

// iterate over the valued array:
  // take the index value and compare it to each element in the array
  // find the smallest value and swap it with the current element
  // repeat this process until the entire array is sorted

// return the sorted array

// And a written explanation of your solution
