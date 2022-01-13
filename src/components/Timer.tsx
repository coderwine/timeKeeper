import React from 'react';
import { timerState, timerProps } from '../helpers/interfaces';

class Timer extends React.Component<timerProps, timerState> {
// class Timer extends React.Component<{}, timerState> {
    // constructor(props:any) { 
    constructor(props:timerProps) { 
        super(props)
            this.state = {
                startTime: props.start,
                endTime: null,
                poweredOn: props.power,
            }
    }

    // counter() {
    //     if(this.state.poweredOn !== false) {
    //         this.setState({
    //             startTime: new Date()
    //         })

    //         return(
    //             <h4>Start: {this.state.startTime?.toLocaleTimeString}</h4>
    //         )
    //     } else {
    //         return
    //     }


    // }

    render(){
        console.log(this.props)
        return(
            <>
                <h1>{this.props.bracketTime}</h1>
                {/* {this.propsthis.counter()} */}
                <h4>Start: {this.state.startTime}</h4>
                {
                    // this.props.bracketTime !== null ? <h4>Start: {this.state.startTime.toLocaleTimeString()}</h4> : null
                    // this.counter()
                }
                {/* <h4>End: {this.state.endTime?.toLocaleTimeString()}</h4> */}
            </>
        )   
    }
}

export default Timer;

//! This component will need to update the time per the status of the button, whether it is in the start or stop position.
//* This should factor three main measurements - Start time, current time "slot" (15 min increments), and Stop time. The time slot will evaluate how much to bill which will be determined on how much time has been counted so far. This means that it will need to check to see what time it is "now" vs when it started.