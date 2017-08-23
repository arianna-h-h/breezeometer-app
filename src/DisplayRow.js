import React from 'react';

function DisplayRow(props) {
    return (
      <table>
        <tr>
          <th>Location</th>
          <th>Air Quality Index</th>
          <th>Color </th>
          <th>Date </th>
        </tr>
        <tr>
          <td>{props.location}</td>
          <td>{props.AQI}</td>
          <td>{'#F8FC02'}</td>
          <td>{'date'}</td>
        </tr>
      </table>

    );
  }


export default DisplayRow;
