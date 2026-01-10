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
import Toggle from '../activity5/toggle.jsx'
import Controlledcomponent from '../miscellaneous/controlledcomponent.jsx'
import HTTprequest from '../HttpMenthods/HTTprequest.jsx'
import Dummyjson from '../HttpMenthods/Dummyjson.jsx'
import HTTPReqestaxios from '../HttpMenthods/HTTPReqestaxios.jsx'

import { Provider } from 'react-redux'
import { store } from './Store.jsx'
import BookForm from '../activity7/bookForm.jsx'
import CounterUi from './ReduxPractical/CounterUi.jsx'
import { Form } from 'react-router-dom'
import Form1 from '../activity7/formValidation.jsx'
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
    <Form1 />
   </StrictMode>,
 
)