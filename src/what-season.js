const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) == '[object Date]') {
    let mon = date.getMonth();
    if (mon==11 || mon==0 || mon==1) return 'winter';
    if (mon==2 || mon==3 || mon==4) return 'spring';
    if (mon==5 || mon==6 || mon==7) return 'summer';
    if (mon==8 || mon==9 || mon==10) return 'autumn';
  }
    throw new Error('Error');  
};

/*
const deeperFakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  getMonth() {
      return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
      return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
      return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
      return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
      return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
      return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
      return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
      return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  }
};

Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

let pora = getSeason(deeperFakeDate);
*/
//let date = new Date(2019, 11, 22, 23, 45, 11, 500);
//let date = new Date(2018, 4, 17, 11, 27, 4, 321);
//let date = new Date(2017, 6, 11, 23, 45, 11, 500);
//let date = new Date(1994, 8, 26, 3, 0, 11, 500);

//let date = new Date(1900, 0, 22, 23, 45, 11, 500);
//let date = new Date(1354, 4, 17, 11, 27, 4, 321);
//let date = new Date(1, 6, 13, 23, 45, 11, 500);
//let date = new Date(22, 8, 22, 3, 0, 11, 500);

//let date = new Date(202, 3, 5, 6, 7, 8);

//let pora = getSeason(date);