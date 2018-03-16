import React, { Component } from 'react';
import {Divider,Menu,Dropdown,Grid} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {setMessage,changeEstado} from './actions/actions';
import Inputs from './components/Inputs'

class App extends Component {

  constructor(props){
    super(props)
  }

  handleItemClick = (e, { name }) => {
    
    if(name === 'Ocultar boton' && this.props.Estado===true)
      this.props.changeEstado();
    if(name === 'Mostrar boton' && this.props.Estado===false)
      this.props.changeEstado();  

      console.log("toque: ", name , this.props.Estado)
  }


  render() {
    return (
      
      <div className="App">
      <Divider/>
      <Menu secondary vertical>
        <Menu.Item name="Mostrar boton" active={this.props.Estado === true} onClick={this.handleItemClick} />
        <Menu.Item name="Ocultar boton" active={this.props.Estado === false} onClick={this.handleItemClick} />
      </Menu>
            <label> Mensaje: {this.props.Mensaje}</label>
            <Inputs/> 
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
