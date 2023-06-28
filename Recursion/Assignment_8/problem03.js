/*583. Delete Operation for Two Strings
Q3: Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.

In one step, you can delete exactly one character in either string.

Example 1:
Input: word1 = "sea", word2 = "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea". */

function minDistance(word1, word2) {
  function delmin(i, j) {
    if (i === -1) return j + 1; // Base case: word1 is empty, delete all characters in word2
    if (j === -1) return i + 1; // Base case: word2 is empty, delete all characters in word1

    if (word1[i] === word2[j]) {
      // Characters match, move to the next indices
      return delmin(i - 1, j - 1);
    }

    // Characters don't match, consider deletion
    const deleteFromWord1 = delmin(i - 1, j) + 1; // Delete character in word1
    const deleteFromWord2 = delmin(i, j - 1) + 1; // Delete character in word2
    return Math.min(deleteFromWord1, deleteFromWord2);
  }

  return delmin(word1.length - 1, word2.length - 1);
}

// Example usage:
const word1 = "sea";
const word2 = "eat";
const delWord = minDistance(word1, word2);
console.log(delWord); // Output: 2
