import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "#ffffff"
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode= {mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter text to analyze" mode={mode} />
    </>
  );
}

export default App;
