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
import EvenHandling from '../miscellaneous/eventhandling.jsx'
import Counter from '../activity2/counter.jsx'
import UserStateExample from '../miscellaneous/useStateExample.jsx'
import UserEffectExample from '../miscellaneous/useEffectExample.jsx'
import Password from '../activity3/password.jsx'
import WithoutUserContext from '../usecontext/withoutusecontext.jsx'  
import Themeprovider from '../activity4/themeprovider.jsx'
import ParentComp from '../useCallback/parentComp.jsx'
import UseMemoExample from '../useMemo/useMemoexample.jsx'
import UseReducerExample1 from '../useReducer/useReducerExample1.jsx'
// import ChildComp from '../useCallback/childComp.jsx'
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
    {/* <UseMemoExample/>
    <ParentComp/> */}
    <UseReducerExample1/>
   </StrictMode>,
)