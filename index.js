// Code your solution in this file
function findMatching(arr, criteria) {
  return arr.filter(function(obj) {
    return Object.keys(criteria).every(function(c) {
      return obj[c].lower.charAt(0).toUpperCase() + lower.substring(1) === criteria[c].lower.charAt(0).toUpperCase() + lower.substring(1);
    });
  });
}



function fuzzyMatch(){

}
