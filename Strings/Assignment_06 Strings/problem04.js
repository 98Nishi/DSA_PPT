/*525. Contiguous Array
Q4: Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of 0 and 1.
Example 1:
Input: nums = [0,1]
Output: 2
Explanation:

[0, 1] is the longest contiguous subarray with an equal number of 0 and 1. */


const findMaxLength = function(nums) {
    let res = 0, sum = 0
    const hash = {0: -1}, n = nums.length
    
    for(let i = 0; i < n; i++) {
        const cur = nums[i]
        sum += cur === 0 ? -1 : 1
        if(hash[sum] != null) {
            res = Math.max(res, i - hash[sum])
        } else {
            hash[sum] = i
        }
        
    }
    
    return res
  };
  const nums = [0,1];
  const result = findMaxLength(nums);
  console.log(result); //Output:2