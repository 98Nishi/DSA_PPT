/*942. DI String Match
Q1: A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.
Example 1:
Input: s = "IDID"
Output:
[0,4,1,3,2] */

  const diStringMatch = function (s) {
    let min = 0,
      max = s.length;
  
    let result = [];
    for (let i = 0; i < s.length + 1; i++) {
      if (s[i] === "I") {
        result.push(min);
        min += 1;
      } else {
        result.push(max);
        max -= 1;
      }
    }
    return result;
  };
   const s = "IDID";
   const str = diStringMatch(s);
   console.log(str);
