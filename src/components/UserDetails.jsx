import React, { Component } from "react";
import {
    Button,
    Segment,
    Divider,
    Tab,
    Table,
    Message,
    Checkbox,
    Form,
    Icon,
    Input,
    Dropdown,
    Dimmer,
    Loader,
    Label,
    LabelDetail
  } from "semantic-ui-react";
import { FieldControl, Validators } from "react-reactive-form";

class UserDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  //Browse file upload
  constructor(props) {
    super(props)
    this.uploadFile = this.uploadFile.bind(this);
  }
  
  uploadFile(event) {
      let file = event.target.files[0];
      console.log(file);
      console.log(file.value);
      
      if (file) {
        let data = new FormData();
        data.append('file', file);
        console.log(data.values());
        // axios.post('/files', data)...
      }
  }



//   uploadFile = e => {
//     console.log("hello")
//   };

//   fileInputRef = React.createRef();
//   fileChange = e => {
//     this.setState({ file: e.target.files[0] }, () => {
//       console.log("File chosen --->", this.state.file);
//       console.log(file);
//     });
//   };


  render() {
    const { values } = this.props;
    return (
      <Form color="green">
        <h1 className="ui centered">Enter Inspector Details</h1>
        {/*  */}
        <br/>

        <span>
        <input type="file"
        name="myFile"
        onChange={this.uploadFile} />
      </span>

            {/* <Button
        content="Choose File"
        labelPosition="left"
        icon="file"
        onClick={() => this.fileInputRef.current.click()}
        />
        <input
        ref={this.fileInputRef}
        type="file"
        hidden
        onChange={this.fileChange}
        /> */}
{/* 
        <Button onClick={this.uploadFile}>Upload File </Button>


        <span class="readBytesButtons">
            <button>entire file</button>
        </span>
        <div id="byte_range"></div>
        <div id="byte_content"></div>
        <pre id="pre_object"></pre> */}
        

        {/*  */}
        <br/><br/><br/>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={this.props.handleChange("firstName")}
            defaultValue={values.firstName}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={this.props.handleChange("lastName")}
            defaultValue={values.lastName}
          />
        </Form.Field>
        <Form.Field>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            onChange={this.props.handleChange("email")}
            defaultValue={values.email}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <input
            placeholder="Phone Number"
            onChange={this.props.handleChange("phoneNumber")}
            defaultValue={values.phoneNumer}
          />
        </Form.Field>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default UserDetails;
