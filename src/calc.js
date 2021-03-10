import React from 'react';
import './styles.scss';
class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: 0,
      week: 0,
    };
  }
  data(event) {
    let text = event.target.value;
    text.indexOf(',') != -1
      ? (text = parseFloat(text.split(',').join('')))
      : (text = text);
    let week = text / 52;
    console.log();

    text = text / 52;
    text = text / 40;

    this.setState({
      salary: Math.round(text).toFixed(2),
      week: Math.round(week).toFixed(2),
    });
  }
  render() {
    return (
      <main className='main'>
        <h1 className='title'>Salary to Hourly Rate </h1>
        <h2 className='subtitle'>Your Hourly Rate : {this.state.salary}</h2>
        <h2 className='subtitle'>Your Weekly Rate : {this.state.week}</h2>
        <div className='inputDiv'>
          <label>Enter Yearly Salary :</label>
          <input
            className='inputSalary'
            type='text'
            onChange={this.data.bind(this)}></input>
        </div>
      </main>
    );
  }
}

export default Calc;
