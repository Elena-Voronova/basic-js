const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let count = 0;
  for(i=0; i<backyard.length; i++){
    for(j=0; j<backyard[i].length; j++){
      if(backyard[i][j] == '^^'){
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};
