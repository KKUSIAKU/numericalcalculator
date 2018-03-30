/* eslint-disable*/
describe("evaluate function testing", function(){
  var evaluate = require("../index.js"); 

  it("should work for basic operation", function(){
    let addResult = evaluate("2+6"); 
    let divideResult = evaluate("6/2"); 
    let multiplyResult = evaluate("6x2");
    let minusResult = evaluate("2-6");
    expect(addResult).toEqual(8); 
    expect(divideResult).toEqual(3); 
    expect(multiplyResult).toEqual(12); 
    expect(minusResult).toEqual(-4);
  });

});