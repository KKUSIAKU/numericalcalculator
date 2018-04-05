var maths = {};
function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function pow(x, y) {
  // assume no fancy calculation
  return Math.pow(x, y);
}


function round(num, precision =-1) {
  var _number,
    _dotIndex,
    _ln;

  if (typeof num !== "number" | !Number.isSafeInteger(precision)) {
    throw new TypeError(`Error in round methods of maths module ${num} and ${precision} should be Number`)
  }

  num = num.toString();

  if (precision < 0) {
    precision -= precision;
  }
    
  _dotIndex = num.match(/\./);

  if (_dotIndex === null) {
    return Number(num);
  }
  else {
    _ln = _dotIndex.index + precision;
    _number = !num[_ln] | parseInt(num[_ln+1]) < 5? num.substr(0, _ln+1) :  num.substr(0, _ln) + (parseInt(num[_ln])+1) ;
  }

  return Number(_number);
}

maths.test = "testing ";

maths.add = add;
maths.substract = substract;
maths.divide = divide;
maths.multiply = multiply;
maths.pow = pow;
maths.round = round;

module.exports = maths;
//export default maths; 