import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let firstValue: string = 'name';
  let secondValue: number = 42;
  let thirdValue: boolean = true;
  let fourthValue: number[] = [2,3,4];
  let fifthValue: Array<string> = ['2', '3', '4'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstValue} is of {typeof firstValue} type.
          The value {secondValue} is of {typeof secondValue} type.
          The value {thirdValue} is of {typeof thirdValue} type.
          The value {fourthValue} is of {typeof fourthValue} type.
          The value {fifthValue} is of {typeof fifthValue} type.
        </p>
      </header>
    </div>
  );
}

export default App;
