import React, { Component } from 'react';

class AppInput extends Component {
  constructor(props){
    super(props);
    this.handleLocationTextInputChange =
    this.handleLocationTextInputChange.bind(this);
  }


  handleLocationTextInputChange(e) {
  this.props.onLocationTextInput(e.target.value);
}

render(){
  return (
    <div className="inputWrapper">
    <h3>Enter a location to search Air Quality</h3>
    <div className="searchArea">
    <center>
    <form>
    <input type="text"
    placeholder="Enter location"
    value={this.props.locationText}
    onChange={this.handleLocationTextInputChange}
    />
  </form>
    </center>
  </div>
  </div>
  ) //end return
} //end render()
} //end class

export default AppInput;
