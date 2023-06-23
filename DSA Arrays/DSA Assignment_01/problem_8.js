// 645. Set Mismatch
/*Q8.You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
You are given an integer array nums representing the data status of this set after the error.
Find the number that occurs twice and the number that is missing and return them in the form of an array.
Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]*/

const findErrorNums = function(nums) {
    if(nums == null || nums.length === 0) return null
    const res = []
    const hash = {}
    for(let el of nums) {
      if(hash.hasOwnProperty(el)){
        res[0] = el
      } else hash[el] = 0
      hash[el]++
    }
    for(let i = 1, len = nums.length; i <= len; i++) {
      if(!hash.hasOwnProperty(i)) {
        res[1] = i
        break
      }
    }
    return res 
  };
  const nums = [1,2,2,4];
  const result = findErrorNums(nums);
  console.log(result);