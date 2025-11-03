import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import list from '../miscellaneous/newlist.jsx'
import DashBoardComponent from '../miscellaneous/dashboard.jsx'
import Table from '../miscellaneous/table.jsx'
import JsxBasics from '../miscellaneous/basic.jsx'
import LaptopFunction from '../miscellaneous/Laptopfunction.jsx'
import Student from '../miscellaneous/StudentFunction.jsx'
import CSSinline from '../miscellaneous/cssinline.jsx'
import CSSExternal from '../miscellaneous/cssExternal.jsx'
import Food from '../miscellaneous/food.jsx'
import Heading from '../miscellaneous/comp1.jsx'
import TailwindExample from '../miscellaneous/tailwind.jsx'
import Card from '../activity1/card.jsx'
// function Laptop(){

//     return(
//         <div>
//             <h3>This is Laptop component</h3>
            
//         </div>
//     )
// }



// function Box(){

//     return(
//         <div>
//             <h3>This is box component</h3>
//             <Laptop/>
//         </div>
//     )
// }


// class Student extends React.Component{
//   render(){
//     return(
//       <div>
//         <h2>This is student class component</h2>     
//       </div>
//     )
//   }
// }


let modelno=123;
let config={
  ram:16
}
let course="CSE";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    {list()} */}
    {/* <DashBoardComponent/>
      
    <LaptopFunction brand="hp" colour="silver" year={2025} model={modelno} config={config}/> */}
    {/* <Table/>
    <JsxBasics/>
     
    <Box/> */}

    {/* <Student name="MIku" age={20} dob="18-05-2007" course={course}/>
    <CSSinline/>

    <CSSExternal/> */}
    {/* <Heading/> */}

    {/* <Food name="Pizza" type="Italian"/>
    <Food name="Noodles" type="Chinese"/>
    <Food name="Pav Bhaji" type="Indian" /> */}
    {/* <TailwindExample/> */}
    <Card/>
  </StrictMode>,
)