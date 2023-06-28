/*2007. Find Original Array From Doubled Array
Q6: An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.

Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.

Example 1:
Input: changed = [1,3,4,2,6,8]
Output: [1,3,4]
Explanation: One possible original array could be [1,3,4]:

- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.
Other original arrays could be [4,3,1] or [3,1,4]. */

const findOriginalArray = function(changed) {
    const ans = [];
    const map = {};
    changed.sort((a, b) => a - b);
  
    for (const val of changed) {
      const target = val / 2;
      if (target in map) {
        map[target]--;
        if (map[target] === 0) delete map[target];
        ans.push(target);
      } else {
        map[val] = (map[val] || 0) + 1;
      }
    }
  
    return Object.keys(map).length === 0 ? ans : [];
  };
const changed = [1, 3, 4, 2, 6, 8];
const original = findOriginalArray(changed);
console.log(original);//[1,3,4]
