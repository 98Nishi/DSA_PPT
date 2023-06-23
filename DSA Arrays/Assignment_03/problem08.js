/*Meeting Rooms
Question 8
Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false */

   const canAttendMeetings = function(intervals) {
    // Check if intervals array is null
    if (intervals === null) return false;
  
    // Check if intervals array is empty
    if (intervals.length === 0) return true;
    
    // Sort intervals array based on start times
    intervals.sort((a, b) => {
      return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
    });
  
    // Check for any overlapping intervals
    for (let i = 1; i < intervals.length; i++) {
      // If start time of current interval is less than end time of previous interval, there is a conflict
      if (intervals[i][0] < intervals[i - 1][1]) return false;
    }
  
    // No overlapping intervals found, can attend all meetings
    return true;
  };
  const  intervals = [[0,30],[5,10],[15,20]];
  console.log(canAttendMeetings(intervals));