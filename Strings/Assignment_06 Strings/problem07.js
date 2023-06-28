/*59. Spiral Matrix II
Q7: Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
Example 1:
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]] */


const generateMatrix = function(n) {
  let matrix = []
  for (let i = 0; i < n; i++) {
    matrix[i] = []
  }

  let top = 0
  let bottom = n - 1
  let left = 0
  let right = n - 1
  let num = 1

  while (num <= n * n) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++
    }
    top++

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++
    }
    right--

    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++
    }
    bottom--

    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++
    }
    left++
  }

  return matrix
};
const n = 3;
const spiralMat = generateMatrix(n);
console.log(spiralMat); // Output: [[1,2,3],[8,9,4],[7,6,5]]