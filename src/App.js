import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Divider} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {setMessage} from './actions/actions';
import Hijo from './components/Hijo'

class App extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <Divider/>
      <Divider/>
      <Hijo/>
      <label> mensaje: {this.props.Mensaje}</label>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    Mensaje : state.mensaje /* probar */
  }
  
}

const ActiontoProps = {
  setMessage
}
export default connect(mapStateToProps,ActiontoProps)(App);
