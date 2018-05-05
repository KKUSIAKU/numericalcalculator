import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../CalculatorEngine/actions.js";
import style from "./style.scss";

function createButton({ operator, controller, symbol }) {
  return (
    <button className="operator-button" onClick={ controller.bind(null, symbol)}>
      {operator}
    </button>
  );
}

const mapStateToProps = ({ operator, symbol }) => {
  return {
    operator, 
    symbol,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ controller: actions.updateExpression }, dispatch);
};

const mapOfNegate =(dispatch) => {
  return bindActionCreators({controller:actions.negate}, dispatch);
};

// unfortunately, many browser don't support MathML yet 
// https://caniuse.com/#search=math

var Operators = {};
Operators.Plus = connect(
  mapStateToProps.bind(null, { operator: <math><mo>+</mo></math>, symbol:"+" }),
  mapDispatchToProps
)(createButton);

Operators.Minus = connect(
  mapStateToProps.bind(null, { operator: <math><mo>-</mo></math>,symbol:"-" }),
  mapDispatchToProps
)(createButton);

Operators.Multiply = connect(
  mapStateToProps.bind(null, { operator: <math><mo>x</mo></math>, symbol:"x" }),
  mapDispatchToProps
)(createButton);

Operators.Divide =connect(
  mapStateToProps.bind(null, { operator: <math><mo>/</mo></math>,symbol:"/" }),
  mapDispatchToProps
)(createButton);

Operators.Negate = connect(
  mapStateToProps.bind(null, { operator:  <math><mo>&#177;</mo></math>,symbol:"negate" }),
  mapOfNegate
)(createButton);

Operators.Sqrt = connect(
  mapStateToProps.bind(null, { operator: <math><mi>&#8730;</mi></math>,symbol:"sqrt" }),
  mapDispatchToProps
)(createButton);

Operators.Percentage = connect(
  mapStateToProps.bind(null, { operator: <math><mo>&#37;</mo></math>,symbol:"percentage" }),
  mapDispatchToProps
)(createButton);

Operators.Square = connect(
  mapStateToProps.bind(null, { operator: <p>x<sup>2</sup></p>,symbol:"square" }),
  mapDispatchToProps
)(createButton);

Operators.Inverse = connect(
  mapStateToProps.bind(null, { operator: <p><sup>1</sup>/<sub>x</sub></p>,symbol:"inverse" }),
  mapDispatchToProps
)(createButton);


export default Operators; 