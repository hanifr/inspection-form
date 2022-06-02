import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";

class HelloWorld extends Component {
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

      <iframe src='http://plnkr.co/' height='500' width='500'/>   
      
      <Button onClick={this.back}>Back</Button>
      <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      
      </div>
      )
    }
  };
  
  export default HelloWorld;