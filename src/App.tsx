import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Basic types
  let firstValue: string = 'name';
  let secondValue: number = 42;
  let thirdValue: boolean = true;
  let fourthValue: number[] = [2,3,4];
  let fifthValue: Array<string> = ['2', '3', '4'];

  // tuple
  let tuple: [string, number] = ['hello', 123];

  // enum
  enum Codes { first = 1, second = 2};

  // any
  let firstName: any = 'string';
  firstName = 42;

  // void
  const warning = (): void => {
    console.log('warning')
  };

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
        <p>
          The value {tuple[0]} is of {typeof tuple[0]} type.
          The value {tuple[1]} is of {typeof tuple[1]} type.
        </p>
      </header>
    </div>
  );
}

export default App;
