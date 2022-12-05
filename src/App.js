
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import { Route } from 'react-router-dom';

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState(null);
    
    const showAlert =(message,type)=>{
      setalert({
        msg:message,
        typ: type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
    }

   const toggleMode=()=>{
      if(mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor='black';
      }
      else{
        setmode('light');
        document.body.style.backgroundColor='white';
      }
    }

  return (
    <>
    <Navbar title="Text Manipulator" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">

    <Textform showAlert={showAlert} mode={mode} heading="Enter your text to analyze"/>

    <About mode={mode}/>
      </div>

{/* <Routes>
      <Navbar title ="Text Manipulator" />
      <Alert alert={alert}/>
      
    
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Textform showAlert={showAlert} heading="Enter your text here" />}/>
      
      
</Routes> */}

    </>

  );
}

export default App;
