import React, { Component } from 'react';
import {Divider,Menu,Dropdown,Grid} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {setMessage,changeEstado} from './actions/actions';
import MyMenu from './components/MyMenu';
import Inputs from './components/Inputs';

class App extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      
      <div className="App">
      <Divider/>
      <MyMenu/>
      <Divider/>
            <label> Mensaje: {this.props.Mensaje}</label>
            <Inputs/>
      <Divider/> 
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    Mensaje : state.mensaje , // el mensaje del store es con M miniscula, con M mayuscula es el local
    Estado : state.estado
  }
  
}

const ActiontoProps = {
  setMessage,changeEstado
}
export default connect(mapStateToProps,ActiontoProps)(App);
