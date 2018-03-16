import React, { Component } from 'react';
import {Divider} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {setMessage} from '../actions/actions';
import Nieto from '../components/Nieto';

class Hijo extends Component {
  render() {
    return (
      <div>
      <Nieto/>
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
export default connect(mapStateToProps,ActiontoProps)(Hijo);