import React, { Component } from 'react';
import './App.css';


class App extends Component{
  render() {
    console.log(this.props.store.getState());    
    return(
      
      <div>
        PLAYER SCORE 
        {' '}
        {this.props.store.getState().playerScore}
        {' '}
        COMPUTER SCORE:
        {' '}
        {this.props.store.getState().computerScore}
        {' '}
        <button onClick={() => {
          this.props.store.dispatch({
            type: 'INCREMENT_PLAYER'
          })
        }}
        > ADD </button>
      </div>
    )
  }
}

export default App;
