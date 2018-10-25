import React, { Component} from "react";
import "../App.css";
import {Input} from 'react-materialize'
 
class Button extends Component{
 
  constructor(props){
    super(props)
    this.state = {
    }
  }
 
  render(){
    return(
      <div id="button" className="lavaCard lavaRow">
        <h2 id="submitText">{this.props.buttonText}</h2>
      </div>
    );
  }
}
 
export default Button;