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
  if(typeof(str) !== 'string'){
    str = str.toString();
  }

  if(separator == undefined){
    separator = '+';
  } else if(additionSeparator == undefined){
    additionSeparator = '|';
  } else if(additionRepeatTimes == undefined && repeatTimes == undefined){
    return [str, options.addition].join('');
  }

  let arrAdd = [];
  for(i=0; i<additionRepeatTimes; i++){
    arrAdd.push(options.addition);
  }
  let addition = arrAdd.join(additionSeparator);

  let arrStr = [];
  for(i=0; i<repeatTimes; i++){
    arrStr.push(str + addition);
  }

  return arrStr.join(separator);
}

module.exports = {
  repeater
};
