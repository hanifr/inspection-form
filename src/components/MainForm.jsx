import React, { Component } from "react";
import UserDetails from "./UserDetails";
import LicenseeDetails from "./LicenseeDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";
import HelloWorld from "./HelloWorld";

class MainForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    licName: "",
    licPosition: "",
    licNumber: "",
    licEmail: ""
  };
  
  
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  
  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };
  
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, phoneNumber, licName, licPosition, licNumber, licEmail } = this.state;
    const values = { firstName, lastName, phoneNumber, email, licName, licPosition, licNumber, licEmail };
    switch (step) {
      case 1:
      return (
        <UserDetails
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
        />
        );
        case 2:
        return (
          <LicenseeDetails
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          />
          );
          case 3:
          return (
            <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            />
            );
            case 4:
            return (<HelloWorld 
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              
            />
            );
            case 5:
            return <Success 
            values={values}
            />;
          }
        }
      }
      
      export default MainForm;
