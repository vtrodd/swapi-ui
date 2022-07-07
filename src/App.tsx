import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useCharacter } from './hooks/people/useCharacter';

function App() {
  const [luke,loading] = useCharacter('1')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {
          loading
            ? <p>Loading...</p>
            : <p>{luke.props.name}</p>
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
