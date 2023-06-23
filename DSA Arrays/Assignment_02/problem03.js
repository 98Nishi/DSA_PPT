// 594. Longest Harmonious Subsequence
/*Q3:We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.
Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.
A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.
Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].*/
const findLHS = function (nums) {
    const map = nums.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1
      return acc
    }, {})
    return Object.keys(map).reduce((max, key) => {
      const nextKey = parseInt(key, 10) + 1
      if (map[nextKey] >= 0) {
        return Math.max(
          max,
          map[key] + map[nextKey],
        )
      }
      return max
    }, 0)
  };
  const nums = [1,3,2,2,5,2,3,7];
  const result = findLHS(nums);
  console.log(result);// output 5

//   Time complexity O(n)
// Space complexity O(n)
