/*908. Smallest Range I
Question 8
You are given an integer array nums and an integer k.
In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.
The score of nums is the difference between the maximum and minimum elements in nums.
Return the minimum score of nums after applying the mentioned operation at most once for each index in it.
Example 1:
Input: nums = [1], k = 0
Output: 0

Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.*/

const smallestRangeI = function(nums, k) {
 
    // Initialize min and max to the extreme values to ensure any element will update them
    let min = Infinity, max = -Infinity;

    for (let e of nums) {
      min = Math.min(min, e);
      max = Math.max(max, e);

    }
    
    // Check if the difference between the maximum and minimum values is greater than 2*k
    // If it is, return the difference minus 2*k
    // Otherwise, return 0 since the difference can't be reduced further
    return max - k >= min + k ? max - k - (min + k) : 0;
  };
  const nums = [1];
  const k = 0;
  const output = smallestRangeI(nums,k);

  console.log(output); //output 0
// Time complexity O(n)
//Space complexity O(1) 