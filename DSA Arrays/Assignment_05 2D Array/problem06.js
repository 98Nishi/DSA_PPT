/*
Q6:442. Find All Duplicates in an Array
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.
Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3] */


const findDuplicates = function(nums) {
    if (nums === null || nums.length <= 1) {
        return [];
    }

    let dup = []; // Initialize an empty array to store the duplicate elements

    for (let i = 0, n = nums.length; i < n; i++) {
        let next = Math.abs(nums[i]); // Get the absolute value of the current number

        if (nums[next - 1] < 0) {
            dup.push(next); 
        } else {
            nums[next - 1] = -nums[next - 1]; 
        }
    }

    return dup; // Return the array containing the duplicate elements
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const allDuplicates = findDuplicates(nums);
console.log(allDuplicates); // Output: [2, 3]



  