const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!(members instanceof Array)) return false;
  let teamName = '';
  members.filter(elem => typeof elem === 'string' 
    || elem instanceof String === true).map(elem => elem.toUpperCase().trim()).sort().forEach(name => {
      if(name.length !== 0) teamName += name.charAt(0);
    });
  return teamName;
}

module.exports = {
  createDreamTeam
};
