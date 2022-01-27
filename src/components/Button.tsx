import React, {useState} from 'react';
import { buttonProps } from '../helpers/interfaces';

const Button: React.FC<buttonProps> = ({sandTimer}) => {

    const [status, setStatus] = useState<string>('Start');

    const startStop = (): void => {
        // status === 'Start' ? setStatus('Stop') : setStatus('Start');

        if (status === 'Start') {
            setStatus('Stop');
            // sandTimer();
            ticking();
        } else {
            ticking();
            setStatus('Start');
            // console.log('Stopped!');
            // clearInterval()
        }
    }

    const ticking = (): void => {
        let counter = setInterval(():void => sandTimer(), 1000)
        
        if(status === 'Start') {
            sandTimer();
            let start = () => counter;
            start();
        } else {
            console.log(clearInterval(counter), status);
            clearInterval(counter);
        }
    }

    // const ticking = setInterval(():void => sandTimer(), 1000)

    // clearInterval(sandTimer());

    return(
        <button onClick={startStop} >
            {status}
        </button>
    )
}

export default Button;