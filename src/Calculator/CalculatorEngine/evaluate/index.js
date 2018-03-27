/*
import getOperators from "./getOperators"; 
import maths from "./maths.js"; 
*/

var getOperators = require("../getOperators");
var maths = require("../maths.js");

function evaluate(expression, count=0){
  var operators = getOperators(expression); 
  let operands = getOperands(experssion); 
  var result; 
  while(operators.length && count < 5){
    count ++;
  }
  
  return result; 

}
module.exports = evaluate;