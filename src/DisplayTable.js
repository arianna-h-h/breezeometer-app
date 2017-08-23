import React, { Component } from 'react';
import DisplayRow from './DisplayRow';
import DisplayRowHead from './DisplayRowHead';


class DisplayTable extends Component {
/*  constructor(props){
    super(props)
    this.state = {
      locationText: this.props.locationText,
    };
  }; */

  render() {
    var row = [];

    this.props.data.forEach((locat) => {
      row.push(<DisplayRowHead location={locat.location} key={locat.location} />)
    });
    return (
      <div className='displaySearch'>
        <table>
          <thead>
            <DisplayRowHead />
          </thead>
          <tbody>
          {row}

          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayTable;
