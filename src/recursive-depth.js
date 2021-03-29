const CustomError = require("../extensions/custom-error");
/*
module.exports = class DepthCalculator {
  calculateDepth(arr) {    
    var count = 0;
    var countMax = 0;        
    for (let i=0; i<arr.length; i++){
      count = 1;
      if (Array.isArray(arr[i])) {
        count = recurs(arr[i]);
      }
      if (countMax<count) {
        countMax = count;
      }
    }
    return countMax;
    function recurs(arr) {
      count++;      
      for (let i=0; i<arr.length; i++) {
        if (Array.isArray(arr[i])) {
          recurs(arr[i]);
        }
        if (Array.isArray(arr[i]) && i==0) {
          break;
        }
      }
      return count;
    }
  }
};
*/


module.exports = class DepthCalculator {
  calculateDepth(arr, count, countMax) {
    countMax = countMax || 1; 
    count = count || 1; 
    if (countMax<count) { 
      countMax = count; 
    }
    if (Array.isArray(arr)) {
      count++; 
      for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
          let countCur = this.calculateDepth(arr[i], count, countMax);
          if (countMax<countCur) {
            countMax = countCur;
          }       
       }
     }
     return countMax;
    }
  }
};



//let deep = new DepthCalculator();
//deep.calculateDepth([1, 2, 3, 4, 5, [1]]); // 2

//deep.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]); // 4

//deep.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]); // 25//deep.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]); // 31