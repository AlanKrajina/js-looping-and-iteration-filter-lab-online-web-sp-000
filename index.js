// Code your solution in this file
function findMatching(arr1, criteria1) {
  let arr = arr1.replace(/^\w/, c => c.toUpperCase());
  let criteria = criteria1.replace(/^\w/, c => c.toUpperCase());

  return arr.filter(function(obj) {
    return Object.keys(criteria).every(function(c) {
      return obj[c] === criteria[c];
    });
  });
}



function fuzzyMatch(){

}
