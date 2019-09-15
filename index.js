// Code your solution in this file
function findMatching(arr, criteria) {
  return arr.filter(function(obj) {
    return Object.keys(criteria).every(function(c) {
      return obj[c] === criteria[c];
    });
  });
}
