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
  let newMembers = [];
  if(typeof(members) == 'object' && !(members == null)){
    if(!(members.length)) {
      return false;
    }
    members.forEach((item) => {
      if(typeof(item) == 'string'){
        newMembers.push(item.trim());
      }
    });
    let name = newMembers.map((item) => item[0].toUpperCase());
    name.sort();
    return name.join('');
  } else return false;
}

module.exports = {
  createDreamTeam
};
