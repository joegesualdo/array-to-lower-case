function arrayToLowerCase(arr){
  var tmp = arr.join('~').toLowerCase()
  var lowerCaseArray = tmp.split('~')
  return lowerCaseArray;
}

module.exports = arrayToLowerCase;

