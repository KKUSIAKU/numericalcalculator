
var maths = require("../../src/CalculatorEngine/maths");

describe("Test of round functionality of the maths modules", function () {
  var round = maths.round;

  beforeAll(function(){
    expect(typeof round).toBe("function");
  })
  

  it("should return integer input as it is", function () {
    expect(round(12)).toBe(12);
    expect(round(1255467979976)).toBe((1255467979976));
    expect(round(12546,2546)).toBe(12546);

  });

  it("should return decimal short than the precision unchanged", function(){
    expect(round(12.35,6)).toBe(12.35);
  })

  it("should return decimal down", function(){
    expect(round(12.311122345,6)).toBe(12.311122);
  })

  
  it("should return decimal up", function(){
    expect(round(12.31112555,6)).toBe(12.311126);
    expect(round(12.31112565,6)).toBe(12.311126);
    expect(round(12.3111259,6)).toBe(12.311126);
    expect(round(1225468.358712555,6)).toBe(1225468.358713);
  })

});