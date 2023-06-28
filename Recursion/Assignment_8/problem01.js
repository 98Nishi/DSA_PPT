/*712. Minimum ASCII Delete Sum for Two Strings
Q1: Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to make two strings equal.

Example 1:
Input: s1 = "sea", s2 = "eat"
Output: 231
Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

Deleting "t" from "eat" adds 116 to the sum.

At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this. */

const minimumDeleteSum = (s1, s2) => {
  const m = s1.length; // Length of string s1
  const n = s2.length; // Length of string s2

  const dp = new Array(n + 1).fill(0); // Create an array to store the dynamic programming values

  // Initialize the first row of dp array
  for (let j = 1; j <= n; j++) {
    dp[j] = dp[j - 1] + s2.charCodeAt(j - 1); // Calculate the cumulative ASCII value of characters in s2
  }

  // Iterate through each character of s1
  for (let i = 1; i <= m; i++) {
    let t1 = dp[0]; // Store the previous value of dp[j] (for j = 0)
    dp[0] += s1.charCodeAt(i - 1); // Update dp[0] by adding the ASCII value of the current character of s1

    // Iterate through each character of s2
    for (let j = 1; j <= n; j++) {
      const t2 = dp[j]; // Store the current value of dp[j]
      // Update dp[j] based on the comparison between characters of s1 and s2
      dp[j] =
        s1[i - 1] === s2[j - 1]
          ? t1
          : Math.min(
              dp[j] + s1.charCodeAt(i - 1),
              dp[j - 1] + s2.charCodeAt(j - 1)
            );
      t1 = t2; // Update t1 for the next iteration
    }
  }

  return dp[n]; // Return the final value in dp, which represents the minimum delete sum
};

// Example usage:
const s1 = "sea";
const s2 = "eat";
console.log(minimumDeleteSum(s1, s2)); // Output: 231
