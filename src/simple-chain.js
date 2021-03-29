const CustomError = require("../extensions/custom-error");

let arr = [];

const chainMaker = {
  getLength() {
    return arr.length;
  },

  addLink(value) {
    arr.push(String(value));
    return chainMaker;
  },

  removeLink(position) {
    if(!isNaN(position) || (position>0 && position<arr.length)) {
      arr.splice(position-1, 1);
      return chainMaker;
    }
    arr = [];
    throw Error('Error');
  },

  reverseChain() {
    arr.reverse();
    return chainMaker;
  },

  finishChain() {
    for(let i=0; i<arr.length; i++) {
      arr[i] = `( ${arr[i]} )`;
      if(i!==arr.length-1) {
        arr[i] = `${arr[i]}~~`;
      }
    }
    let result = arr.join('');
    arr = [];
    return result;
  }
};

module.exports = chainMaker; 




//chainMaker.addLink(1).addLink(2).addLink(3).finishChain();
//'( 1 )~~( 2 )~~( 3 )'
//chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain();
//'( 2 )~~( 3 )'
//chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain();
//'( 2 )~~( 1 )~~( 3 )'