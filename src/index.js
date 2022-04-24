import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'macro-css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
