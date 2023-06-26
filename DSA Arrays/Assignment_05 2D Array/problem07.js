/*
Q7:153. Find Minimum in Rotated Sorted Array
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

- [4,5,6,7,0,1,2] if it was rotated 4 times.
- [0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return *the minimum element of this array.

You must write an algorithm that runs in O(log n) time.
Example 1:
Input:  nums = [3,4,5,1,2]
Output: 1
Explanation:

The original array was [1,2,3,4,5] rotated 3 times. */


const findMin = function(nums) {
    let left = 0; // Initialize a variable 'left' as the start index of the array
    let right = nums.length - 1; // Initialize a variable 'right' as the end index of the array
    
    if (nums[left] < nums[right]) {
        return nums[0]; // Return the first element as the minimum element
    }
    
    while (left < right) {
        const mid = (left + right) >> 1; // Calculate the middle index using bit shifting
        
        if (nums[mid] > nums[right]) {
            left = mid + 1; // 
        } else {
            right = mid;
        }
    }
    
    return nums[left]; 
};
const nums = [3,4,5,1,2];
const min = findMin(nums);

console.log(min);// Output:1
