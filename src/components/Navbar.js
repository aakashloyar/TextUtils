import React from 'react'
//react function component'
import About from './About.js'
import Textform from './Textform.js'
import PropTypes from 'prop-types'
import Alert from './Alert.js'
//import {Routes, Route, Link, Router} from 'react-router-dom';
import {Outlet, Link } from "react-router-dom";
export default function Navbar(props) {
  const func=()=>{
    if(props.mode==='Light') {
      document.body.style.backgroundColor="grey";
    }
  }
  return (
    <>
    
    {/* backgroundColor:props.mode==='Light'?'white':'black', */}
    {/* `${props.mode==='Light'?(backgroundColor:'black'):(backgroundColor:'white')}` */}
    <nav className="navbar navbar-expand-lg bg-body-dark" style={{backgroundColor:props.mode==='Light'?'#E1ECC8':'black',color:props.mode==='Light'?'black':'white'}} >
  <div className="container-fluid" >
    <a className="navbar-brand" href="#" style={{color:props.mode==='Light'?'black':'white'}}>{props.company}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="/"style={{color:props.mode==='Light'?'black':'white'}}>Home</a> */}
          <Link className="nav-link active"  aria-current="page"  to="/" style={{color:props.mode==='Light'?'black':'white'}}>Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/about" style={{color:props.mode==='Light'?'black':'white'}}>{props.link}</a> */}
          <Link className="nav-link" to="/about" style={{color:props.mode==='Light'?'black':'white'}}>{props.link}</Link>
        </li>
      </ul>
     
      
      <div className={`form-check form-switch text-${props.mode==='Light'?'Dark':'Light'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
<Outlet />
    </>
  )
}
Navbar.propTypes= {
    title:PropTypes.string.isRequired,//**is required is used to ensure that it is required necessirely */
    about:PropTypes.string
}//type should be same.
Navbar.defaultProps ={
    title:'Set Title here',
    about:'About'
}//this will act as default if props are not passed in the file from where we are importing