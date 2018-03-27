//import getOperators from "../index.js";
/* eslint-disable*/
var getOperators = require("../index.js");
describe("Extraction maths operators from a string input", function () { 
  it("should work for single operator with two operand", function(){
    let expression = "254.3256+15424e25-2546/25x564"; 
    let matchResult = getOperators(expression);
    expect(matchResult[0]).toEqual("+");
    expect(matchResult[1]).toEqual("-");
    expect(matchResult[2]).toEqual("/");
    expect(matchResult[3]).toEqual("x");
  })
});