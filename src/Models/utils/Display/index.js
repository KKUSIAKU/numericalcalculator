import React from "react";
import {connect} from "react-redux";
import style from "./style.scss";

function Display({ expression }) {
  return (
    <div id="display-frame">
      <div id="display">{expression}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    expression:state.expression,
  };
};

export default connect(mapStateToProps)(Display); 