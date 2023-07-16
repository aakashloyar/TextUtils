import React,{useState} from 'react'
import '../App.css'
import PropTypes from 'prop-types';

export default function Textform(props) {
  const handleupClick=()=> {
    console.log("Uppercase"+text);
    let newtext=text.toUpperCase();
    //setText("you have clicked on handleupclick")
    setText(newtext);  
     //props.showAlert("Converted to Uppercase","success"); 
}
const handledownClick=()=> {
  console.log("Uppercase"+text);
  let newtext=text.toLowerCase();
  //setText("you have clicked on handleupclick")
  setText(newtext);   
 // props.showAlert("Converted to Lowercase","success"); 
}
const handleclearClick=()=> {
console.log("Uppercase"+text);
let newtext='';
//setText("you have clicked on handleupclick")
setText(newtext);   
//props.showAlert("Successfully Cleard","success"); 
}
const handlecopyClick=()=> {
var text=document.getElementById("myBox");
text.select();
text.setSelectionRange(0,9999);
navigator.clipboard.writeText(text.value);
//props.showAlert("Copied to ClipBoard","success"); 
}

const handleOnChange=(event)=> {
    console.log("Uppercase");  
    setText(event.target.value); 
}
const handleRemoveClick=()=> {
  let newText=text.split((/[ ]+/));
  setText(newText.join(" "))
 // props.showAlert("ExtraSpace Removed Successfully","success"); 

}
const[text,setText]=useState('Enter text here2');
  return (
    <div>
      <div className="container"  style={{color:props.mode==='Dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 a">
          <textarea className="form-control " id="myBox" rows="8" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='Light'?'white':'grey',color:props.mode==='Dark'?'white':'black'}}></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleupClick} >Convert to UpperCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handledownClick} >Convert to LowerCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleclearClick} >clear</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlecopyClick} >copy</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleRemoveClick} >RemoveExtraSpace</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='Dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      {/* <p>{text.length>0?text.split(" ").length:0} words and {text.length} </p> */}
       {/* <p>{text.split(" ")[text.split(" ").length-1].length()===0?text.split(" ").length-1:text.split(" ").length} words and {text.length} </p>  */}
      {/* <p>{0.008*text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview here"}</p> */}
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </div>
  )
}
