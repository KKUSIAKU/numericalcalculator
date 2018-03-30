var toPostfix = require("../../src/CalculatorEngine").toPostFix;

describe("Infix to Postfix test", function () {

  it("test cases", function () {
    expect(toPostfix("2+7*5")).toEqual(["2", "7", "5", "*", "+"]);
    expect(toPostfix("3*3/(7+1)")).toEqual(["3", "3", "*", "7", "1", "+", "/"]);
    expect(toPostfix("5+(6-2.2)*12.39+3^(7-1)")).toEqual(["5", "6", "2.2", "-", "12.39", "*", "+", "3", "7", "1", "-", "^", "+"]);
    expect(toPostfix("(5-14-1)+9/5/2-1.27/1/7")).toEqual(["5", "14", "-", "1", "-", "9", "5", "/", "2", "/", "+", "1.27", "1", "/", "7", "/", "-"]);
  });
  
});