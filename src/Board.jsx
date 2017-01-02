import { Component } from 'react';
import Square from './Square';
import React from 'react';

class Board extends Component{
    render(){
        console.log(this.props.store.getState());
        return(
            <div>
                {this.props.store.getState().board.map((value, index) =>                     
                    <Square value={value} index={index} onClick={() => this.props.store.dispatch({
                        type: 'CHANGE_COLOR',
                        index
                    })}/>                    
                )}
            </div>
        )
    }
}

export default Board;