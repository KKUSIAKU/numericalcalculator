//https://en.wikipedia.org/wiki/Shunting-yard_algorithm to calculate withouth eval 
// http://rosettacode.org/wiki/Parsing/Shunting-yard_algorithm

import { combine } from "react-redux";
import maths from "./maths.js";
import getOperators from "./getOperators"; 
import toPostFix from "./infixToPostFix";
import evaluate from "./evaluate";

function changeLastChar(char) {
  return char;
}

function isOperator(operators, obj) {
  return operators.includes(obj);
}

function addOperator(expression, operator) {
  return expression + operator;
}

function addDigit(expresion, digit) {
  return expression + digit;
}

function updateObject(initialObj, newAttributeObj) {
  return Object.assign({}, initialObj, newAttributeObj);
}


function evaluateEpxresion(expresion) {
  try {
    let result = eval(expresion);
    return result;
  } catch (e) {
    return "Error";
  }
}

function expression(state = {}, action) {
  let expression, operatorRegExp, operators, postFixExpress; 
  switch (action.type) {
    case "UPDATE-EXPRESSION":
      if (state.expression === "0") {
        return updateObject(state,
          {
            lastChar: action.expression.toString(),
            expression: action.expression.toString(),
          });
      } else {
        return updateObject(state,
          {
            lastChar: action.expression.toString(),
            expression: state.expression + action.expression.toString(),
          });
      }
    case "EVALUATE":
      // eval could make thing simple for basic case here 
      // but want to explore something more realistic without create such external script with eval 
      //determine which operation to make 
      postFixExpress = toPostFix(state.expression);
      return  updateObject (state, {
        expression:evaluate(postFixExpress)
      });
    default:
      return state;
  }

}

export default expression; 