TEMPALTE FOR NEW INTERACTION

//MUST IMPORT
import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";

class HelloWorld extends Component {

  //FORWARD AND BACK BUTTON
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  
  
  
  render() {
    return(
      <div>
      <p>Hello</p>
      
      <Button onClick={this.back}>Back</Button>
      <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      
      </div>
      )
    }
  };
  
  export default HelloWorld;