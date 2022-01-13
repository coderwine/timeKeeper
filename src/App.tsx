import React from 'react';
import './App.css';
import Button from './components/Button';
import Timer from './components/Timer';

// function App() {
const App: React.FC = () => {

 return (
    <div className="App">
      <div>
        Empty Space
      </div>
      <hr />
        <Timer />
      <hr />
      <div>
        <Button />
      </div>
    </div>
  );
}

export default App;
