

// Func to perform insertion sort on array A
function insertionSort(A) {
    // Outer loop goes through each element in the array starting from the second element bcs there s nothing to the left of the first
    for (let i = 1; i < A.length; i++) {
      // Start with the current index i
      let j = i;
  
      // Inner loop to swap elements until the correct position is found
      // It runs as long as j is greater than 0 and the element at j-1 is greater than the element at j
      while (j > 0 && A[j - 1] > A[j]) {
        // Swap the elements A[j] and A[j-1]
        let temp = A[j];
        A[j] = A[j - 1];
        A[j - 1] = temp;
  
        // Move one position back
        j--;
      }
    }
  }
  
  // Example usage
  let array = [5, 2, 9, 1, 5, 6];
  console.log("Original Array:", array);
  
  insertionSort(array);
  
  console.log("Sorted Array:", array);
  