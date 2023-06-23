// 217. Contains Duplicate
/*Q6.Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true*/

const containsDuplicate = function(nums) {
    const hash = {};
    for (let el of nums) {
      if (hash[el] !== undefined) {
        return true;
      } else {
        hash[el] = true;
      }
    }
    return false;
  };
  const nums = [1,2,3,1];
  const result = containsDuplicate(nums);
  console.log(result);