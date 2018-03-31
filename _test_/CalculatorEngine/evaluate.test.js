var evaluate = require("../../src/CalculatorEngine").evaluate;

describe("Infix to Postfix test", function () {

  it("Test cases for an array input format", function () {
    expect(evaluate(["2", "7", "5", "x", "+"])).toBe(37);
    expect(evaluate(["3", "3", "x", "7", "1", "+", "/"])).toBe(1.125);
    expect(evaluate(["5", "6", "2.2", "-", "12.39", "x", "+", "3", "7", "1", "-", "^", "+"])).toBe(781.082);
    expect(evaluate(["5", "14", "-", "1", "-", "9", "5", "/", "2", "/", "+", "1.27", "1", "/", "7", "/", "-"])).toEqual(-9.28142857143);
  });
 /*
  it("test cases", function () {
    expect(toPostfix(["2", "7", "5", "x", "+"])).toEqual(["2", "7", "5", "x", "+"]);
    expect(toPostfix("3x3/(7+1)")).toEqual(["3", "3", "x", "7", "1", "+", "/"]);
    expect(toPostfix("5+(6-2.2)x12.39+3^(7-1)")).toBe(781.082);
    expect(toPostfix("(5-14-1)+9/5/2-1.27/1/7")).toEqual(-9.28142857143);
  });

*/
});