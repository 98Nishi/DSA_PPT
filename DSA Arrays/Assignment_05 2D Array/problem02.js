/*Q2: 441. Arranging Coins
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return *the number of complete rows of the staircase you will build*.

Example 1:
Input: n = 5

Output: 2

Explanation:  Because the 3rd row is incomplete, we return 2. */

const arrangeCoins = function(n) {
    let count = 0; // Initialize a variable to store the count of complete rows
    
    for (let i = 1; i <= n; i++) { // Iterate from 1 up to n
        n = n - i;
        count++; // Increment the count of complete rows
    }
    
    return count; // Return the count of complete rows
};

const n = 5;
const coins = arrangeCoins(n); 
console.log(coins); // Output the count of complete rows

