// Code your solution in this file
function findMatching(arr, criteria1) {
  let criteria = criteria1.charAt(0).toUpperCase() + criteria1.slice(1);
  return arr.filter(function(obj) {
    return Object.keys(criteria).every(function(c) {
      debugger
      return obj[c] === criteria[c];

    });
  });
}



function fuzzyMatch(arr, criteria){

}
