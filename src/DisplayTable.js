import React, { Component } from 'react';
import DisplayRow from './DisplayRow';
import DisplayRowHead from './DisplayRowHead';


class DisplayTable extends Component {

  render() {
    return (
      <div className='displaySearch'>
        <table>
          <thead>
            <DisplayRowHead />
          </thead>
          <tbody>
            <DisplayRow />
          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayTable;
