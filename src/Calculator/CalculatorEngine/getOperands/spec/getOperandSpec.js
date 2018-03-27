/* eslint-disable*/
describe("GetOperands testing", function(){
  var getOperands = require("../index.js");

  it("should work for simple cases return two operands", function(){
    let operands = getOperands("256.365+1554e23");
    expect(operands).toEqual(["256.365","1554e23" ]);
  });

});