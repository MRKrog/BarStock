import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
