function getOperators(expression){
  let operatorsRegx = new RegExp(/[+\-/x]/,"g");
  return expression.match(operatorsRegx);
}

//export default getOperators;
// swtich to node for testing 
module.exports = getOperators; 