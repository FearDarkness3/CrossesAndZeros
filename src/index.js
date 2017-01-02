import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import mainReducer from './Reducer.jsx';
import Board from './Board'
const store = createStore(mainReducer);

const render = () => ReactDOM.render(
    <Board store={store}/>,
  document.getElementById('root')
);

const computer = () => {
  let state = store.getState();
  console.log(state);
  setTimeout(() => {
    if(state.currentPlayer === 1){
      store.dispatch({type: 'INCREMENT_COMPUTER'});
    }
  }, 2000);
}

store.subscribe(render);
store.subscribe(computer);
render();