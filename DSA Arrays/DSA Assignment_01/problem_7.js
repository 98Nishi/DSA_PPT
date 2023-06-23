// 283. Move Zeroes
/*Q7.Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.
Note that you must do this in-place without making a copy of the array.
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]*/

const moveZeroes = function(nums) {
    let nonZero = 0;
  
    // Move all the non-zero elements to the front of the array
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[nonZero] = nums[i];
        nonZero++;
      }
    }
  
    // Fill the remaining positions with zeros
    for (let i = nonZero; i < nums.length; i++) {
      nums[i] = 0;
    }
    
    return nums;
  };
  
  const nums = [0, 1, 0, 3, 12];
  console.log(moveZeroes(nums));
  // Time complexity==>O(n)
// Space complexity==>O(n)