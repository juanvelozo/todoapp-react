import React from 'react';
import ReactDOM from 'react-dom';
import { ToDoApp } from './components/ToDoApp';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

