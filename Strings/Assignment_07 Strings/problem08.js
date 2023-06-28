/*
1232. Check If It Is a Straight Line
Q8: You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
Example 1:
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true */


const checkStraightLine = (coordinates) => {
    const [x1, y1] = coordinates[0]; // Extract the x and y coordinates of the first point
    const [x2, y2] = coordinates[1]; // Extract the x and y coordinates of the second point
  
    for (let i = 2; i < coordinates.length; i++) {
      const [x, y] = coordinates[i]; // Extract the x and y coordinates of the current point
  
      // Check if the slopes between the first two points and the current point are equal
      if ((x2 - x1) * (y - y1) !== (x - x1) * (y2 - y1)) {
        return false; // If the slopes are different, the points do not lie on a straight line
      }
    }
  
    return true; 
  };
  
  // Example usage:
  const coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
  console.log(checkStraightLine(coordinates)); // Output: true
  