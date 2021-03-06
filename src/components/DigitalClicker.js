// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor(){
        super()
        this.state ={
            timesClicked : 0
        }

    }
    
    updateClick = () =>{
        this.setState(prevState =>{
            return {
                timesClicked : prevState.timesClicked + 1
            }
        })
    }

    render(){
        return <button onClick={this.updateClick}>{this.state.timesClicked}</button>
    }
}

