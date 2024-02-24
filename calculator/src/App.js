
import './App.css';
import { useState } from "react";



function App() {

  const[current,setCurrent] = useState({
    currentVal: "0",
    operation: "",
    first: ""
  });

  const updateTxt = (e) => {
    setCurrent(previousState => {
      if(e === "+" || e === "-" || e === "/" || e === "x") {
        return{...previousState,currentVal:"", operation: e, first:previousState.currentVal}
      } else if (previousState.currentVal === "0") {
        return {...previousState,currentVal: e,operation:previousState.operation,first:previousState.first}
      } else {
        return { ...previousState, currentVal: previousState.currentVal + e,operation:previousState.operation,first:previousState.first}
      }
    });
  }

  const apply = () => {
    console.log(current.first);
    console.log(current.currentVal);
    let num1 = parseFloat(current.first);
    let num2 = parseFloat(current.currentVal);
    let result = 0;
    if(current.operation === "+") {
      result = num1+num2;
    } else if(current.operation === "-") {
      result = num1 - num2;
    } else if(current.operation === "x") {
      result = num1 * num2
    } else {
      result = num1 / num2;
    }
    setCurrent(previousState => {
      return{...previousState, currentVal:String(result),operation:"",first:""}
    });
  }

  const square = () => {
    let num1 = parseFloat(current.currentVal)
    let result = num1 * num1;
    setCurrent(previousState => {
      return{...previousState, currentVal:String(result),operation:"",first:""}
    });

  }
  const squareRt = () => {
    let num1 = parseFloat(current.currentVal)
    let result = Math.sqrt(num1);
    setCurrent(previousState => {
      return{...previousState, currentVal:String(result),operation:"",first:""}
    });

  }

  const thanks = () => {
    const message = "Thank You!";
    setCurrent(previousState => {
      return{...previousState, currentVal:message,operation:"",first:""}
    });  
  }



  const reset = () => {
    setCurrent(previousState => {
      return { ...previousState.currentVal, currentVal: "0"}
    });
  }



  return (
    <div className="App-header">
      <div className="outline">
      <input className="txtbx" value={current.currentVal} readOnly={true} />
      <div className="Thing-Grid">
        <div className="Row">
          <button className="but" onClick={() => updateTxt("1")}>1</button>
          <button className="but" onClick={() => updateTxt("2")}>2</button>
          <button className="but" onClick={() => updateTxt("3")}>3</button>
          <button className="but-2" onClick={() => updateTxt("+")}>+</button>
          <button className="but" onClick={() => reset()}>CC</button>
        </div>
        <div className="Row">
          <button className="but" onClick={() => updateTxt("4")}>4</button>
          <button className="but" onClick={() => updateTxt("5")}>5</button>
          <button className="but" onClick={() => updateTxt("6")}>6</button>
          <button className="but-2" onClick={() => updateTxt("-")}>-</button>
          <button className="but" onClick={() => square()}>[]^2</button>
        </div>
        <div className="Row">
          <button className="but" onClick={() => updateTxt("7")}>7</button>
          <button className="but" onClick={() => updateTxt("8")}>8</button>
          <button className="but" onClick={() => updateTxt("9")}>9</button>
          <button className="but-2" onClick={() => updateTxt("/")}>/</button>
          <button className="but" onClick={() => squareRt()}>sqrt</button>
        </div>
        <div className="Row">
        <button className="but" onClick={() => updateTxt(".")}>.</button>
          <button className="but" onClick={() => updateTxt("0")}>0</button>
          <button className="but" onClick={() => apply()}>=</button>
          <button className="but-2" onClick={() => updateTxt("x")}>x</button>
          <button className="but" onClick={() => thanks()}>CR</button>
        </div>
        </div>
    </div>  
    </div>
  );
}

export default App;
