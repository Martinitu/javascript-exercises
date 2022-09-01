const ftoc = function(temp) {
  let tempinC = (temp - 32) * (5/9);
  let result = Math.round(tempinC * 10) / 10;
  return result
};
//[°C] = ([°F] − 32) × 5⁄9
const ctof = function(temp) {
  let tempinF = temp * (9/5) + 32;
  let result = Math.round(tempinF * 10) / 10;
  return result
};
//[°F] = [°C] × 9⁄5 + 32 
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
