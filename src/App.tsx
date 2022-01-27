import React, {useState} from 'react';
import './App.css';
import Button from './components/Button';
import Timer from './components/Timer';
// import {timerState} from './helpers/interfaces'

// function App() {
// const App: React.FC<timerState> = () => {
const App: React.FC = () => {

  const [ bracketTime, setBracketTime ] = useState<string | null>(null);
  const [ poweredOn, setPoweredOn ] = useState<boolean>(false);
  // const [ startTime, setStartTime ] = useState<Date | null>(null)
  const [ startTime, setStartTime ] = useState<string | null>(null)
  
  const sandTimer = ():void => {
    let d = new Date();
    // let toString = d.toLocaleDateString()
    // setBracketTime(toString);
    setBracketTime(d.toLocaleDateString());
    setStartTime(d.toLocaleTimeString());
    setPoweredOn(!poweredOn);
    // console.log(d.toLocaleTimeString())
  }

  return (
    <div className="App">
      <div>
        Placeholder for Navigation
      </div>
      <hr />
        <Timer start={startTime} bracketTime={bracketTime} power={poweredOn} />
      <hr />
      <div>
        <Button sandTimer={sandTimer} />
      </div>
    </div>
  );
}

export default App;
