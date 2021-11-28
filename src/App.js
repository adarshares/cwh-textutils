import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

// let name = "react";
//#333942
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode === 'dark'){
      document.body.style.backgroundColor='white';
      setmode('light');
      showAlert("Light mode has been enabled","success");
    }
    else{
      document.body.style.backgroundColor='#333942';
      setmode('dark');
      showAlert("Dark mode has been enabled","success");
    }
  }

  return (

    <>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading = "enter the text to analyze" mode = {mode} showAlert={showAlert} />
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
