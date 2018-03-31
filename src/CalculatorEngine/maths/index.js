var maths = {};
function add(x,y){
  return x + y; 
}

function substract(x,y){
  return x -y ;
}

function multiply(x,y){
  return x*y; 
}

function divide(x,y){
  return x/y;
}

function pow(x,y){
  // assume no fancy calculation
  return Math.pow(x,y);
}

maths.add = add; 
maths.substract = substract; 
maths.divide = divide; 
maths.multiply = multiply; 
maths.pow = pow;

module.exports = maths; 
//export default maths; 