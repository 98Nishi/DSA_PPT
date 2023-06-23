/*136. Single Number
Question 6
Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only
constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1 */

var singleNumber = function(nums) {
    let res = 0;
    // Length of the input array
    let len = nums.length;
    for (let i = 0; i < len; i++) {
    // XOR operation between the accumulated result and the current element
      res ^= nums[i];
    }

    return res;// return the final result
   
  };
  const nums = [2,2,1];
  const singlenumber = singleNumber(nums);
  console.log(singlenumber);// output 1