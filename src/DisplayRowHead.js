import React, { Component } from 'react';
import DisplayRow from './DisplayRow';


class DisplayRowHead extends Component {
  render() {
    return (
      <table>
      <tr><th colSpan="4">{'Your Search'}</th></tr>
    </table>
  );
  }
}

export default DisplayRowHead;
