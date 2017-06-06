import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './containers/TicTacToe';

window.onload = function(){
  const app = document.getElementById('app');
  ReactDOM.render(<TicTacToe/>, app);
};