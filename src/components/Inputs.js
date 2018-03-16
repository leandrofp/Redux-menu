import React, { Component } from 'react';
import {Divider,Button,Input} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {setMessage} from '../actions/actions';

class Inputs extends Component {

  constructor(props){
    super(props)
    this.StateInput = {text:'' }
  }

  saveMessage = (e,value) => {
    this.StateInput.text = e.target.value;
  }
  handleMessage = () => {
    this.props.setMessage(this.StateInput.text)
  }

  render() {
    return (
      <div>
      {this.props.Estado === true ? <Input placeholder="ingrese su mensaje aqui" onChange={this.saveMessage} />: null}
      {this.props.Estado === true ? <Button circular color='red' onClick={this.handleMessage}> Ingresar </Button>: null}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    Mensaje : state.mensaje ,// el mensaje del store es con M miniscula, con M mayuscula es el local
    Estado : state.estado
  }
}

const ActiontoProps = {
  setMessage
}
export default connect(mapStateToProps,ActiontoProps)(Inputs);