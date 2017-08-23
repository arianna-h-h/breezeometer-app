import React, { Component } from 'react';
import DisplayRow from './DisplayRow';
import DisplayRowHead from './DisplayRowHead';

class DisplayHistoryTable extends Component {
  render() {
    return (
      <div className='displayHistorySearch'>
        <table>
          <thead>
            <DisplayRowHead />
          </thead>
          <tbody>
            <DisplayRow />
            <DisplayRow />
            <DisplayRow />
            <DisplayRow />
            <DisplayRow />
          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayHistoryTable;
