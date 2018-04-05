/** @function evaluate
 * 
 * Calculate an the result of a postfix expression input.
 * @param {array|string} expression - A postifix expression.
 * @param {string} [separator=$] A string symbol to used to distinguish the postifix expression items 
 * @returns {number} A result of expression evaluation.
 * 
 */

var getOperators = require("../getOperators");
var maths = require("../maths");


function _evaluateArray(expression, separator) {
  var result = expression.join("$"),
    _exp = expression.join("$"),
    regx = new RegExp("(\\d+)(\\.\\d+)?([$])(\\d+)(\\.\\d+)?([$])([+*-\\/])", "g"),
    sp = /[$]/g;

  var r = /(-?\d+)(\.\d+)?([$])(\d+)(\.\d+)?([$])([+\-x^/])/;
  var rr = new RegExp("(\\d+)(\\.\\d+)?([$])(\\d+)(\\.\\d+)?([$])([+-x/])","g");
  var count = 15;

 // count--;
  while (count) {
    count = count -1;
    result = result.replace(r, function () {
    
      let _args = [...arguments],
        firstOperand,
        secondOperand,
        operator;

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
          return maths.pow(firstOperand,secondOperand).toString();
        default:
          throw new TypeError(`In Evaluate: ${operator} operation is not valid or not defined`);
      }

    });

  }


  return result;
}

function evaluate(expression, separator = "$") {

  var result = null;
  result = _evaluateArray(expression, separator);
  return maths.round(parseFloat(result),11);

}


module.exports = evaluate;