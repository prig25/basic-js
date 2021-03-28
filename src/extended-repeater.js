const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let strNew = '';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (typeof str !== 'string') str = String(str);
  if (typeof options.addition !== 'string') options.addition = String(options.addition);  
  const separatorDefault = '+';
  const additionSeparatorDefault = '|';
  for (let i=0; i<options.repeatTimes; i++) {
    strNew = strNew + str;
    for (let j=0; j<options.additionRepeatTimes; j++) {
      if (options.addition!=='undefined') {
        strNew = strNew + options.addition;
        if (options.additionRepeatTimes>1 && j<options.additionRepeatTimes-1) {
          if (options.additionSeparator) {
            strNew = strNew + options.additionSeparator;
          } else {
            strNew = strNew + additionSeparatorDefault;
          }
        }
      }      
    }
    if (i<options.repeatTimes-1) {
      if (options.separator) {
        strNew = strNew + options.separator;
      } else {
        strNew = strNew + separatorDefault;
      }
    }    
  }
return strNew;
}

//repeater('la', { repeatTimes: 3 });
//repeater('STRING', { repeatTimes: 3, /*separator: '**',*/ addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' });

//STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS