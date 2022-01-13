import React, {useState} from 'react';

const Button: React.FC = () => {

    const [status, setStatus] = useState<string>('Start');

    const startStop = (): void => {
        status === 'Start' ? setStatus('Stop') : setStatus('Start');
    }

    return(
        <button onClick={startStop} >
            {status}
        </button>
    )
}

export default Button;