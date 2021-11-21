import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = "react";
function App() {
  return (

    <>
      <Navbar title = "TextUtils" aboutText = "About TextUtils"/>
      <div className="container">
        <TextForm heading = "enter the text to analyze"/>
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
