const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let k = 0.693/HALF_LIFE_PERIOD;
  let samActive = Number(sampleActivity);
  let t = 0;
  if((typeof(sampleActivity) == 'string') && (samActive) && (samActive <= 15) && (samActive > 0)){
    t = -((Math.log(samActive/MODERN_ACTIVITY))/k);
    t = Math.ceil(t);
    return t;
  } else return false;
}

module.exports = {
  dateSample
};
