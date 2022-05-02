const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(t) {
  if(!t){
    return 'Unable to determine the time of year!';
  } else if(typeof (t.getMonth) !== 'function'){
    throw new Error('Invalid date!');
  } else if(Object.getOwnPropertyNames(t).length > 0){
    throw new Error('Invalid date!');
  }else {

    m = t.getMonth();
    if(m <= 1 || m == 11){
      return 'winter';
    } else if(m >= 2 && m < 5){
      return 'spring';
    } else if(m >= 5 && m < 8){
      return 'summer';
    } else return 'autumn';

  }
}

module.exports = {
  getSeason
};
