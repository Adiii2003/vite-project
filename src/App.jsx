import React from 'react'
import Student from './Student';
import Imagemanipulation from './Imagemanipulation';
function App() {
  const h1=<h1>Hello World</h1>;
 const mystyle={
  color:'red',
  backgroundColor:'yellow'
 }
//  const studentdata =[{
//   college:"ABES Engineering College",
//   name:"Aditya",
//   pic:<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height={100} width={100}/>,
//   branch:"CSE",
//   roll:"2300320100008",
//   section :"B"
//  },
//  {
//   college:"ABES Engineering College",
//   name:"Akash",
//   pic:<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height={100} width={100}/>,
//   branch:"CSE",
//   roll:"2300320100012",
//   section :"B"
//  },
//  {college:"ABES Engineering College",
//  name:"Amit",
//  pic:<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height={100} width={100}/>,
//  branch:"CSE",
//  roll:"30023947937",
//  section :"B"}]
  return (
//     <div style={{backgroundColor:'cyan'}}>
//       {h1}
    
//     <div style={mystyle}>
//       ABES Engineering College
//     </div>
//     <div  style={{display:'flex'}}>
//       {/* <Student data ={studentdata[1]}/> */
//       studentdata.map(
//         (ele)=>{
//           return <Student data={ele}/>
//         }
//       )
//       }
 
//       {/* <Student college="ABES Engineering College" 
//       name="Rahul"
//       branch="CSE"
//       roll="2328392"
//       section="A"
      
//       />

// <Student college="ABES Engineering College" 
//       name="Ankit"
//       pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height={100} width={100}/>}
//       branch="CSE"
//       roll="787878"
//       section="A"
      
//       />

//       <Student college="ABES Engineering College" 
//       name="Amit Tomer"
//       branch="CSE"
//       roll="6754890"
//       section="A"
      
//       /> */}
//     </div>
//     </div>
  <div>
    <h2>Hello using stateHook</h2>
    <div>
      {/* <UseStudentState/> */}
      <Imagemanipulation/>
    </div>
  </div>
  )
}

export default App