/*
Q8: 2007. Find Original Array From Doubled Array
An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.

Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.
Example 1:
Input: changed = [1,3,4,2,6,8]
Output: [1,3,4]
Explanation: One possible original array could be [1,3,4]:

- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.

Other original arrays could be [4,3,1] or [3,1,4] */

const findOriginalArray = function(changed) {
    if (changed.length % 2 !== 0) {
      return []; // If the length of the changed array is odd, it cannot be a valid doubled array
    }
  
    const cnts = new Map();
    for (const x of changed) {
      cnts.set(x, (cnts.get(x) || 0) + 1); // Count the occurrences of each number in the changed array using a Map
    }
  
    const nums = Array.from(cnts.keys()).sort((a, b) => a - b); // Create an array of distinct numbers in ascending order
  
    const result = [];
    for (const x of nums) {
      if (cnts.get(x) > cnts.get(2 * x)) {
        return []; // If the count of x is greater than the count of its double, it cannot be a valid doubled array
      }
      for (let i = 0; i < cnts.get(x); i++, cnts.set(2 * x, cnts.get(2 * x) - 1)) {
        result.push(x); 
      }
    }
  
    return result; // Return the reconstructed original array
  };
  

  const changed = [1, 3, 4, 2, 6, 8];
  const original = findOriginalArray(changed);
  console.log(original); // Output: [1, 3, 4]
  

