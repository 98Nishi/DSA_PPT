/*18. 4Sum
Question 2
Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:
 ● 0 <= a, b, c, d < n
 ● a, b, c, and d are distinct.
 ● nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.
Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]*/

const fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    const results = []
    kSum(nums, target, 4, 0, [], results)
    return results
  }
  
  function kSum(nums, target, k, i, acc, results) {
    if (nums[i] * k > target || nums[nums.length - 1] * k < target) return
    if (k > 2) {
      for (let j = i; j <= nums.length - k; j++) {
        if (j == i || nums[j] > nums[j - 1])
          kSum(nums, target - nums[j], k - 1, j + 1, [...acc, nums[j]], results)
      }
    } else {
      twoSum(nums, target, i, acc, results)
    }
  }
  
  function twoSum(nums, target, i, acc, results) {
    let p1 = i
    let p2 = nums.length - 1
    while (p1 < p2) {
      const sum = nums[p1] + nums[p2]
      if (sum == target) {
        results.push([...acc, nums[p1], nums[p2]])
        while (nums[p1] == nums[p1 + 1]) p1++
        while (nums[p2] == nums[p2 - 1]) p2--
        p1++
        p2--
      } else if (sum < target) {
        p1++
      } else {
        p2--
      }
    }
  }
  const nums = [1,0,-1,0,-2,2], target = 0;
  const result =  fourSum(nums,target);
  console.log(result);