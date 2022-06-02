import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { throws } from "assert";

class LicenseeDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form color="blue">
        <h1 className="ui centered">Enter Licensee Details</h1>
        <Form.Field>
          <label>Licensee Contact Name</label>
          <input
            placeholder="Name"
            onChange={this.props.handleChange("licName")}
            defaultValue={values.licName}
          />
        </Form.Field>
        <Form.Field>
          <label>Position</label>
          <input
            placeholder="Position"
            onChange={this.props.handleChange("licPosition")}
            defaultValue={values.city}
          />
        </Form.Field>
        <Form.Field>
          <label>Telephone</label>
          <input
            placeholder="Telephone"
            onChange={this.props.handleChange("licNumber")}
            defaultValue={values.country}
          />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            onChange={this.props.handleChange("licEmail")}
            defaultValue={values.country}
          />
        </Form.Field>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default LicenseeDetails;
