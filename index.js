// Code your solution in this file
function findMatching(arr1, criteria1) {
  let arr = arr1.charAt(0).toUpperCase() + arr1.substring(1);
  let criteria = criteria1.charAt(0).toUpperCase() + criteria1.substring(1);

  return arr.filter(function(obj) {
    return Object.keys(criteria).every(function(c) {
      return obj[c] === criteria[c];
    });
  });
}



function fuzzyMatch(){

}
