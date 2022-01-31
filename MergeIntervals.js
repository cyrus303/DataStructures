/* 
Merge Intervals
Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, and return an array of the non-overlapping 
intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].


Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/
intervals = [
  [1, 4],
  [0, 2],
  [3, 5],
];

array = merge(intervals);
console.log(array);

function merge(array) {
  if (!array.length) return array;

  array.sort(function (a, b) {
    return a[0] - b[0];
  }); // array.sort((a,b) => a[0] - b[0])

  for (let i = 0; i < array.length - 1; i++) {
    curr_second = array[i][1];
    next_first = array[i + 1][0];
    next_second = array[i + 1][1];

    if (curr_second >= next_first) {
      //compare if its greater
      array[i][1] = Math.max(curr_second, next_second); //assign max to current_second
      array.splice(i + 1, 1); // remove element from the array
      i--; // decriment coz we have removed one element
    }
  }
  return array;
}
