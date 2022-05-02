const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let arrNum = [];
  for(i=0; i<arr.length; i++){
    let elem = arr[i];
    arr.splice(i, 1);
    let n = arr.join('');
    arrNum.push(n);
    arr.splice(i, 0, elem);
  }
  console.log(arrNum);
  return Math.max.apply(null, arrNum);
}

module.exports = {
  deleteDigit
};
