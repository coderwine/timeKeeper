import React, {useState} from 'react';
import { buttonProps } from '../helpers/interfaces';

const Button: React.FC<buttonProps> = ({sandTimer}) => {

    const [status, setStatus] = useState<string>('Clock In');
    const [btnFunc, setBtnFunc] = useState<any>(() => startTimer)
    
    let track:number;
    // let track:any = setInterval(():void => {
    //     sandTimer();
    // }, 1000);

    // const startTimer = (): void => {
    function startTimer(): void {

            // status === 'Clock In' ? 
            // setStatus('Clock Out') : 
            // setStatus('Clock In');
        setStatus('Clock Out');
        setBtnFunc(() => stopTimer);

            // let track;
            
            // let track = setInterval(():void => {
            //     sandTimer();
                // status === 'Clock In' ? sandTimer() : clearInterval(track);
                
                // if(status !== 'Clock In') {
                //     console.log(status)
                //     clearInterval(track);
                // }
            // }, 1000);
            
            // if(status !== 'Clock In') {
            //     console.log(status)
            //     clearInterval(track);
            // } else {
                sandTimer();
                // track = setInterval(():void => {
                //     sandTimer();
                // }, 1000)
            // }
            // track()

    }

    const stopTimer = ():void => {
        console.log('CLICKED!')
        clearInterval(track)
        setStatus('Clock In');
        setBtnFunc(startTimer)
    }

    // console.log(typeof track)
    return(
        // <button onClick={startStop} >
        <button onClick={btnFunc} >
            {status}
        </button>
    )
}

export default Button;