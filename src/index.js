import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var DATA= [
  {location: 'Austin, TX', AQI: '51', color: '#F8FC02', time: new Date()}
];

ReactDOM.render(<App data={DATA} />, document.getElementById('root'));
registerServiceWorker();
