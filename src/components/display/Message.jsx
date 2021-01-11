import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return (
            <div style = {{marginLeft:15}}>
                {this.props.text}
            </div>
        )
    }
}
