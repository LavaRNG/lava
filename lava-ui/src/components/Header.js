import React, { Component} from "react";
import "../App.css";
import lamp from "../img/lamp.gif"
 
class Header extends Component{
 
  constructor(props){
    super(props)
    this.state = {
    }
  }
 
  render(){
    return(
      <div id="lavaHeader">
        <div className="lavaRow" id="headerContent">
            <img id="lamp" src={lamp} />
            <div className="lavaColumn" id="titleText">
                <h1 id="lavaTitle">Lava</h1>
                <h2>Decentralized you relaly random number generation. Pay ETH to obtain random numbers or submit  random numbers to earn ETH.</h2>
            </div>
        </div>
      </div>  
    );
  }
}
 
export default Header;