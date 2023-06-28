/*941. Valid Mountain Array
Q3: Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Example 1:
Input: arr = [2,1]
Output: false
 */

var validMountainArray = function(arr) {
    const n = arr.length;
    
    if (n < 3) return false;
    
    let f = false;
    
    for (let i = 1; i < arr.length - 1; i++) {
        const curr = arr[i];
        const prev = arr[i - 1];
        const next = arr[i + 1];
        
        if (curr > prev && curr > next) {
            f = true;
        }
        else if (prev >= curr && next >= curr) {
            return false;
        }
    }
    
    return f;
};
  const arr = [2,1];
  const validArr = validMountainArray(arr);
  console.log(validArr); //Output: false