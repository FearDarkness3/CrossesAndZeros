import './App.css';
import { Component } from 'react';
import React from 'react';

export default class Square extends Component {
    constructor(props){
        super(props);

        this.className = 'Square';
        this.isNewRow = (index) => {
            if(index === 3 || index === 6){
                return this.className + ' SquareClearLeft';
            }

            return this.className;
        }

        this.renderSquare = (value, index) => {
            let tempClassName = value == 0 ? ' Red' : ' Blue';
            return this.isNewRow(index) + tempClassName;
        }
    }

    render(){
        return (
            <div className={this.renderSquare(this.props.value, this.props.index)} onClick={this.props.onClick}></div>
        )
    }
}