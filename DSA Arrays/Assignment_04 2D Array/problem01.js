/* 1213 Intersection of Three Sorted Arrays
Q1: Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.
Example 1:
Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
Output: [1,5]

Explanation:Only 1 and 5 appeared in the three arrays. */

 const intersection = function(arr1, arr2, arr3) {
    const result = [];
    let i = j = k = 0; // Pointers for arr1, arr2, and arr3 respectively
  
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
      if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
        result.push(arr1[i]);
        i++;
        j++;
        k++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else if (arr2[j] < arr3[k]) {
        j++;
      } else {
        k++;
      }
    }
  
    return result;
  }
  
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 5, 7, 9];
  const arr3 = [1, 3, 4, 5, 8];
  
  const result = intersection(arr1, arr2, arr3);
  console.log(result); // Output: [1, 5]
  //Time complexity: O(n)
  //Space complexity: O(1)
  