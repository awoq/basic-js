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
  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  let separator = options.separator !== undefined ? String(options.separator) : "+";
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : "|";
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let repStr = '';
  for(let i = 0; i < repeatTimes; i++) {
    repStr += String(str);
      for(let j = 0; j < additionRepeatTimes; j++) {
        repStr += addition;
        if(j < additionRepeatTimes - 1) repStr += additionSeparator;
      }
      if(i < repeatTimes - 1) repStr += separator;
  }
  return repStr;
}

module.exports = {
  repeater
};
