const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Not Array');
  let arrNew = [];
  for (let i=0; i<arr.length; i++) {
    arrNew[i]=arr[i];
  }
  for (let i=0; i<arrNew.length; i++) {
    if (arrNew[i]=='--discard-next') {
      arrNew[i]=undefined;
      arrNew[i+1]=undefined;
    }
    if (arrNew[i]=='--discard-prev') {
      arrNew[i]=undefined;
      arrNew[i-1]=undefined;
    }
    if (arrNew[i]=='--double-next') {
      arrNew[i]=arrNew[i+1];
    }
    if (arrNew[i]=='--double-prev') {
      arrNew[i]=arrNew[i-1];
    }
  }
  for (let i=arrNew.length-1; i>=0; i--) {
    if (arrNew[i]==undefined) {
      arrNew.splice(i,1);
    }
  }
  return arrNew;
};

//transform([1, 2, 3, '--double-next', 4, 5]);
//[1, 2, 3, 4, 4, 5]
//transform([1, 2, 3, '--discard-prev', 4, 5]);
//[1, 2, 4, 5]
//transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);
//output: [1, 2, 3, 4, 5]
//transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]);
//output: [1, 2, 3, 1337, 1337, 1337, 4, 5]
//transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]);
//output: [1, 2, 3, 4, 5]
//transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]);
//output: [1, 2, 3, 1337, 4, 5]