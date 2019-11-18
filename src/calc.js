import React from "react";
import "./styles.scss";
class Calc extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            salary : 0
        }
    }
    data(event){
        let text = event.target.value
        text.indexOf(',') != -1 ? text =  parseFloat(text.split(",").join("")) : text = text
        console.log()
        
        text = text /52
        text = text/40
        this.setState({
            salary : Math.round(text)
        })
    }
    render(){
        return(
            <div>
                <h1 className="title">Salary to Hourly Rate </h1>
                <h2 className="subtitle">Your Hourly Rate :  {this.state.salary}</h2>
                <div>
                    <label>Enter Yearly Salary  :</label>
                    <input className="inputSalary" type="text"onChange={this.data.bind(this)}></input>
                </div>
            </div>
        )
    }
}

export default Calc;