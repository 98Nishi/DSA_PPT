/*74. Search a 2D Matrix
Q2: You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true */


const searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let row = m - 1;
    let col = 0;
  
    while (row >= 0 && col < n) {
      if (matrix[row][col] === target) {
        return true;
      } else if (matrix[row][col] < target) {
        col++;
      } else {
        row--;
      }
    }
  
    return false;
  };
  const  matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
  const target = 3;
  const mat = searchMatrix(matrix, target);
  console.log(mat);