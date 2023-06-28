/*541. Reverse String II
Q5: Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

Example 1:
Input: s = "abcdefg", k = 2

Output: "bacdfeg" */

const reverseStr = function(s, k) {
    // Convert the string to an array for in-place letter swapping
    const a = s.split('');
  
    // Loop through the array in 2*k increments
    for (let start = 0; start < a.length; start += 2 * k) {
      let i = start;
      let j = Math.min(start + k - 1, a.length - 1);
  
      // Reverse the first k characters in the current increment
      while (i < j) {
        let tmp = a[i];
        a[i++] = a[j];
        a[j--] = tmp;
      }
    }
  
    // Return the reversed string by joining the array elements
    return a.join('');
  };
  const  s = "abcdefg", k = 2;
  const string  = reverseStr(s,k);
  console.log(string);// Output: "bacdfeg"
  