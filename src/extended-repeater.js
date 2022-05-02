const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options.separator;
  let additionSeparator = options.additionSeparator;
  let repeatTimes = options.repeatTimes;
  let additionRepeatTimes = options.additionRepeatTimes;
  let addition = options.addition;
  if(typeof(str) !== 'string'){
    str = String(str);
  }
  if(typeof(options.addition) !== 'string'){
    addition = String(options.addition);
  }
  if(options.separator == undefined){
    separator = '+';
  }
  if(additionRepeatTimes == undefined && repeatTimes == undefined){
    return [str, options.addition].join('');
  }

  let arrAdd = [];
  for(i=0; i<additionRepeatTimes; i++){
    arrAdd.push(addition);
  }
  let addit;
  if(options.additionSeparator){
    addit = arrAdd.join(additionSeparator);
  } else {
    addit = arrAdd.join('|');
  }

  let arrStr = [];
  for(i=0; i<repeatTimes; i++){
    arrStr.push(str + addit);
  }

  return arrStr.join(separator);
}

module.exports = {
  repeater
};
