const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  let strArr = '';
  if (Array.isArray(members)==false) return false;
  for (i=0; i<members.length; i++) {
    if (typeof members[i] == 'string') {
      strArr = members[i];
      for (let j=0; j<strArr.length; j++) {
        if (strArr[j]!==' ') {
          arr.push(strArr[j].toUpperCase());
          break;
        }
      }
    }  
  }
  return arr.sort().join('');
}