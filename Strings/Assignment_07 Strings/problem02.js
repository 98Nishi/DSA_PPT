/*Strobogrammatic Number
Q2: Given a string num which represents an integer, return true if num is a strobogrammatic number.

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Example 1:

Input: num = "69"

Output: true */

const isStrobogrammatic = function(num) {
    const map = {
        6: "9",
        9: "6",
        1: "1",
        0: "0",
        8: "8"
    };

    // Iterate over half of the string
    for (let i = 0; i < num.length / 2; i++) {
        // Check if the current digit and its counterpart have a valid mapping
        if (num[i] !== map[num[num.length - 1 - i]]) {
            return false;
        }
    }
    // If all pairs of digits have valid mappings, return true
    return true;
};
const num = "69";
const res = isStrobogrammatic(num);

console.log(res);

