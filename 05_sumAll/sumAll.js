const sumAll = function(numOne, numTwo) { 
    let firstNum
    let secondNum
    if (typeof(numOne) !== "number" || typeof(numTwo) !== "number" ) {
        return "ERROR"
    }
    else if (numOne > numTwo) {
        firstNum = numTwo;
        secondNum = numOne;
    } else  { 
        firstNum = numOne;
        secondNum = numTwo;
    }
    let result = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        result +=  i ;
    }
    if (result < 0) {
        return "ERROR"
    } else {
    return result;
    }
};

// Do not edit below this line
module.exports = sumAll;
