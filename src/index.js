import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Hello from './container/Home/Home';

ReactDOM.render( <
    React.StrictMode >
    <
    Hello / >
    <
    /React.StrictMode>,
    document.getElementById('root')
);


serviceWorker.unregister();