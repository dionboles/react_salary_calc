import React from "react";
import ReactDom from"react-dom";
import Calc from "./calc";
// class App extends React.Component{

//     render(){
//         return(
//             <div>
//                 <h1>Enter Salary to Hourly</h1>
//             </div>
//         )
//     }
// }

const App = ()=>{
    return(
        <div>
            <Calc/>
        </div>
    )
}
ReactDom.render(<App/>,document.getElementById("app"));