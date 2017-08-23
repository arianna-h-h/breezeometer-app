import React, { Component } from 'react';

class DisplayRow extends Component {
  render() {
    return (
      <table>
        <tr>
        <th>Location</th>
        <th>Air Quality Index</th>
        <th>Color </th>
        <th>Date </th>
      </tr>
      <tbody>
      <tr>
      <td>{'Austin, TX'}</td>
      <td>{'51'}</td>
      <td>{'#F8FC02'}</td>
      </tr>

      </tbody>
      </table>
    );
  }
}

export default DisplayRow;
