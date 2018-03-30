import React from "react"; 
import style from "./style.scss";

function createButton ({symbol}) {
  return (
    <button className="control-button">
      {symbol}
    </button>
  );
} 


var Controls = {};
Controls.CE = createButton.bind(null, {symbol:<math><mo>CE</mo></math>}); 
Controls.C = createButton.bind(null, {symbol:<math><mo>C</mo></math>});
Controls.MS = createButton.bind(null, {symbol:<math><mo>MS</mo></math>});
Controls.MC = createButton.bind(null, {symbol:<math><mo>MC</mo></math>});
Controls.MPlus = createButton.bind(null, {symbol:<math><mo>M+</mo></math>});
Controls.MMinus = createButton.bind(null, {symbol:<math><mo>M-</mo></math>});

export default Controls; 