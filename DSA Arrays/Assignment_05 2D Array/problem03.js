/*Q3:977. Squares of a Sorted Array
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]. */

const sortedSquares = function(nums) {
    const squares = nums.map(num => num * num); // Square each number in the array
    squares.sort((a, b) => a - b); // Sort the squared numbers in non-decreasing order
    return squares; // Return the sorted array
};

const nums = [-4, -1, 0, 3, 10];
const squaredArr = sortedSquares(nums);
console.log(squaredArr); // Output: [0, 1, 9, 16, 100]
