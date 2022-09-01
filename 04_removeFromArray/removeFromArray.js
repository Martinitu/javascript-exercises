const removeFromArray = function(arr, ...manyMoreArgs) {
    for (let i = 0; i < manyMoreArgs.length; i++){
  let index = arr.indexOf(manyMoreArgs[i])
  if (index > -1) {
    arr.splice(index, 1);
  
}
    }
return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
