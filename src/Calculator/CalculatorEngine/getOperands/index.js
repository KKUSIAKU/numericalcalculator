function getOperators(expression){
  let operandsRegx = new RegExp(/([\.\d])([+\-/x])(.*)/,"g");
  let operands = expression.match(operandsRegx); 
  console.log("operand",operands[1]);
  return expression.match(operandsRegx);
}

//export default getOperators;
// swtich to node for testing 
module.exports = getOperators; 