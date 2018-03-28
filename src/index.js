import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
// obliged to break down the import from CalculatorEngine module 
// to avoid multiple module import that differ only in casing warning !
// Need to import actions 
import store  from "./calculator/CalculatorEngine/store.js";
//import CalculatorFrame from "./CalculatorFrame";
import Calculator from "./Calculator";

import style from "./style.scss";


render(
  <Provider store={store}>
    <Calculator />
  </Provider>,
  document.getElementById("app")
); 