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
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if(toString.call(date)!=='[object Date]') throw new Error("Invalid date!");
  if(Object.keys(date).length) throw new Error("Invalid date!");
  const currentMonth = date.getMonth();
  const seasons = new Map([
    ["winter", [11, 0, 1]],
    ["spring", [2, 3, 4]],
    ["summer", [5, 6, 7]],
    ["autumn", [8, 9, 10]]
  ]);
  for(const season of seasons){
    for(const month of season[1]){
        if(month === currentMonth){
         return season[0];
     }
    }
   }
  return false;
}

module.exports = {
  getSeason
};
