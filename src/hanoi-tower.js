const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let n = 0;
  let t = 0;
//  var object = {};
  n = Math.pow(2,disksNumber)-1;
  t = Math.floor((3600/turnsSpeed)*n);
/*   object = Object.create({}, { 
    turns: { value: n },
    seconds: { value: t }
  }); */
  return {turns: n, seconds: t};
}

//calculateHanoi(5, 4074);
//{turns: 31, seconds: 27}