//import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import  Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import About from './components/About';
import Alert from './components/Alert.js'
import React,{useState} from 'react'
function App() {
  const[alert,setalert]=useState(null);
  const toggleMode=()=>{
    if(mode==='Light') {
      setMode('Dark')
      document.body.style.backgroundColor='#042743';
      //alert('dark');
       // setInterval(()=>{
      //   document.title='TextUtils is Amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtilsNow';
      // },1500);
      showAlert("Dark mode has been enabled","success");
    }
    else {
      setMode('Light')
      document.body.style.backgroundColor='white';
      //alert('light');
      showAlert("Light mode has been enabled","success");
    }
  }
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500);
  }
  const[mode,setMode]=useState('Light');
  return (
   <>
    
   <BrowserRouter>
   <Navbar company="TextUtils" home="Home" link="About" showAlert={showAlert} mode={mode} toggleMode={toggleMode} alert={alert}/>  
   <Alert alert={alert}/>
      <Routes>
        <Route path="" element={<div className="container">
        <Textform heading="Enter Text" mode={mode} showAlert={showAlert} />
        </div> } />
        {/* <Route path="" element={<Textform/>}/> */}
        <Route path="/about" element={< About/>} />
      </Routes>
      {/* <Alert alert={alert}/> */}
    </BrowserRouter>
    {/* <Alert alert={alert}/> */}
   </>
  );
//  return(
//   <>
//   <Alert alert={alert}/>
//   <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navbar company="TextUtils" home="Home" link="About" showAlert={showAlert} mode={mode} toggleMode={toggleMode} alert={alert}/>} >

//           <Route index element={<Textform  heading="Enter Text" mode={mode} showAlert={showAlert}/>} />
//           <Route path="about" element={<About />} />
          
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </>
  
//  );
}

export default App;
