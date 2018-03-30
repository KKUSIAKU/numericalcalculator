
function toPostfix(infix) {
  // Convert infixItems to postfix here, and return result.
  var itemsRegx = /(\d+|[+-\/*()^])(\.\d+)?/g,
    infixItems = [],
    postfix = [],
    operators = [],
    _ln,
    ln;


  infixItems = infix.match(itemsRegx);
  ln = infixItems.length;

  for (let i = 0; i < ln; i++) {
    let char, opt;
    _ln = operators.length;

    if (operators[_ln - 1] === infixItems[i]) {
      postfix.push(infixItems[i]);
    } else {

      switch (infixItems[i]) {
        case "+":
        case "-":
          if (["^", "/", "*"].includes(operators[_ln - 1])) {
            opt = operators.pop();
            while (!["+", "-"].includes(opt)) {
              postfix.push(opt);
              opt = operators.pop();
            }
            postfix.push(opt);
          }
          operators.push(infixItems[i]);
          break;

        case "*":
          if (["^", "/"].includes(operators[_ln - 1])) {
            postfix.push(operators.pop());
          }
          operators.push(infixItems[i]);
          break;

        case "/":
          if (["^", "*"].includes(operators[_ln - 1])) {
            postfix.push(operators.pop());
          }
          operators.push(infixItems[i]);

          break;

        case "^":
          if (["/", "*"].includes(operators[_ln - 1])) {
            postfix.push(operators.pop());
          }
          operators.push(infixItems[i]);
          break;

        case "(":
          operators.push(infixItems[i]);
          break;

        case ")":
          char = operators.pop();
          while (char !== "(") {
            postfix.push(char);
            char = operators.pop();
          }
          break;
        default:
          // suppose it this digit then
          postfix.push(infixItems[i]);
      }
    }

  }

  _ln = operators.length;
  for (let i = _ln - 1; i >= 0; i--) {
    postfix.push(operators.pop());
  }
  return postfix;
}

export default toPostfix;

