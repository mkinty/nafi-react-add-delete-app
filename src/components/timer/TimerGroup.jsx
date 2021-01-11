import React, { Component } from 'react'
import Timer from './Timer'

export default class TimerGroup extends Component {
    render() {
        return (
            <div>
                <Timer duration = '45' title ='pomodoro'/>
                <Timer duration = '05' title ='court pause'/>
                <Timer duration = '10' title ='longue pause'/>
            </div>
        )
    }
}
