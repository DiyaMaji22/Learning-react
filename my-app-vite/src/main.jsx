import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import list from './newlist.jsx'
import DashBoardComponent from './dashboard.jsx'
import Table from './table.jsx'
import JsxBasics from './basic.jsx'
import LaptopFunction from './Laptopfunction.jsx'


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




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    {list()} */}
    <DashBoardComponent/>

    <LaptopFunction brand="hp" colour="silver"/>
    {/* <Table/>
    <JsxBasics/>
     
    <Box/> */}
  </StrictMode>,
)