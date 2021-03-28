const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(final_activity) {
  let N = Number(final_activity);
  let k = 0;
  let t = 0;  
  if (typeof final_activity !== 'string' || isNaN(N) || N<=0 || N>15) return false;
  k = Math.log(2)/HALF_LIFE_PERIOD;
  t = Math.log(MODERN_ACTIVITY/N)/k;
  return Math.ceil(t);
}
