import React, { Component} from "react";
import "../App.css";
import Button from "../components/Button.js";
import {Input} from 'react-materialize'
 
class FormCard extends Component{

  constructor(props){
    super(props)
    this.state = {
    }

  }

  renderButton() {
    if (this.props.buttonText != "Request"){
      return (
        <Input  label="Enter Number" id="submitForm"/>
      )
    } else {
      return (
        <Input  label="Your number will appear here." id="submitForm"/>
      )
    }
  }

  render(){
    return(
      <div id="formCard" className="lavaCard">
        <h4>{this.props.title}</h4>
        <hr className="cardRule"></hr>
        <div id="cardContent" className="column">
          {this.renderButton()}
          <Button buttonText={this.props.buttonText} />
        </div>
      </div>
    );
  }
}
export default FormCard;