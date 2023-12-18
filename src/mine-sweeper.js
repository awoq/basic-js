const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let msfield = [];
  const ilength = matrix.length;
  const jlength = matrix[0].length;
  for(let i = 0; i < ilength; i++){
      msfield[i] = [];
      for(let j = 0; j < jlength; j++){
        const iStart = i === 0 ? 0 : i - 1;
        const jStart = j === 0 ? 0 : j - 1;
        const iEnd = i === ilength - 1 ? i : i + 1;
        const jEnd = j === jlength - 1 ? j : j + 1;
          let sum = 0;
          for(let n = iStart; n <= iEnd; n++){
              for(let k = jStart; k <= jEnd; k++){
                  if(!(n===i && k===j)){
                      if(matrix[n][k]) sum++;
                  }
              }
          }
          msfield[i].push(sum);
      }
  }
  return msfield
}

module.exports = {
  minesweeper
};
