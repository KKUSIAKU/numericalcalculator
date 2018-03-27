import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../CalculatorEngine/actions.js"; 
import style from "./style.scss";

function Equal({controller}) {
  return (
    <button className="equal-button" onClick={controller.bind(null)}>=</button>
  );
} 
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({controller: actions.evaluateExpression}, dispatch);
};

const EqualAssignement = connect(null,mapDispatchToProps)(Equal); 
export default EqualAssignement;
