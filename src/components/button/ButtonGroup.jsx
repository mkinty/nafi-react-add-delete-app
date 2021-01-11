import React, { Component } from 'react'
import Button from './Button'


export default class ButtonGroup extends Component {
    render() {
        return (
            <div>

                {/* Sans la création du component Button (enfant de ButtonGroup), on utilise: */}
                
                {/* <button onClick={this.props.onStart}>Start</button>
                <button onClick={this.props.onStop}>Stop</button>
                <button onClick={this.props.onReset}>Reset</button> */}

                {/* Avec le component Button */}
                <Button 
                    text = 'start'
                    onBtnClick = {this.props.onStart}
                    btnCssClasses = 'btn btn-success ml-3'
                />
                <Button 
                    text = 'stop'
                    onBtnClick = {this.props.onStop}
                    btnCssClasses = 'btn btn-warning ml-3'
                />
                <Button 
                    text = 'reset'
                    onBtnClick = {this.props.onReset}
                    btnCssClasses = 'btn btn-danger ml-3'
                />

            </div>
        )
    }
}
