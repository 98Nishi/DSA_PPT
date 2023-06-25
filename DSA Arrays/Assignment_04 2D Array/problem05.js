/*Q5 You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.
Given the integer n, return the number of complete rows of the staircase you will build..
Example 1:
Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2. */

const arrangeCoins = function(n) {
    let count = 0;
     for (let i = 1; i <= n; i++) {
         n = n - i;
         count++;
     }
     return count;
};
const n = 5;
const res = arrangeCoins(n);

console.log(res); // Output: 2
  //Time complexity: O(n)
  //Space complexity: O(1)