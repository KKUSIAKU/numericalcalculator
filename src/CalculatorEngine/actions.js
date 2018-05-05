function updateExpression(obj) {
  let value;
  if (typeof obj === "function") {
    value = obj.bind(null, [...arguments].slice(1))(); //
  } else {
    value = obj;
  }


  return {
    type: "UPDATE-EXPRESSION",
    expression: value
  };
}

function negate() {
  return {
    type: "NEGATE",
  };
}

function evaluateExpression() {
  return {
    type: "EVALUATE",
  };
}

export {
  updateExpression,
  evaluateExpression,
  negate
};