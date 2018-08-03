import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MasterBox from './components/MasterBox.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MasterBox url='http://hp-api.herokuapp.com/api/characters'></MasterBox>,
  document.getElementById('root')
);
registerServiceWorker();
