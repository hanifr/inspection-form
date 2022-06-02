import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MainForm from './components/MainForm';
import { Container } from 'semantic-ui-react';

class App extends Component {

  render() {
    return(
      <div>
      <Container textAlign='center'>
        <MainForm />
      </Container>    
      <Container>
        <MainForm/>
      </Container>
      </div>
    )
  }
}

export default App;
