/*Q4:2215. Find the Difference of Two Arrays
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2
 where:
- answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
- answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

Note that the integers in the lists may be returned in any order.
Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]

Output: [[1,3],[4,6]]

Explanation:

For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6]. */


const findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1), // Create a set of distinct integers from nums1
        set2 = new Set(nums2); // Create a set of distinct integers from nums2

    for (let num of nums1) {
        set2.delete(num); // Remove elements from set2 that are present in nums1
    }

    for (let num of nums2) {
        set1.delete(num); // Remove elements from set1 that are present in nums2
    }

    return [Array.from(set1), Array.from(set2)]; // Convert sets to arrays and return the result
};

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const diff = findDifference(nums1, nums2);

console.log(diff); // Output: [[1, 3], [4, 6]]
