import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import { useState } from 'react';

// let name = "react";
//#333942
function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'dark'){
      document.body.style.backgroundColor='white';
      setmode('light');
    }
    else{
      document.body.style.backgroundColor='#333942';
      setmode('dark');
    }
  }

  return (

    <>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <div className="container">
        <TextForm heading = "enter the text to analyze" mode = {mode} />
        {/* <About/> */}
      </div>
    </>
   
  );
}

export default App;
/*


import logo from './logo.svg';

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
      </header>
    </div>
    */
