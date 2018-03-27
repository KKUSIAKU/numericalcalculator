import React from "react"; 
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DIGITS from "../constant.js";
import * as actions from "../../../CalculatorEngine/actions.js";
import style from "./style.scss";

function createButton ({digit, controller}) {
  return (
    <button className="digit-button" onClick={controller ? controller.bind(null,digit):controller}>{digit}</button>
  );
} 

const mapStateToProps = ({digit}) =>{
  return {
    digit
  };
};

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({controller:actions.updateExpression}, dispatch);
};

var Digits = {};
Digits.Zero = connect(mapStateToProps.bind(null, {digit:0}), mapDispatchToProps)(createButton); 
Digits.One = connect(mapStateToProps.bind(null, {digit:1}), mapDispatchToProps)(createButton);
Digits.Two = connect(mapStateToProps.bind(null, {digit:2}), mapDispatchToProps)(createButton);
Digits.Three = connect(mapStateToProps.bind(null, {digit:3}), mapDispatchToProps)(createButton);
Digits.Four = connect(mapStateToProps.bind(null, {digit:4}), mapDispatchToProps)(createButton);
Digits.Five = connect(mapStateToProps.bind(null, {digit:5}), mapDispatchToProps)(createButton);
Digits.Six = connect(mapStateToProps.bind(null, {digit:6}), mapDispatchToProps)(createButton);
Digits.Seven = connect(mapStateToProps.bind(null, {digit:7}), mapDispatchToProps)(createButton);
Digits.Eigth = connect(mapStateToProps.bind(null, {digit:8}), mapDispatchToProps)(createButton);
Digits.Nine = connect(mapStateToProps.bind(null, {digit:9}), mapDispatchToProps)(createButton);


export default Digits; 