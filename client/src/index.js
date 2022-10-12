import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import React from 'react';

import { render } from 'react-dom'; // <- This is the correct import // statement for React version 17

import './index.css';





// const root = //ReactDOM.createRoot(document.getElementById('root'));

const root = document.getElementById('root'); // <- This is the //correct method call for React version 17

render(

  <React.StrictMode>

    <App />

  </React.StrictMode>,

  root

);


