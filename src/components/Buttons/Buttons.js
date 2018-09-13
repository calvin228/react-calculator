import React from "react";
import "./Buttons.css"

const Buttons = (props) => {
    return (
        <div className="buttons">
            <button type="button" onClick={props.update} className="btn-num" value="7">7</button>
            <button type="button" onClick={props.update} className="btn-num" value="8">8</button>
            <button type="button" onClick={props.update} className="btn-num" value="9">9</button>

            <button type="button" onClick={props.update} className="btn-num four" value="4">4</button>
            <button type="button" onClick={props.update} className="btn-num five" value="5">5</button>
            <button type="button" onClick={props.update} className="btn-num six" value="6">6</button>

            <button type="button" onClick={props.update} className="btn-num one" value="1">1</button>
            <button type="button" onClick={props.update} className="btn-num two" value="2">2</button>
            <button type="button" onClick={props.update} className="btn-num three" value="3">3</button>
            <button type="button" onClick={props.update} className="btn-num zero" value="0">0</button>
            <button type="button" onClick={props.inputDots} className="btn-num decimal" value=".">.</button>
            <button type="button" onClick={props.operation} className="btn-num plus-sign" value="+">+</button>
            <button type="button" onClick={props.operation} className="btn-num minus-sign" value="-">-</button>
            <button type="button" onClick={props.operation} className="btn-num times-sign" value="*">&times;</button>
            <button type="button" onClick={props.operation} className="btn-num divide-sign" value="/">&divide;</button>
            <button type="button" onClick={props.calcResult} className="btn-num result-sign" value="=">=</button>
            <button type="button" onClick={props.reset} className="btn-num clear" value="clear">C</button>
        </div>
    )
    
}
export default Buttons;

