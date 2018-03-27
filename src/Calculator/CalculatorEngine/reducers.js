//https://en.wikipedia.org/wiki/Shunting-yard_algorithm to calculate withouth eval 
// http://rosettacode.org/wiki/Parsing/Shunting-yard_algorithm

import { combine } from "react-redux";
import maths from "./maths.js";
import getOperators from "./getOperators"; 

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
  let expression; 
  let operatorRegExp; 
  let operators; 
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
      expression = state.expression;
      console.log(expression);
      operatorRegExp = RegExp(/[+-]/);
      operators = expression.match(operatorRegExp); 
      console.log("operators",operators);

      break;
    default:
      return state;
  }
  /*if (action.type == "UPDATE-EXPRESSION") {
    if (state.expression === "0") {
      return updateObject(state, 
        {
          lastChar:action.expression.toString(),
          expression: action.expression.toString(),
        });
    } else {
      //return Object.assign({}, state, { expression: state.expression + action.expression.toString() });
      return updateObject(state, 
        {
          lastChar:action.expression.toString(),
          expression: state.expression + action.expression.toString(),
        });
    }

  }
  if (action.type == "EVALUATE") {
    let result = evaluateEpxresion(state.expression);
    return updateObject(state, {expression:result});
  }*/
  return state;
}

export default expression; 