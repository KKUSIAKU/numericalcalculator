(function () {
  /*
  *************************************************/
  var view = {
    display: $(".display"),
    updateDisplay: function updateDisplay(value) {
      $(".display").html(value);
      return;
    },

    init: function init() {
      var digitsButton = "";
      var keyboard = "<table id ="keyboard">" +
        "<tbody>" +
        "<tr><td class="display" colspan="4"></td></tr>" +
        "<tr><td data-control="ac">AC</td><td data-control="ce">CE</td><td data-operator="/">/</td><td data-operator="*">x</td></tr>" +
        "<tr><td data-value="7">7</td><td data-value="8">8</td><td data-value="9">9</td><td data-operator="-">-</td></tr>" +
        "<tr><td data-value="4">4</td><td data-value="5">5</td><td data-value="6">6</td><td data-operator="+">+</td></tr>" +
        "<tr><td data-value="1">1</td><td data-value="2">2</td><td data-value="3">3</td><td data-equal="equal" rowspan="2">=</td></tr>" +
        "<tr><td data-value="0" colspan="2">0</td><td data-deci=".">.</td></tr>" +
        "</tbody>" +
        "</table>";

      keyboard = $(keyboard);
      $("#app").append(keyboard);

      return;
    },

  };

  /*
  *
  *************************************************/




  var ouctopus = {

    // the click event handler to set the operand 
    writeDigit: function writeDigit(e) {
      var digit = $(e.target).data("value");
      ouctopus.expressionUpdate(digit);
      return;
    },

    // update both the caluclation expression and the display 
    expressionUpdate: function expressionUpdate(content) {
      if (!isNaN(Number(content)) || content == "." || calculator.operators.indexOf(content) != -1) {
        calculator.expression += content;
        calculator.lastChar = content;
      }
      view.updateDisplay(calculator.expression);
      return;
    },
    // get the lastChar and check if is an operator
    // check in fact is not op
    lastCharIsOp: function lastCharIsOp() {
      var ops = calculator.operators;
      return ops.indexOf(calculator.lastChar) !== -1;
    },

    lastCharIsDot: function lastCharIsDot() {
      return calculator.lastChar == ".";
    },

    addDeciMark: function addDeciMark() {
      if (!ouctopus.lastCharIsDot()) {
        ouctopus.expressionUpdate(".");
        return;
      }
    },

    // add operator,identical to writeDigit but for operators :+,/,-,x
    addOperator: function addOperator(e) {
      var operator = $(e.target).data("operator");
      if (!ouctopus.lastCharIsOp()) {
        ouctopus.expressionUpdate(operator);
      }
      return;
    },

    // check expression 
    expressionIsEmpty: function expressionIsEmpty() {
      return calculator.expression == "";
    },
    // evaluate and show result,
    calculate: function calculateExpression() {
      if (!ouctopus.expressionIsEmpty() && !ouctopus.lastCharIsOp()) {
        return eval(calculator.expression);
      }
    },
    clear: function clear() {
      calculator.expression = ""; //clear; 
      calculator.lastChar = "";
    },
    // display result 
    showResult: function showResult() {
      var result = ouctopus.calculate();
      if (result !== undefined) {
        ouctopus.clear();
        view.updateDisplay(result);
      }
    },
    clearAC: function clearAC() {
      ouctopus.clear();
      view.updateDisplay(calculator.expression);
    },

    clearCE: function clearCE() {
      switch (calculator.ce_count) {
        case 2:
          ouctopus.clear();
          view.updateDisplay(calculator.expression);
        default:
          var exp = calculator.expression;
          calculator.expression = exp.slice(0, exp.length - 1);
          calculator.lastChar = exp[exp.length - 2];
          calculator.ce_count += 1;
          view.updateDisplay(calculator.expression);
          break

      }
    },
    init: function () {
      view.init();
      var display = $("#keyboard");
      display.on("click", "[data-value]", ouctopus.writeDigit);
      display.on("click", "[data-operator]", ouctopus.addOperator);
      display.on("click", "[data-equal]", ouctopus.showResult);
      display.on("click", "[data-deci]", ouctopus.addDeciMark);
      display.on("click", "[data-control='ac']", ouctopus.clearAC);
      display.on("click", "[data-control='ce']", ouctopus.clearCE);
      return;
    }

  }

  /*
  *
  *************************************************/

  var calculator = {
    lastChar: "",
    expression: "",
    ce_count: 0,
    equal_state: false,
    operators: ["+", "-", "/", "*"],
    equal: "=",
    screen: $("#screen"),
  };

  ouctopus.init();

})()