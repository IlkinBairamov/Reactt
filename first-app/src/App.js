import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Posts } from './components/Posts';
import { Clients } from './components/Clients';

function App() {
  const [getPage,setPage]=React.useState(true);

  const handleClick=()=>{
    setPage((current)=>!current)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Click</button>
        {getPage?<Posts/>:<Clients/>}
       
      </header>
     
    </div>
  );
}

export default App;
