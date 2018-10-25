import React, { Component} from "react";
import "../App.css";
import FormCard from "../components/FormCard.js";
 
class FormSection extends Component{
 
  constructor(props){
    super(props)
    this.state = {
    }
  }
 
  render(){
    return(
      <div id="formSection">
        <h3>Manually Submit or Request</h3>
        <div className="lavaRow" id="cardRow">
          <FormCard title={"Submit Number"} buttonText={"Submit"}/>
          <FormCard title={"Predict Number"} buttonText={"Predict"}/>
          <FormCard title={"Request Number"} buttonText={"Request"}/>
        </div>

      </div>
    );
  }
}
 
export default FormSection;