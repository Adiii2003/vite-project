import React,{useState} from 'react'
import cat from './cat3.png';
function Imagemanipulation(){
    const[height,setHeight]=useState(100);
    const[Rotate,setRotate]=useState(0);
    const[Background,setBckground]=useState(0)
    function enhanceHeight(){
        setHeight(height+30)
    }
    function RotateImage(){
        setRotate(RotateImage+30)
    }
    function ChangeBackground(){
        setBckground(Background)
    }
    return (
<div style={{border:'2px solid red',height:"300px" , width:"400px"
    ,marginLeft:"550px", backgroundColor:'#9694FF'}}>
    <div style={{marginLeft:"100px", backgroundColor:"#432E54", height:"100px", width:"100px", border:"1px solid black"}}>
      <img src={cat}  style={{transform:`rotate(${RotateImage}deg)`}} height={100} width={100} alt="cat image" />
    </div>
    
    <div style={{marginTop:"100px"}}>
    <button id='btn'>Enhance Height</button>
    <button id='btn'>Enhance Width</button>
    <button id='btn'>Rotate</button>
    <button id='btn'>ChangeBackground</button>
    {RotateImage}
    </div>
    </div>
    )}
    export default Imagemanipulation