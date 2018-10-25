import React, { Component} from "react";
import "./App.css";
import Header from "./components/Header.js";
import FormSection from "./components/FormSection.js"
 
class App extends Component{
 
  constructor(props){
    super(props)
    this.state = {
    }
  }
 
  render(){
    return(
      <div className="App">
        <Header />
        <FormSection />

      </div>
    );
  }
}
 
export default App;