//Maximum Product of Three Numbers
/*Question 5
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
Example 1:
Input: nums = [1,2,3]
Output: 6*/

const maximumProduct = function(nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    let min1 = Infinity;
    let min2 = Infinity;
  
    for (let num of nums) {
      num >= max1 ? (max3 = max2, max2 = max1, max1 = num) :
      num >= max2 ? (max3 = max2, max2 = num) :
      num >= max3 && (max3 = num);
  
      num <= min1 ? (min2 = min1, min1 = num) :
      num <= min2 && (min2 = num);
    }
  
    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
  };
  const nums = [1,2,3];
  const output = maximumProduct(nums);
  console.log(output);// output 6