/*977. Squares of a Sorted Array
Q6:Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100] */

var sortedSquares = function(nums) {
    let result = [];
    // Left and right pointer
    let l = 0;
    let r = nums.length - 1;
    let p = r;

    // Add the higher number to the nums and then decrease the pointer
    while (l <= r) {
        if (nums[l] ** 2 > nums[r] ** 2) {
            result[p--] = nums[l++] ** 2;
        } else {
            result[p--] = nums[r--] ** 2;
        }
    }

    return result;
};
const nums = [-4,-1,0,3,10];
const result = sortedSquares(nums);
console.log(result);