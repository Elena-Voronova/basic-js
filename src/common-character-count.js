const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let com = 0;
  for(i=0; i<arr1.length; i++){
    let index = arr2.indexOf(arr1[i]);
    if(index >= 0){
      arr2.splice(index, 1);
      com +=1;
    }
  }

  return com;
}

module.exports = {
  getCommonCharacterCount
};
