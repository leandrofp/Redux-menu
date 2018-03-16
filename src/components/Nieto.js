import React, { Component } from 'react';
import {Divider,Button} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {setMessage} from '../actions/actions';

class Nieto extends Component {

  constructor(props){
    super(props)
  }

  handleClick = () => {
    this.props.setMessage("hola")
  }
  
  render() {
    return (
      <div>
      <Button onClick={this.handleClick} > Presione Aqui </Button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    Mensaje : state.Mensaje /* probar */
  }
}

const ActiontoProps = {
  setMessage
}
export default connect(mapStateToProps,ActiontoProps)(Nieto);