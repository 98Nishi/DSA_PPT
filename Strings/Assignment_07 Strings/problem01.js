/*205. Isomorphic Strings
Q1: Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
Example 1:
Input: s = "egg", t = "add"
Output: true */


const isIsomorphic = function(s, t) {
    let x = {}; // Mapping from characters in s to characters in t
    let y = {}; // Mapping from characters in t to characters in s

    for (let i = 0; i < s.length; i++) {
        if (!x[s[i]] && !y[t[i]]) {
            // If the current characters in s and t are not mapped yet,
            // establish the mapping in both x and y objects
            x[s[i]] = t[i];
            y[t[i]] = s[i];
        } else if (x[s[i]] !== t[i] || y[t[i]] !== s[i]) {
            // If the mapping is already established, check if it is consistent.
            // If not, return false.
            return false;
        }
    }
    // If all characters are mapped consistently, return true.
    return true;
};

let s = "egg";
let t = "add";
let result = isIsomorphic(s, t);
console.log(result);

