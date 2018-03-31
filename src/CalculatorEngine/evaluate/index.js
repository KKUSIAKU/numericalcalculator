/** @function evaluate
 * 
 * Calculate an the result of a postfix expression input.
 * @param {array|string} expression - A postifix expression.
 * @param {string} [separator=$] A string symbol to used to distinguish the postifix expression items 
 * @returns {number} A result of expression evaluation.
 * 
 */

var getOperators = require("../getOperators");
var maths = require("../maths.js");


function _evaluateArray(expression, separator) {
  var result = expression.join("$"),
    _exp = expression.join("$"),
    regx = new RegExp("(\\d+)(\\.\\d+)?([$])(\\d+)(\\.\\d+)?([$])([+*-\\/])", "g"),
    sp = /[$]/g;


  //result =  _exp.match(regx);
  //var r = new RegExp("(\\d+)([$])","g");


  // this works !
  var r = /(-?\d+)(\.\d+)?([$])(\d+)(\.\d+)?([$])([+\-x^/])/;
  var rr = new RegExp("(\\d+)(\\.\\d+)?([$])(\\d+)(\\.\\d+)?([$])([+-x/])","g");
  var count = 15;

console.log("*****************",sp.test(result));
 // count--;
  while (count) {
    count = count -1;
    console.log(result);

    result = result.replace(r, function () {
      //return "£££";

      let _args = [...arguments],
        firstOperand,
        secondOperand,
        operator;
      //return "££££";

      firstOperand = parseFloat(_args.slice(1, 3).join(""));
      secondOperand = parseFloat(_args.slice(4, 6).join(""));
      operator = _args[7];

      switch (operator) {
        case "+":  
          return maths.add(firstOperand, secondOperand).toString();
        case "-":
          return maths.substract(firstOperand, secondOperand).toString();
        case "x":
          return maths.multiply(firstOperand, secondOperand).toString();
        case "/":
          return maths.divide(firstOperand, secondOperand).toString();
        case "^":
          return Math.pow(firstOperand,secondOperand).toString();
        default:
          throw new TypeError(`In Evaluate: ${operator} operation is not valid or not defined`);
      }

    });

  }
 
  console.log(result);

  return result;
}

function evaluate(expression, separator = "$", count = 0) {

  var result = null;
  //console.log(expression)

  result = _evaluateArray(expression, separator);
  return parseFloat(result);

}


module.exports = evaluate;