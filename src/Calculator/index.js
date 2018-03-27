//import CalculatorFrame from "./CalculatorFrame"; 
import React from "react"; 
import Models from "./Models";
import CALCULATOR_MODELS from "../constant.js";

class Calculator extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      model:<Models.Standard/>,
      CalculatorUI:null,
    }; 
    
    //this.addFrame = this.addFrame.bind(this); 
    //this.drawBoard = this.drawBoard.bind(this); 
  }

 /* addFrame(){
    this.state.CalculatorUI.addFrame(); 
  }

  drawBoard(){
    this.state.drawBoard(); 
  }

  componentDidMount() {
    this.addFrame(); 
    this.drawBoard(); 
  }
  onModelChange(){

    // clear any previous state of the calcultor, operation or back them
    // repeat process cycle here
  }
*/
  render(){
    // construct the UI here 

    return this.state.model; 
  }
} 

export default Calculator; 