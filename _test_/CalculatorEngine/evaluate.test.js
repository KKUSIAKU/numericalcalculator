var evaluate = require("../../src/CalculatorEngine").evaluate;

describe("Infix to Postfix test", function () {

  it("Test cases for an array input format", function () {

    expect(evaluate(["2", "7", "5", "x", "+"])).toBe("37");
    expect(evaluate(["3", "3", "x", "7", "1", "+", "/"])).toBe("1.125");
    expect(evaluate(["5", "6", "2.2", "-", "12.39", "x", "+", "3", "7", "1", "-", "^", "+"])).toBe("781.082");
    
    // accepted with precison error
    expect(evaluate(["5", "14", "-", "1", "-", "9", "5", "/", "2", "/", "+", "1.27", "1", "/", "7", "/", "-"])).toEqual("-9.28142857143");
  });

});