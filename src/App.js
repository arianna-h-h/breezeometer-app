import React, { Component } from 'react';
import DisplayRow from './DisplayRow';
import DisplayRowHead from './DisplayRowHead';
import DisplayHistoryTable from './DisplayHistoryTable';
import DisplayTable from './DisplayTable';
import AppInput from './AppInput';
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      locationText: ''
  };

  this.handleLocationTextInput =
  this.handleLocationTextInput.bind(this); //bind current this(of constructor)
  // to handler, so this will always refer to current object
}
  handleLocationTextInput(locationText){ //handler function that updates state
  this.setState({
    locationText: locationText
  });
}

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h1>Air Quality Index Finder</h1>
        </div>
        <div className="appinput">
        <AppInput
          locationText={this.state.locationText}
          onLocationTextInput={this.handleLocationTextInput}
        />
      </div>
      <div className="displaytable">
        <DisplayTable
          locationText={this.state.locationText}
        />
      </div>
      <div className="displayhistorytable">
        <DisplayHistoryTable />
        </div>
      </div>
    );
  }
}


export default App;
