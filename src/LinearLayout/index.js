import React from "react";
import PropTypes from "prop-types";

const wrapping = {};

function LinearLayout(props) {
  return (
    <div className="linear-layout">
      {props.children.map((child, index) => <div className="linear-layout-item" key={index}>{child}</div>)}
    </div>
  );
}

export default LinearLayout; 