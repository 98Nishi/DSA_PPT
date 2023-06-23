/* 31. Next Permutation
Q3:A permutation of an array of integers is an arrangement of its members into a
sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr:
[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

The next permutation of an array of integers is the next lexicographically greater
permutation of its integer. More formally, if all the permutations of the array are
sorted in one container according to their lexicographical order, then the next
permutation of that array is the permutation that follows it in the sorted container.

If such an arrangement is not possible, the array must be rearranged as the
lowest possible order (i.e., sorted in ascending order).
● For example, the next permutation of arr = [1,2,3] is [1,3,2].
● Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
● While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.
The replacement must be in place and use only constant extra memory.
Example 1:
Input: nums = [1,2,3]
Output: [1,3,2]*/

const nextPermutation = function(nums) {
    // Find the first pair from the right where nums[i] < nums[i+1]
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      // Find the smallest element in the subarray to the right of nums[i] that is greater than nums[i]
      let j = nums.length - 1;
      while (j > i && nums[j] <= nums[i]) {
        j--;
      }
  
    //   Swap nums[i] and nums[j]
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  
    // Reverse the subarray
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  
    return nums;
  }
  
 
  const nums = [1, 2, 3];
  const nextpermutation = nextPermutation(nums);
  console.log(nextpermutation); // Output: [1, 3, 2]
//   Time complexity:O(n)
// Space complexity:O(1)

 