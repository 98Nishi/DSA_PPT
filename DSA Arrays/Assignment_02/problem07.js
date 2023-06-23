/*896. Monotonic Array
Question 7
An array is monotonic if it is either monotone increasing or monotone decreasing.
An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].
Given an integer array nums, return true if the given array is monotonic, or false otherwise.
Example 1:
Input: nums = [1,2,2,3]
Output: true*/

const isMonotonic = function(nums) {
    let increase = true;
  let decrease = true;

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
          increase = false;
      }
      if (nums[i] > nums[i - 1]) {
          decrease = false;
      }
  }

  return increase || decrease;  
};

const nums = [1,2,2,3];
const res = isMonotonic(nums);

console.log(res); //output true
//Time complexity O(n)
// Space complexity O(1)