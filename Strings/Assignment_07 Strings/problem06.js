/*796. Rotate String
Q6: Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

- For example, if s = "abcde", then it will be "bcdea" after one shift.

Example 1:
Input: s = "abcde", goal = "cdeab"
Output: true */

const rotateString = (s, goal) => {
    // Check if the lengths of s and goal are different
    if (s.length !== goal.length) {
      return false;
    }
  
    // Concatenate s with itself to create all possible rotations
    const concatenated = s + s;
  
    // Check if the concatenated string includes goal
    return concatenated.includes(goal);
  }
  
  const s = "abcde";
  const goal = "cdeab";
  const rotateStr = rotateString(s, goal)
  console.log(rotateStr); // Output: true
  