import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import NanoCustomEventSupport from 'nano-widget/lib/nano_custom_event_support.js';
require('./scss/index.scss');

window.Dispatcher = new NanoCustomEventSupport();

ReactDOM.render(<App />, document.getElementById('root'));
