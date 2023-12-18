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
  const array = String(n).split('').map(elem => Number(elem));
    return array.reduce((previous, elem, index, arr) => { 
        let copy = arr.slice(0);
        copy.splice(index, 1);
        return Math.max(Number(copy.join('')), previous);
    }, 0);
  
}

module.exports = {
  deleteDigit
};
