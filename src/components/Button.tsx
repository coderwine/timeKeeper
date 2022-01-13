import React, {useState} from 'react';
import { buttonProps } from '../helpers/interfaces';

const Button: React.FC<buttonProps> = ({sandTimer}) => {

    const [status, setStatus] = useState<string>('Start');

    const startStop = (): void => {
        // status === 'Start' ? setStatus('Stop') : setStatus('Start');

        if (status === 'Start') {
            setStatus('Stop');
            sandTimer();
            ticking();
        } else {
            setStatus('Start');
            console.log('Stopped!');
        }
    }

    const ticking = (): void => {
        setInterval(():void => sandTimer(), 1000)
    }

    return(
        <button onClick={startStop} >
            {status}
        </button>
    )
}

export default Button;