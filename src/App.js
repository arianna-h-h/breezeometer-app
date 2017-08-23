import React, { Component } from 'react';
import DisplayRow from './DisplayRow';
import DisplayRowHead from './DisplayRowHead';
import DisplayHistoryTable from './DisplayHistoryTable';
import DisplayTable from './DisplayTable';
import AppInput from './AppInput';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      locationText: this.props.location, //change later to blank (so input will be set as location)
    };

    this.handleLocationTextInput =
    this.handleLocationTextInput.bind(this); //bind current this(of constructor)
    // to handler, so this will always refer to current object
  }

  handleLocationTextInput(locationText){ //handler function that updates state
  this.setState({
    locationText: this.state.locationText
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
            //locationText={this.state.locationText}
            //onLocationTextInput={this.handleLocationTextInput}
          />
        </div>
        <div className="displaytable">
          <DisplayTable
            //locationText={this.state.locationText}
            data={this.props.data}
            //props because nothing is being set to state yet
          />
        </div>
        <div className="displayhistorytable">
          <DisplayHistoryTable />
        </div>
      </div>
    );
  }
}

var DATA= [
  {location: 'Austin, TX', AQI: '51', color: '#F8FC02', time: new Date()}
];

export default App;
