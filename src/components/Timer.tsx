import React from 'react';
import { timerState } from '../helpers/interfaces';

//! This component will need to update the time per the status of the button, whether it is in the start or stop position.
//* This should factor three main measurements - Start time, current time "slot" (15 min increments), and Stop time. The time slot will evaluate how much to bill which will be determined on how much time has been counted so far. This means that it will need to check to see what time it is "now" vs when it started.

class Timer extends React.Component<{}, timerState> {
    constructor(props:any) { //! Placehold of ANY type during build
        super(props)
            this.state = {
                startTime: new Date(),
                bracketTime: null,
                endTime: new Date(),
            }
    }



    render(){
        return(
            <>
                <h1>{this.state.bracketTime}</h1>
                <h4>Start: {this.state.startTime.toLocaleTimeString()}</h4>
                <h4>End: {this.state.endTime?.toLocaleTimeString()}</h4>
            </>
        )   
    }
}

export default Timer;