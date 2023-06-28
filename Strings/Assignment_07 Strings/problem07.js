/*844. Backspace String Compare
Q7: Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation:
Both s and t become "ac". */

const backspaceCompare =  function (s, t) {
    function processString(str) {
      const stack = []; 
    
      for (let char of str) {
        if (char !== '#') {
          stack.push(char); // Push non-backspace characters to the stack
        } else {
          stack.pop(); // Pop the top character from the stack for backspace
        }
      }
    
      return stack.join(''); // Join the remaining characters in the stack
    }
    
    // Compare the processed strings 
    return processString(s) === processString(t);
  }

  const s = "ab#c";
  const t = "ad#c";
  const result = backspaceCompare(s, t);
  console.log(result); // Output: true
  