import React, { Component } from "react";
import Display from "./components/Display/Display";
import Buttons from "./components/Buttons/Buttons";
import "./App.css";

class App extends Component {
  state = {
    displayNumber: "0",
    waitingOperator: false,
    value: 0,
    operator: null,
    result: 0
  };

  handleKeyDown = event => {
    switch (event.key) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        event.target.value = event.key;
        this.updateDisplay(event);
        break;
      case "+":
      case "-":
      case "*":
      case "x":
      case "/":
      case ":":
        event.target.value = event.key;
        this.doOperation(event);
        break;
      case "=":
      case "Enter":
        event.target.value = event.key;
        this.calculateResult(event);
        break;
      case "Backspace":
        event.target.value = event.key;
        this.resetDisplay();
        break;
      default:
        break;
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  updateDisplay = event => {
    const { displayNumber, waitingOperator } = this.state;
    const { value } = event.target;
    if (waitingOperator) {
      this.setState({
        displayNumber: value,
        waitingOperator: false
      });
    } else {
      this.setState({
        displayNumber: displayNumber === "0" ? value : displayNumber + value
      });
    }
  };

  handleDots = event => {
    const { displayNumber } = this.state;
    if (displayNumber.indexOf(".") === -1) {
      this.setState({
        displayNumber: displayNumber + "."
      });
    }
  };

  doOperation = event => {
    let { value } = event.target;
    let newValue = parseFloat(this.state.displayNumber);
    if (value === ":") {
      value = "/";
    } else if (value === "x") {
      value = "*";
    }
    
    if (this.state.waitingOperator === false) {
      this.calculateResult(event);
    }
    
    this.setState({
      waitingOperator: true,
      operator: value,
      value: newValue
    });
    
  };

  calculateResult = event => {
    const { displayNumber, value, operator, result} = this.state;
    console.log("result" + " = "+value+` ${operator} `+displayNumber);
    switch (operator) {
      case "+":
        this.setState({result: result + parseFloat(displayNumber)})
        break;
      case "-":
        this.setState({result: result - parseFloat(displayNumber)})
        break;
      case "*":
        this.setState({result: result * parseFloat(displayNumber)})
        break;
      case "/":
        this.setState({result: result / parseFloat(displayNumber)})
        break;
      case "=":
      case "Enter":
        this.setState({result: parseFloat(displayNumber)})
        break;
      default:
        this.setState({result: parseFloat(displayNumber)})
        break;
    }
    
    this.setState({
      displayNumber: this.state.result,
      value: this.state.result,
      operator: event.target.value
    });
  };

  resetDisplay = () => {
    this.setState({
      displayNumber: "0",
      waitingOperator: false,
      value: null,
      operator: null
    });
  };
  render() {
    return (
      <div className="App">
        <div className="title">React Calculator</div>
        <Display display={this.state.displayNumber} />
        <Buttons
          update={this.updateDisplay}
          inputDots={this.handleDots}
          operation={this.doOperation}
          calcResult={this.calculateResult}
          reset={this.resetDisplay}
        />
      </div>
    );
  }
}

export default App;
