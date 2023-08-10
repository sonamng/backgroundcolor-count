"use client"
import React,{useState} from 'react';


const Page = () => {
// this state for count the button howmany clicked on that particular button.
    const [red,setRed]=useState(0)
    const [green,setGreen]=useState(0)
    const [blue,setBlue]=useState(0)
    
    const handleRed = () => {
        setRed(red+1)    
    };
    const handleGreen = () => {
        setGreen(green+1)    
    };
    const handleBlue = () => {
        setBlue(blue+1)    
    };


    
// This state i create a change the color of background the box div.
    let yellow = '#ffc800';
    const [bgColor, setBgColor] = useState(yellow);
    
    const changeColor =()=>{
      let redbutton = 'red';
      setBgColor(redbutton);
    }
    
    const changeColorGreen=()=>{
        let greenbut="green";
        setBgColor(greenbut);
        
    }
    
    const changeColorBlue=()=>{
        let bluebut="blue";
        setBgColor(bluebut); 
    }  


  return (
    <div>
        <h1>Background Color Change</h1>
        <div className="box" style={{background: bgColor}}></div>
        <p className="para">This is color button. If you click on the particular button then color will be change. </p>
        
        <div className="button_box1">
            <h3>Red:{red}</h3>
            <button className="one" onClick={()=>{handleRed();changeColor();}} >Red</button>
        </div>

        <div className="button_box2">
            <h3>Green:{green}</h3>
            <button className="one"  onClick={()=>{handleGreen();changeColorGreen();}} >Green</button>
        </div>
 
        
        <div className="button_box3" >
            <h3>Blue:{blue}</h3>
            <button className="one"  onClick={()=>{handleBlue();changeColorBlue();}} >Blue</button>
        </div>
        
       
    </div>
  );
};

export default Page;

